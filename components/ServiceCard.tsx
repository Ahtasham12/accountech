'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ReactNode } from 'react'

interface ServiceCardProps {
  title: string
  description: string
  icon: ReactNode
  features: string[]
  href?: string
  accentColor?: string
}

export default function ServiceCard({
  title, description, icon, features, href,
  accentColor = '#4F8CFF',
}: ServiceCardProps) {
  return (
    <div className="glass-card rounded-2xl p-6 flex flex-col group relative overflow-hidden">
      {/* Glow on hover */}
      <div
        className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
        style={{ background: accentColor }}
        aria-hidden="true"
      />

      {/* Icon */}
      <div
        className="relative flex items-center justify-center w-11 h-11 rounded-xl mb-5 transition-all duration-300 group-hover:scale-110 flex-shrink-0"
        style={{ background: `${accentColor}18`, color: accentColor }}
        aria-hidden="true"
      >
        {icon}
      </div>

      <h3 className="text-base font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-white/50 leading-relaxed mb-5">{description}</p>

      <ul className="space-y-2 flex-1 mb-5">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-sm text-white/60">
            <span
              className="w-1 h-1 rounded-full flex-shrink-0"
              style={{ background: accentColor }}
              aria-hidden="true"
            />
            {f}
          </li>
        ))}
      </ul>

      {href && (
        <Link
          href={href}
          className="inline-flex items-center gap-1.5 text-sm font-medium transition-all duration-200 hover:gap-2.5 mt-auto opacity-60 hover:opacity-100"
          style={{ color: accentColor }}
        >
          Learn more <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
        </Link>
      )}
    </div>
  )
}
