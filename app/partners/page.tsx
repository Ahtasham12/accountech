import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Building2, TrendingUp, Clock, Shield, Users, CheckCircle, ArrowRight, Zap,
} from 'lucide-react'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'For CPA Firms — White-Label Bookkeeping Partner Program',
  description:
    'Accounting Skip partners with CPA firms as a white-label bookkeeping arm. Your brand, our AI-powered team. Starting at $300/client/month. Scale without hiring.',
  openGraph: {
    title: 'Accounting Skip CPA Partner Program',
    description: 'White-label bookkeeping for CPA firms. Your brand, our team, AI accuracy. Starting at $300/client.',
  },
}

const benefits = [
  {
    icon: TrendingUp,
    title: 'Focus on high-value advisory',
    description: "Stop spending partner hours on transaction categorization. Let us handle the bookkeeping while your team focuses on tax planning, business advisory, and growing your practice.",
    color: '#4F8CFF',
  },
  {
    icon: Building2,
    title: 'Scale without hiring',
    description: "Take on more bookkeeping clients without the overhead of training and retaining staff. We scale with your volume — you add clients, we handle the work.",
    color: '#10B981',
  },
  {
    icon: Shield,
    title: 'Your brand, our team',
    description: "We work completely white-label. Reports, deliverables, and communications go out under your firm's name. Your clients never know we exist.",
    color: '#00D4FF',
  },
  {
    icon: Clock,
    title: 'Consistent, on-time delivery',
    description: "Every client gets books delivered by the 5th of the month, every month. No more chasing bookkeepers. No more delayed tax prep because books weren't ready.",
    color: '#8B5CF6',
  },
]

const howItWorks = [
  {
    step: '01',
    title: 'Partner onboarding',
    description: 'We sign a white-label partnership agreement and NDA. You set up a dedicated partner account. We review your typical client profiles.',
    color: '#4F8CFF',
  },
  {
    step: '02',
    title: 'Client handoff',
    description: 'You introduce us to the client (as your bookkeeping team). We handle setup: accounting platform access, bank feeds, chart of accounts.',
    color: '#10B981',
  },
  {
    step: '03',
    title: 'Monthly workflow',
    description: 'Each month, we deliver clean books and reports under your brand by the 5th. You review, add advisory notes, and deliver to your client.',
    color: '#00D4FF',
  },
  {
    step: '04',
    title: 'Billing & support',
    description: 'You bill your client at your rate. We invoice you at partner rates. You keep the margin. Questions go through your dedicated partner manager.',
    color: '#8B5CF6',
  },
]

const includedPerClient = [
  'Full monthly bookkeeping',
  'AI transaction categorization',
  'Bank and credit card reconciliation',
  'P&L, Balance Sheet, and Cash Flow',
  'Plain-English financial narrative (your brand)',
  'Receipt management',
  'Dedicated QBO-certified bookkeeper',
  '7-day close timeline (standard)',
]

const pricingTiers = [
  {
    name: 'Standard clients',
    price: '$300',
    period: '/mo',
    description: 'Up to 300 transactions/month per client. Ideal for most small business clients.',
    color: '#4F8CFF',
  },
  {
    name: 'High-volume clients',
    price: '$550',
    period: '/mo',
    description: 'Up to 750 transactions/month. Includes AP/AR and sales tax prep.',
    color: '#10B981',
  },
  {
    name: 'Enterprise clients',
    price: 'Custom',
    period: '',
    description: 'Unlimited transactions, multi-entity, multi-location. Custom quote.',
    color: '#00D4FF',
  },
]

export default function PartnersPage() {
  return (
    <>
      {/* Hero */}
      <section className="aurora-bg section-pad pt-32 sm:pt-40" aria-labelledby="partners-heading">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="gradient-mesh" />
          </div>
        </div>
        <div className="relative container-xl max-w-4xl text-center">
          <AnimateOnScroll variant="fade-up">
            <div className="badge mb-4">
              <Zap className="w-3 h-3" aria-hidden="true" />
              For CPA Firms
            </div>
            <h1 id="partners-heading" className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Let us handle the bookkeeping.{' '}
              <span className="text-gradient">You focus on advisory.</span>
            </h1>
            <p className="section-sub max-w-xl mx-auto mb-8">
              White-label bookkeeping for CPA firms. Your clients never know we exist. AI-powered monthly bookkeeping,
              done under your brand, starting at{' '}
              <span className="text-white font-semibold">$300/client/month</span>.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary !px-8 !py-4 shadow-glow-blue">
                Schedule Partnership Call <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
              <a href="mailto:team@accountingskip.com" className="btn-ghost !px-8 !py-4">
                Email Us Directly
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Why partner */}
      <section className="bg-navy-800 section-pad" aria-labelledby="why-heading">
        <div className="container-xl">
          <div className="text-center mb-16">
            <AnimateOnScroll variant="fade-up">
              <div className="badge mb-4">Why Partner With Us</div>
              <h2 id="why-heading" className="section-heading mb-4">
                Built for CPA firm workflows
              </h2>
              <p className="section-sub max-w-xl mx-auto">
                We've designed our partner program to fit into how CPA firms already work — not to disrupt it.
              </p>
            </AnimateOnScroll>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map(({ icon: Icon, title, description, color }, i) => (
              <AnimateOnScroll key={title} variant="fade-up" delay={i * 0.08}>
                <div className="glass-card rounded-2xl p-6 h-full group">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                    style={{ background: `${color}18`, color }}
                    aria-hidden="true"
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-white mb-3">{title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-navy section-pad" aria-labelledby="process-heading">
        <div className="container-xl max-w-5xl">
          <div className="text-center mb-16">
            <AnimateOnScroll variant="fade-up">
              <div className="badge mb-4">The Process</div>
              <h2 id="process-heading" className="section-heading mb-4">
                How the partnership works
              </h2>
            </AnimateOnScroll>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((step, i) => (
              <AnimateOnScroll key={step.step} variant="fade-up" delay={i * 0.1}>
                <div className="glass-card rounded-2xl p-6 relative overflow-hidden">
                  <div className="text-5xl font-black mb-4 leading-none" style={{ color: `${step.color}20` }}>
                    {step.step}
                  </div>
                  <div className="w-8 h-1 rounded-full mb-4" style={{ background: step.color }} aria-hidden="true" />
                  <h3 className="font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{step.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & What's included */}
      <section className="bg-navy-800 section-pad" aria-labelledby="partner-pricing-heading">
        <div className="container-xl max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <AnimateOnScroll variant="fade-up">
              <div>
                <div className="badge mb-4">Partner Pricing</div>
                <h2 id="partner-pricing-heading" className="section-heading mb-6">
                  Transparent partner rates
                </h2>
                <div className="space-y-4">
                  {pricingTiers.map((tier) => (
                    <div key={tier.name} className="glass-card rounded-2xl p-5">
                      <div className="flex items-baseline justify-between mb-2">
                        <h3 className="font-bold text-white">{tier.name}</h3>
                        <span className="text-2xl font-black" style={{ color: tier.color }}>
                          {tier.price}
                          <span className="text-base font-medium text-white/40">{tier.period}</span>
                        </span>
                      </div>
                      <p className="text-sm text-white/50">{tier.description}</p>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-white/30 mt-4">
                  You bill your clients at whatever rate you charge. We invoice you at partner rates. The margin is yours.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll variant="fade-up" delay={0.15}>
              <div>
                <h3 className="font-bold text-white text-lg mb-6">Included with every client</h3>
                <ul className="space-y-3 mb-8">
                  {includedPerClient.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald flex-shrink-0" aria-hidden="true" />
                      <span className="text-white/70 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="glass-card rounded-2xl p-6 border border-accent/20" style={{ background: 'linear-gradient(135deg, rgba(79,140,255,0.10) 0%, rgba(0,212,255,0.05) 100%)' }}>
                  <h4 className="font-bold text-white mb-2">Ready to talk partnership?</h4>
                  <p className="text-white/50 text-sm mb-5">
                    Schedule a 20-minute call to see if our program is a fit for your firm.
                  </p>
                  <Link
                    href="/contact"
                    className="w-full btn-primary justify-center"
                  >
                    Schedule Partnership Call
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="bg-navy section-pad" aria-labelledby="fit-heading">
        <div className="container-xl max-w-4xl">
          <AnimateOnScroll variant="fade-up">
            <h2 id="fit-heading" className="section-heading text-center mb-12">
              The right fit for our partner program
            </h2>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-2 gap-6">
            <AnimateOnScroll variant="fade-up">
              <div className="glass-card rounded-2xl p-6 border-l-2 border-l-emerald/60">
                <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald" aria-hidden="true" />
                  Great fit
                </h3>
                <ul className="space-y-2.5">
                  {[
                    'CPA firms with 5–50 bookkeeping clients',
                    'Firms looking to stop doing bookkeeping in-house',
                    'Tax practices wanting to offer bookkeeping without staffing it',
                    'Firms with small business, e-commerce, or retail clients',
                    'Solo CPAs who want to scale their book of business',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-white/60">
                      <span className="w-1.5 h-1.5 bg-emerald/60 rounded-full flex-shrink-0 mt-1.5" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll variant="fade-up" delay={0.1}>
              <div className="glass-card rounded-2xl p-6 border-l-2 border-l-white/[0.10]">
                <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-white/30" aria-hidden="true" />
                  Not the right fit (yet)
                </h3>
                <ul className="space-y-2.5">
                  {[
                    'Firms needing full audit support',
                    'Clients with over 5,000 transactions/month (contact us)',
                    'Non-profit or government accounting',
                    'International accounting (non-US)',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-white/40">
                      <span className="w-1.5 h-1.5 bg-white/20 rounded-full flex-shrink-0 mt-1.5" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <CTABanner
        headline="Partner with Accounting Skip"
        subtext="One partnership call is all it takes. We'll walk you through our process, answer your questions, and build a pilot plan together."
        primaryCTA="Schedule Partnership Call"
        primaryHref="/contact"
        secondaryCTA="View Services"
        secondaryHref="/services"
      />
    </>
  )
}
