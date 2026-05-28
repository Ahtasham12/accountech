'use client'

import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'
import { ReactNode } from 'react'

interface IndustryCardProps {
  title: string
  description: string
  icon: ReactNode
  features: string[]
  href?: string
  accentColor?: string
}

export default function IndustryCard({
  title, description, icon, features, href,
  accentColor = '#4F8CFF',
}: IndustryCardProps) {
  return (
    <div className="glass-card rounded-2xl p-7 flex flex-col group relative overflow-hidden">
      {/* Background glow on hover */}
      <div
        className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
        style={{ background: accentColor }}
        aria-hidden="true"
      />

      {/* Icon */}
      <div
        className="relative flex items-center justify-center w-14 h-14 rounded-2xl mb-5 transition-all duration-300 group-hover:scale-105"
        style={{ background: `${accentColor}18`, color: accentColor }}
        aria-hidden="true"
      >
        {icon}
      </div>

      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-white/50 leading-relaxed mb-6 text-sm">{description}</p>

      <ul className="space-y-2.5 flex-1 mb-6" aria-label={`${title} features`}>
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2.5">
            <Check
              className="w-4 h-4 flex-shrink-0 mt-0.5"
              style={{ color: accentColor }}
              aria-hidden="true"
            />
            <span className="text-sm text-white/70">{f}</span>
          </li>
        ))}
      </ul>

      {href && (
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 hover:gap-3 mt-auto opacity-70 hover:opacity-100"
          style={{ color: accentColor }}
        >
          Learn more <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </Link>
      )}
    </div>
  )
}
