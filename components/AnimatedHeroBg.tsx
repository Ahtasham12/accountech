'use client'

/**
 * AnimatedHeroBg
 * ─────────────────────────────────────────────────────────────────
 * Renders three slow-moving gradient orbs behind the hero section.
 *
 * UI/UX Pro Max rules observed:
 *  - transform-performance  → only translateX/Y + scale (GPU-composited)
 *  - reduced-motion         → returns null; static aurora-bg CSS stays
 *  - parallax-subtle        → long durations (16–26 s), opacity ≤ 0.22
 *  - excessive-motion       → one ambient background element, not per-word
 *  - motion-meaning         → flowing orbs convey "AI running in background"
 *  - no-blocking-animation  → pointer-events-none, aria-hidden
 */

import { motion, useReducedMotion } from 'framer-motion'

// ─── Orb definitions ──────────────────────────────────────────────
// Each orb has a colour, size, start position, and a unique float path.
// Paths use 5-point keyframes with matching start/end → seamless infinite loop.

const orbs = [
  {
    // Blue — top-left quadrant
    color:    'rgba(79, 140, 255, 0.22)',
    size:     700,
    top:      '-18%',
    left:     '5%',
    duration: 20,
    delay:    0,
    x: [0,  80,  40, -30,  0],
    y: [0, -40,  20,  50,  0],
    s: [1, 1.08, 0.97, 1.04, 1],
  },
  {
    // Cyan — top-right quadrant
    color:    'rgba(0, 212, 255, 0.14)',
    size:     580,
    top:      '-12%',
    right:    '2%',
    duration: 26,
    delay:    5,
    x: [0, -60, -20,  40,  0],
    y: [0,  30,  70, -20,  0],
    s: [1, 0.95, 1.06, 0.98, 1],
  },
  {
    // Purple — bottom-centre
    color:    'rgba(139, 92, 246, 0.12)',
    size:     520,
    bottom:   '-14%',
    left:     '35%',
    duration: 22,
    delay:    9,
    x: [0,  50, -10, -50,  0],
    y: [0, -50, -20,  30,  0],
    s: [1, 1.05, 0.94, 1.02, 1],
  },
]

// ─── Component ────────────────────────────────────────────────────
export default function AnimatedHeroBg() {
  const reduced = useReducedMotion()

  // Static aurora-bg CSS already provides a subtle gradient — enough for
  // users who prefer no motion.
  if (reduced) return null

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width:    orb.size,
            height:   orb.size,
            top:      orb.top    ?? 'auto',
            left:     orb.left   ?? 'auto',
            right:    (orb as { right?: string }).right  ?? 'auto',
            bottom:   (orb as { bottom?: string }).bottom ?? 'auto',
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 68%)`,
            // blur is set once via style (not animated) → no reflow
            filter:   'blur(72px)',
            willChange: 'transform',
          }}
          animate={{
            x:     orb.x,
            y:     orb.y,
            scale: orb.s,
          }}
          transition={{
            duration:   orb.duration,
            delay:      orb.delay,
            repeat:     Infinity,
            ease:       'easeInOut',
            // Times spread keyframes evenly across the duration
            times:      [0, 0.25, 0.5, 0.75, 1],
          }}
        />
      ))}

      {/* Noise grain overlay — premium dark-SaaS texture, static */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: '180px 180px',
        }}
      />
    </div>
  )
}
