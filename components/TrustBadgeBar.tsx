import { Shield, Award, Zap, Lock, MapPin } from 'lucide-react'

const badges = [
  { icon: MapPin, label: 'Florida LLC', sub: 'US-Based Entity' },
  { icon: Award, label: 'QBO ProAdvisor', sub: 'Certified' },
  { icon: Zap, label: 'AI-Powered', sub: 'Claude API' },
  { icon: Lock, label: 'SOC 2', sub: 'Compliant' },
  { icon: Shield, label: 'Bank-Level', sub: 'Security' },
]

interface TrustBadgeBarProps {
  className?: string
}

export default function TrustBadgeBar({ className = '' }: TrustBadgeBarProps) {
  return (
    <div
      className={`flex flex-wrap items-center justify-center gap-3 ${className}`}
      aria-label="Trust and certification badges"
    >
      {badges.map(({ icon: Icon, label, sub }) => (
        <div
          key={label}
          className="flex items-center gap-2 px-3.5 py-2 glass rounded-xl"
        >
          <Icon className="w-4 h-4 flex-shrink-0 text-accent" aria-hidden="true" />
          <div>
            <div className="text-xs font-semibold text-white leading-none">{label}</div>
            <div className="text-xs text-white/40 leading-none mt-0.5">{sub}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
