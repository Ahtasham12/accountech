import Link from 'next/link'
import { Home, ArrowRight } from 'lucide-react'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
]

export default function NotFound() {
  return (
    <div
      className="min-h-dvh aurora-bg flex items-center justify-center px-4 py-32 relative overflow-hidden"
      role="main"
    >
      {/* Animated mesh */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="gradient-mesh opacity-60" />
        <div className="grid-overlay absolute inset-0 opacity-30" />
      </div>

      <div className="relative text-center max-w-lg mx-auto">
        {/* 404 */}
        <div
          className="text-[120px] sm:text-[160px] font-black leading-none mb-2 text-gradient"
          aria-hidden="true"
        >
          404
        </div>

        {/* Glow bar */}
        <div className="w-24 h-1 bg-gradient-to-r from-accent to-cyan rounded-full mx-auto mb-8" aria-hidden="true" />

        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Page not found
        </h1>
        <p className="text-white/50 mb-10 leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <Link href="/" className="btn-primary shadow-glow-blue">
            <Home className="w-4 h-4" aria-hidden="true" />
            Go Home
          </Link>
          <Link href="/contact" className="btn-ghost">
            Contact Support
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        {/* Quick links */}
        <div>
          <p className="text-xs font-semibold text-white/30 mb-4 uppercase tracking-widest">Quick links</p>
          <div className="flex flex-wrap justify-center gap-2">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/60 hover:text-white glass px-4 py-2 rounded-xl transition-all duration-150 hover:border-white/20"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
