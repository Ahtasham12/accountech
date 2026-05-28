import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface CTABannerProps {
  headline?: string
  subtext?: string
  primaryCTA?: string
  primaryHref?: string
  secondaryCTA?: string
  secondaryHref?: string
}

export default function CTABanner({
  headline = 'Ready to close your books in 5 days?',
  subtext = 'Join hundreds of US small businesses who trust AccounTech for accurate, AI-powered bookkeeping. No setup fees. Cancel anytime.',
  primaryCTA = 'Schedule Free Consultation',
  primaryHref = '/contact',
  secondaryCTA = 'View Pricing',
  secondaryHref = '/pricing',
}: CTABannerProps) {
  return (
    <section className="relative overflow-hidden bg-navy-800 border-t border-white/[0.06]" aria-labelledby="cta-heading">
      {/* Gradient bg */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan/8 rounded-full blur-3xl" />
      </div>

      {/* Top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" aria-hidden="true" />

      <div className="relative section-pad">
        <div className="container-xl text-center">
          <div className="max-w-3xl mx-auto">
            <h2 id="cta-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
              {headline}
            </h2>
            <p className="text-lg text-white/50 mb-10 leading-relaxed">{subtext}</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href={primaryHref} className="btn-primary !px-8 !py-4 text-base shadow-glow-blue">
                {primaryCTA}
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
              {secondaryCTA && (
                <Link href={secondaryHref!} className="btn-ghost !px-8 !py-4 text-base">
                  {secondaryCTA}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
