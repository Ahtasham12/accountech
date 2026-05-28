'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  tx: number
  ty: number
  progress: number
  speed: number
  size: number
  color: string
  alpha: number
  phase: 'input' | 'processing' | 'output'
  outputIndex: number
  delay: number
  active: boolean
}

const COLORS = {
  accent: '#4F8CFF',
  cyan: '#00D4FF',
  emerald: '#10B981',
  purple: '#8B5CF6',
}

const CATEGORIES = [
  { label: 'Expenses', color: '#4F8CFF' },
  { label: 'Revenue', color: '#10B981' },
  { label: 'Assets', color: '#00D4FF' },
  { label: 'Tax', color: '#8B5CF6' },
]

export default function AIVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animRef = useRef<number>(0)
  const timeRef = useRef(0)
  const particlesRef = useRef<Particle[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * window.devicePixelRatio
      canvas.height = rect.height * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    resize()
    window.addEventListener('resize', resize)

    const getW = () => canvas.getBoundingClientRect().width
    const getH = () => canvas.getBoundingClientRect().height

    const spawnParticle = (time: number): Particle => {
      const w = getW(), h = getH()
      const inputY = h * 0.2 + Math.random() * h * 0.6
      const outputIdx = Math.floor(Math.random() * CATEGORIES.length)
      const outputY = h * 0.15 + (outputIdx / (CATEGORIES.length - 1)) * h * 0.7
      return {
        x: w * 0.06,
        y: inputY,
        tx: w * 0.45,
        ty: h * 0.5,
        progress: 0,
        speed: 0.003 + Math.random() * 0.003,
        size: 3 + Math.random() * 2,
        color: CATEGORIES[outputIdx].color,
        alpha: 0,
        phase: 'input',
        outputIndex: outputIdx,
        delay: time + Math.random() * 600,
        active: true,
      }
    }

    // Create initial pool
    particlesRef.current = Array.from({ length: 12 }, (_, i) => {
      const p = spawnParticle(0)
      p.delay = i * 150
      return p
    })

    const drawGlow = (x: number, y: number, r: number, color: string, intensity: number) => {
      const g = ctx.createRadialGradient(x, y, 0, x, y, r)
      g.addColorStop(0, color.replace(')', `, ${intensity})`).replace('rgb', 'rgba').replace('#', 'rgba(').replace('rgba(', `rgba(`))
      const hex2rgba = (hex: string, a: number) => {
        const r2 = parseInt(hex.slice(1, 3), 16)
        const g2 = parseInt(hex.slice(3, 5), 16)
        const b2 = parseInt(hex.slice(5, 7), 16)
        return `rgba(${r2},${g2},${b2},${a})`
      }
      const grad = ctx.createRadialGradient(x, y, 0, x, y, r)
      grad.addColorStop(0, hex2rgba(color, intensity))
      grad.addColorStop(1, hex2rgba(color, 0))
      ctx.fillStyle = grad
      ctx.beginPath()
      ctx.arc(x, y, r, 0, Math.PI * 2)
      ctx.fill()
    }

    const drawNode = (x: number, y: number, r: number, color: string, label: string, pulse: number) => {
      // Outer glow
      drawGlow(x, y, r * 3, color, 0.12 + pulse * 0.05)
      // Circle
      ctx.beginPath()
      ctx.arc(x, y, r, 0, Math.PI * 2)
      const hex2rgb = (hex: string) => {
        const r2 = parseInt(hex.slice(1, 3), 16)
        const g2 = parseInt(hex.slice(3, 5), 16)
        const b2 = parseInt(hex.slice(5, 7), 16)
        return `${r2},${g2},${b2}`
      }
      ctx.fillStyle = `rgba(${hex2rgb(color)},0.15)`
      ctx.fill()
      ctx.strokeStyle = `rgba(${hex2rgb(color)},0.6)`
      ctx.lineWidth = 1.5
      ctx.stroke()
      // Label
      ctx.fillStyle = color
      ctx.font = `500 10px Inter, sans-serif`
      ctx.textAlign = 'center'
      ctx.fillText(label, x, y + r + 14)
    }

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t
    const easeInOut = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t

    const draw = (timestamp: number) => {
      const w = getW(), h = getH()
      ctx.clearRect(0, 0, w, h)

      const cx = w * 0.5, cy = h * 0.5
      const aiR = Math.min(w, h) * 0.1
      const pulse = Math.sin(timestamp / 1200) * 0.5 + 0.5

      // Grid lines (very subtle)
      ctx.strokeStyle = 'rgba(255,255,255,0.025)'
      ctx.lineWidth = 1
      for (let x2 = 0; x2 < w; x2 += 48) {
        ctx.beginPath(); ctx.moveTo(x2, 0); ctx.lineTo(x2, h); ctx.stroke()
      }
      for (let y2 = 0; y2 < h; y2 += 48) {
        ctx.beginPath(); ctx.moveTo(0, y2); ctx.lineTo(w, y2); ctx.stroke()
      }

      // Input label
      ctx.fillStyle = 'rgba(255,255,255,0.25)'
      ctx.font = `600 10px Inter`
      ctx.textAlign = 'left'
      ctx.fillText('TRANSACTIONS', w * 0.04, h * 0.1)

      // Output nodes (right side)
      const outputNodes = CATEGORIES.map((cat, i) => ({
        x: w * 0.88,
        y: h * 0.15 + (i / (CATEGORIES.length - 1)) * h * 0.7,
        ...cat,
      }))

      outputNodes.forEach(node => {
        drawNode(node.x, node.y, 16, node.color, node.label, pulse)
      })

      // Central AI brain
      // Pulsing rings
      for (let ring = 0; ring < 3; ring++) {
        const ringPulse = (pulse + ring * 0.33) % 1
        ctx.beginPath()
        ctx.arc(cx, cy, aiR * (1 + ringPulse * 0.8), 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(79,140,255,${0.15 * (1 - ringPulse)})`
        ctx.lineWidth = 1.5
        ctx.stroke()
      }

      // AI glow base
      drawGlow(cx, cy, aiR * 2.5, '#4F8CFF', 0.15 + pulse * 0.08)

      // AI circle body
      const aiGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, aiR)
      aiGrad.addColorStop(0, `rgba(79,140,255,0.3)`)
      aiGrad.addColorStop(0.6, `rgba(79,140,255,0.15)`)
      aiGrad.addColorStop(1, `rgba(0,212,255,0.05)`)
      ctx.beginPath()
      ctx.arc(cx, cy, aiR, 0, Math.PI * 2)
      ctx.fillStyle = aiGrad
      ctx.fill()
      ctx.strokeStyle = `rgba(79,140,255,${0.5 + pulse * 0.3})`
      ctx.lineWidth = 1.5
      ctx.stroke()

      // AI label
      ctx.fillStyle = '#FFFFFF'
      ctx.font = `700 ${Math.max(aiR * 0.3, 11)}px Inter`
      ctx.textAlign = 'center'
      ctx.fillText('AI', cx, cy + 2)
      ctx.fillStyle = 'rgba(79,140,255,0.8)'
      ctx.font = `500 9px Inter`
      ctx.fillText('Claude API', cx, cy + aiR + 14)

      // Orbit ring
      ctx.beginPath()
      ctx.arc(cx, cy, aiR * 1.4, 0, Math.PI * 2)
      ctx.setLineDash([3, 8])
      ctx.strokeStyle = `rgba(79,140,255,0.2)`
      ctx.lineWidth = 1
      ctx.stroke()
      ctx.setLineDash([])
      // Orbit dot
      const orbitAngle = (timestamp / 2000) * Math.PI * 2
      const orbitX = cx + Math.cos(orbitAngle) * aiR * 1.4
      const orbitY = cy + Math.sin(orbitAngle) * aiR * 1.4
      ctx.beginPath()
      ctx.arc(orbitX, orbitY, 3, 0, Math.PI * 2)
      ctx.fillStyle = '#00D4FF'
      ctx.fill()

      // Connection lines from AI to output nodes
      outputNodes.forEach(node => {
        ctx.beginPath()
        ctx.moveTo(cx + aiR, cy)
        ctx.bezierCurveTo(cx + (node.x - cx) * 0.4, cy, cx + (node.x - cx) * 0.6, node.y, node.x - 18, node.y)
        ctx.strokeStyle = `rgba(${parseInt(node.color.slice(1, 3), 16)},${parseInt(node.color.slice(3, 5), 16)},${parseInt(node.color.slice(5, 7), 16)},0.12)`
        ctx.lineWidth = 1
        ctx.setLineDash([3, 6])
        ctx.stroke()
        ctx.setLineDash([])
      })

      // Update + draw particles
      particlesRef.current.forEach((p, idx) => {
        if (!p.active) return
        if (timestamp < p.delay) return

        // Fade in
        p.alpha = Math.min(p.alpha + 0.04, 1)
        p.progress += p.speed

        const hex2rgb = (hex: string) => {
          const r2 = parseInt(hex.slice(1, 3), 16)
          const g2 = parseInt(hex.slice(3, 5), 16)
          const b2 = parseInt(hex.slice(5, 7), 16)
          return `${r2},${g2},${b2}`
        }

        if (p.phase === 'input') {
          // Bezier curve from input to AI center
          const t = easeInOut(Math.min(p.progress, 1))
          const cpX = w * 0.25, cpY = p.y
          const cpX2 = cx - 40, cpY2 = cy
          const bx = Math.pow(1-t,3)*p.x + 3*Math.pow(1-t,2)*t*cpX + 3*(1-t)*t*t*cpX2 + Math.pow(t,3)*(cx - aiR)
          const by = Math.pow(1-t,3)*p.y + 3*Math.pow(1-t,2)*t*cpY + 3*(1-t)*t*t*cpY2 + Math.pow(t,3)*cy

          // Trail
          ctx.beginPath()
          ctx.arc(bx, by, p.size * 0.5, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${hex2rgb(p.color)},${p.alpha * 0.3})`
          ctx.fill()

          // Particle
          ctx.beginPath()
          ctx.arc(bx, by, p.size, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${hex2rgb(p.color)},${p.alpha})`
          ctx.fill()

          if (p.progress >= 1) {
            p.phase = 'processing'
            p.progress = 0
          }
        } else if (p.phase === 'processing') {
          // Pause at AI center with flash
          const flash = Math.sin(p.progress * Math.PI)
          ctx.beginPath()
          ctx.arc(cx, cy, aiR * 0.6 * flash, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${hex2rgb(p.color)},${flash * 0.4})`
          ctx.fill()

          if (p.progress >= 0.8) {
            p.phase = 'output'
            p.progress = 0
            p.x = cx + aiR
            p.y = cy
            const outNode = outputNodes[p.outputIndex]
            p.tx = outNode.x - 18
            p.ty = outNode.y
          }
        } else if (p.phase === 'output') {
          const t = easeInOut(Math.min(p.progress, 1))
          const cpX = cx + (p.tx - cx) * 0.3
          const cpY = cy
          const cpX2 = cx + (p.tx - cx) * 0.7
          const cpY2 = p.ty
          const bx = Math.pow(1-t,3)*p.x + 3*Math.pow(1-t,2)*t*cpX + 3*(1-t)*t*t*cpX2 + Math.pow(t,3)*p.tx
          const by = Math.pow(1-t,3)*p.y + 3*Math.pow(1-t,2)*t*cpY + 3*(1-t)*t*t*cpY2 + Math.pow(t,3)*p.ty

          ctx.beginPath()
          ctx.arc(bx, by, p.size, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${hex2rgb(p.color)},${p.alpha * (1 - t * 0.5)})`
          ctx.fill()

          if (p.progress >= 1) {
            // Respawn
            particlesRef.current[idx] = spawnParticle(timestamp)
          }
        }
      })

      animRef.current = requestAnimationFrame(draw)
    }

    animRef.current = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      aria-hidden="true"
      role="presentation"
    />
  )
}
