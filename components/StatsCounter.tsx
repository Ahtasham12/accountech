'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { TrendingUp, Clock, Target, DollarSign } from 'lucide-react'

interface Stat {
  icon: React.ReactNode
  value: number
  decimals: number
  suffix: string
  prefix: string
  label: string
  sublabel: string
  color: string
}

const stats: Stat[] = [
  {
    icon: <TrendingUp className="w-5 h-5" />,
    value: 80,
    decimals: 0,
    suffix: '%',
    prefix: '',
    label: 'Auto-categorized',
    sublabel: 'by AI instantly',
    color: 'text-accent',
  },
  {
    icon: <Clock className="w-5 h-5" />,
    value: 5,
    decimals: 0,
    suffix: ' days',
    prefix: '',
    label: 'Month-end close',
    sublabel: 'down from 21+',
    color: 'text-cyan',
  },
  {
    icon: <Target className="w-5 h-5" />,
    value: 99.2,
    decimals: 1,
    suffix: '%',
    prefix: '',
    label: 'Accuracy rate',
    sublabel: 'human-verified',
    color: 'text-emerald',
  },
  {
    icon: <DollarSign className="w-5 h-5" />,
    value: 349,
    decimals: 0,
    suffix: '/mo',
    prefix: '$',
    label: 'Starting price',
    sublabel: 'no setup fees',
    color: 'text-accent',
  },
]

function useCountUp(target: number, decimals: number, active: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    const duration = 1600
    const fps = 60
    const steps = (duration / 1000) * fps
    const increment = target / steps
    let current = 0
    let frame = 0

    const timer = setInterval(() => {
      frame++
      current = Math.min(current + increment, target)
      setCount(parseFloat(current.toFixed(decimals)))
      if (frame >= steps) clearInterval(timer)
    }, 1000 / fps)

    return () => clearInterval(timer)
  }, [target, decimals, active])

  return count
}

function StatCard({ stat, index }: { stat: Stat; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const count = useCountUp(stat.value, stat.decimals, inView)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="glass-card rounded-2xl p-5 flex-1 min-w-0"
    >
      <div className={`inline-flex items-center justify-center w-9 h-9 rounded-lg mb-4 bg-current/10 ${stat.color}`}>
        <span className={stat.color}>{stat.icon}</span>
      </div>

      <div className={`text-3xl sm:text-4xl font-bold mb-1 ${stat.color} tabular-nums`} aria-label={`${stat.prefix}${stat.value}${stat.suffix} ${stat.label}`}>
        {stat.prefix}{count.toFixed(stat.decimals)}{stat.suffix}
      </div>

      <div className="text-sm font-semibold text-white mb-0.5">{stat.label}</div>
      <div className="text-xs text-white/40">{stat.sublabel}</div>
    </motion.div>
  )
}

export default function StatsCounter() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4" role="list" aria-label="Key statistics">
      {stats.map((stat, i) => (
        <div key={stat.label} role="listitem">
          <StatCard stat={stat} index={i} />
        </div>
      ))}
    </div>
  )
}
