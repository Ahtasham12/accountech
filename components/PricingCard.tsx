import Link from 'next/link'
import { Check, Zap, Star } from 'lucide-react'

interface PricingCardProps {
  name: string
  monthlyPrice: number
  annualPrice: number
  annual: boolean
  description: string
  features: string[]
  highlighted?: boolean
  badge?: string
  bestFor: string
  timeline: string
}

export default function PricingCard({
  name, monthlyPrice, annualPrice, annual,
  description, features, highlighted = false,
  badge, bestFor, timeline,
}: PricingCardProps) {
  const price = annual ? annualPrice : monthlyPrice
  const savings = monthlyPrice - annualPrice

  return (
    <div
      className={`relative flex flex-col rounded-2xl p-8 transition-all duration-300 ${
        highlighted
          ? 'pricing-popular'
          : 'glass-card'
      }`}
      aria-label={`${name} plan at $${price} per month`}
    >
      {/* Popular badge */}
      {badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-accent to-cyan text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-glow-blue-sm">
            <Star className="w-3 h-3 fill-current" aria-hidden="true" />
            {badge}
          </span>
        </div>
      )}

      {/* Glow effect for popular */}
      {highlighted && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" aria-hidden="true" />
      )}

      {/* Header */}
      <div className="mb-7">
        <div className="flex items-center gap-2 mb-3">
          {highlighted && <Zap className="w-4 h-4 text-cyan" aria-hidden="true" />}
          <h3 className={`text-base font-semibold ${highlighted ? 'text-white' : 'text-white/80'}`}>{name}</h3>
        </div>

        <div className="flex items-baseline gap-1 mb-2">
          <span className={`text-5xl font-bold ${highlighted ? 'text-white' : 'text-white'}`}>
            ${price.toLocaleString()}
          </span>
          <span className="text-white/40 text-sm">/month</span>
        </div>

        {annual && savings > 0 && (
          <div className="inline-flex items-center gap-1.5 text-xs text-emerald font-semibold mb-3">
            <span className="w-1.5 h-1.5 bg-emerald rounded-full" aria-hidden="true" />
            Save ${savings}/month with annual billing
          </div>
        )}

        <p className="text-sm text-white/50 leading-relaxed">{description}</p>
      </div>

      {/* Features */}
      <ul className="space-y-3 flex-1 mb-7" aria-label="Plan features">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-3">
            <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${highlighted ? 'bg-accent/20' : 'bg-white/[0.06]'}`}>
              <Check className={`w-3 h-3 ${highlighted ? 'text-accent' : 'text-white/50'}`} aria-hidden="true" />
            </div>
            <span className="text-sm text-white/70">{f}</span>
          </li>
        ))}
      </ul>

      {/* Timeline + Best for */}
      <div className={`rounded-xl p-3.5 mb-6 text-sm ${highlighted ? 'bg-accent/10 border border-accent/20' : 'bg-white/[0.03] border border-white/[0.06]'}`}>
        <div className="flex justify-between items-center mb-2">
          <span className="text-white/40">Close timeline</span>
          <span className={`font-semibold ${highlighted ? 'text-accent' : 'text-white'}`}>{timeline}</span>
        </div>
        <div className={`text-xs pt-2 border-t ${highlighted ? 'border-accent/20 text-white/40' : 'border-white/[0.06] text-white/30'}`}>
          Best for: {bestFor}
        </div>
      </div>

      {/* CTA */}
      <Link
        href="/contact"
        className={`w-full flex items-center justify-center font-semibold py-3.5 rounded-xl transition-all duration-200 text-base ${
          highlighted
            ? 'bg-gradient-to-r from-accent to-accent-dark text-white shadow-glow-blue-sm hover:shadow-glow-blue hover:scale-[1.02]'
            : 'glass border-white/10 text-white hover:border-accent/30 hover:bg-accent/[0.08]'
        }`}
      >
        Get Started
      </Link>

      <p className="text-center text-xs text-white/25 mt-3">No setup fees · Cancel anytime</p>
    </div>
  )
}
