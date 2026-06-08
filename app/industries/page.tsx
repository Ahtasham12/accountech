import type { Metadata } from 'next'
import Link from 'next/link'
import { ShoppingBag, Building2, Fuel, Check, AlertCircle, ArrowRight, Zap } from 'lucide-react'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Industries — Bookkeeping for E-commerce, Restaurants & Convenience Stores',
  description:
    'Specialized bookkeeping for Amazon sellers, Shopify stores, restaurants, and convenience stores/gas stations. Industry-specific expertise and reporting.',
  openGraph: {
    title: 'Accounting Skip Industries — Specialized Bookkeeping',
    description: 'We specialize in the businesses we serve — not generic bookkeeping.',
  },
}

const industries = [
  {
    id: 'ecommerce',
    Icon: ShoppingBag,
    title: 'E-commerce & Amazon Sellers',
    subtitle: 'Multi-channel reconciliation built for FBA complexity',
    color: '#4F8CFF',
    description:
      "Amazon FBA, Shopify, eBay, Walmart — each platform settles differently, has different fee structures, and handles returns uniquely. Generic bookkeepers get lost in the complexity. We've built processes specifically for multi-channel sellers.",
    painPoints: [
      "Amazon settlements that don't match your expected deposits",
      'FBA fees eating into margins without clear tracking',
      'Returns and refunds creating reconciliation nightmares',
      'Multi-state sales tax from economic nexus rules',
      "Inventory costing that's never quite right",
      "COGS calculations that don't reflect your actual cost",
    ],
    approach:
      "We connect directly to Amazon Seller Central, Shopify, and your bank feeds. Every settlement gets reconciled line by line — FBA fees, referral fees, storage charges, reimbursements, and returns — all tracked separately.",
    features: [
      'Amazon settlement reconciliation (biweekly)',
      'Shopify and multi-channel daily settlement tracking',
      'FBA fee analysis by category',
      'Inventory costing (FIFO or weighted average)',
      'Returns, refunds, and chargeback management',
      'COGS calculation by product/SKU',
      'Multi-state sales tax nexus tracking',
      'Monthly marketplace fee benchmarking',
    ],
    deliverables: ['Settlement reconciliation report', 'Marketplace fee breakdown', 'COGS summary', 'Inventory valuation', 'Sales tax nexus report'],
  },
  {
    id: 'restaurants',
    Icon: Building2,
    title: 'Restaurants & Food Service',
    subtitle: 'Food cost tracking, POS reconciliation, and delivery settlements',
    color: '#10B981',
    description:
      "Restaurant bookkeeping involves daily POS reconciliation, food cost management, tip reporting, and reconciling deposits from DoorDash, Uber Eats, and Grubhub. We do all of it — so you can focus on your kitchen.",
    painPoints: [
      'POS systems that produce raw data but no reconciled books',
      'Food costs drifting above 35% without clear visibility',
      'Tip reporting that creates payroll compliance risk',
      "Delivery platform settlements that don't match expectations",
      'Multi-location P&L that takes hours to assemble',
      'Vendor invoices piling up unreconciled',
    ],
    approach:
      'We integrate with your POS system (Toast, Square, Clover) and reconcile daily sales to bank deposits. Food costs are tracked against revenue weekly. Delivery platform settlements are reconciled separately for DoorDash, Uber Eats, and others.',
    features: [
      'Daily POS to bank reconciliation',
      'Food cost tracking with target benchmarks (28–35%)',
      'Tip management and distribution reporting',
      'Delivery platform settlement reconciliation',
      'Multi-location class-based P&L',
      'Vendor invoice management',
      'Labor cost as % of revenue tracking',
      'Prime cost weekly reporting',
    ],
    deliverables: ['Weekly prime cost report', 'Food cost % by category', 'Delivery platform settlement summary', 'Multi-location P&L', 'Monthly vendor AP aging'],
  },
  {
    id: 'convenience',
    Icon: Fuel,
    title: 'Convenience Stores & Gas Stations',
    subtitle: 'Fuel margins, lottery commissions, and tobacco inventory — handled.',
    color: '#00D4FF',
    description:
      'Convenience stores and gas stations have some of the most complex bookkeeping requirements of any small business: fuel reconciliation, lottery commission tracking, tobacco inventory, and high-volume POS settlements.',
    painPoints: [
      'Fuel inventory reconciliation that takes hours every week',
      "Lottery commission income that's hard to track accurately",
      'Tobacco and age-restricted product inventory management',
      'Multiple vendor invoices across dozens of categories',
      'Fuel margin analysis without the right reporting',
      'Inside vs. outside revenue separation',
    ],
    approach:
      'We specialize in the unique accounting requirements of convenience store and gas station operators. Fuel is tracked separately from inside sales. Lottery commissions are reconciled against state lottery reports. Tobacco inventory is tracked for compliance.',
    features: [
      'POS settlement reconciliation (daily)',
      'Fuel inventory and margin analysis',
      'Lottery commission tracking and reconciliation',
      'Tobacco and restricted product inventory',
      'Inside vs. outside revenue separation',
      'Vendor invoice management (distributor invoices)',
      'Credit card fee analysis and reconciliation',
      'Multi-department P&L (fuel, inside, car wash)',
    ],
    deliverables: ['Daily fuel margin report', 'Lottery commission reconciliation', 'Department-level P&L', 'Vendor AP aging report', 'Monthly inventory summary'],
  },
]

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="aurora-bg section-pad pt-32 sm:pt-40" aria-labelledby="industries-heading">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="gradient-mesh" />
          </div>
        </div>
        <div className="relative container-xl max-w-4xl text-center">
          <AnimateOnScroll variant="fade-up">
            <div className="badge mb-4">
              <Zap className="w-3 h-3" aria-hidden="true" />
              Industry Specializations
            </div>
            <h1 id="industries-heading" className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Generic bookkeeping{' '}
              <span className="text-gradient">misses the details that matter</span>
            </h1>
            <p className="section-sub max-w-xl mx-auto">
              We've built deep expertise in specific industries — less onboarding time, better accuracy,
              and reports that actually reflect how your business works.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Sticky jump nav */}
      <nav className="bg-navy-800/90 backdrop-blur-xl border-b border-white/[0.06] sticky top-16 z-40 py-3 no-print" aria-label="Industry navigation">
        <div className="container-xl">
          <div className="flex flex-wrap gap-1 px-2">
            {industries.map((ind) => (
              <a
                key={ind.id}
                href={`#${ind.id}`}
                className="text-sm font-medium text-white/50 hover:text-white px-3 py-1.5 rounded-lg hover:bg-white/[0.06] transition-all duration-150"
              >
                {ind.title}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Industry sections */}
      <div>
        {industries.map((industry, index) => (
          <section
            key={industry.id}
            id={industry.id}
            className={`section-pad ${index % 2 === 0 ? 'bg-navy' : 'bg-navy-800'}`}
            aria-labelledby={`${industry.id}-heading`}
          >
            <div className="container-xl max-w-6xl">
              <AnimateOnScroll variant="fade-up">
                <div className="flex items-start gap-5 mb-10">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${industry.color}18`, color: industry.color }}
                    aria-hidden="true"
                  >
                    <industry.Icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h2 id={`${industry.id}-heading`} className="text-2xl sm:text-3xl font-bold text-white">
                      {industry.title}
                    </h2>
                    <p className="font-semibold mt-1" style={{ color: industry.color }}>{industry.subtitle}</p>
                  </div>
                </div>
                <p className="text-white/60 leading-relaxed text-base sm:text-lg max-w-3xl mb-12">{industry.description}</p>
              </AnimateOnScroll>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Pain points */}
                <AnimateOnScroll variant="fade-up" delay={0.05}>
                  <div className="glass-card rounded-2xl p-6 border-l-2 border-l-red-400/60">
                    <h3 className="font-bold text-white mb-4 flex items-center gap-2 text-sm">
                      <AlertCircle className="w-4 h-4 text-red-400" aria-hidden="true" />
                      Pain points we solve
                    </h3>
                    <ul className="space-y-3">
                      {industry.painPoints.map((pain) => (
                        <li key={pain} className="flex items-start gap-2 text-sm text-white/60">
                          <span className="w-1.5 h-1.5 bg-red-400/70 rounded-full flex-shrink-0 mt-1.5" aria-hidden="true" />
                          {pain}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimateOnScroll>

                {/* Our approach */}
                <AnimateOnScroll variant="fade-up" delay={0.1}>
                  <div className="glass-card rounded-2xl p-6 border-l-2" style={{ borderLeftColor: `${industry.color}60` }}>
                    <h3 className="font-bold text-white mb-4 text-sm">Our approach</h3>
                    <p className="text-sm text-white/50 leading-relaxed mb-5">{industry.approach}</p>
                    <h4 className="font-semibold text-white text-xs uppercase tracking-wider mb-3 opacity-60">Key features</h4>
                    <ul className="space-y-2">
                      {industry.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-white/60">
                          <Check className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: industry.color }} aria-hidden="true" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimateOnScroll>

                {/* Deliverables + CTA */}
                <AnimateOnScroll variant="fade-up" delay={0.15}>
                  <div className="space-y-4">
                    <div className="glass-card rounded-2xl p-6 border-l-2 border-l-emerald/60">
                      <h3 className="font-bold text-white mb-4 flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-emerald" aria-hidden="true" />
                        Monthly deliverables
                      </h3>
                      <ul className="space-y-2">
                        {industry.deliverables.map((d) => (
                          <li key={d} className="flex items-center gap-2 text-sm text-white/60">
                            <span className="w-1.5 h-1.5 bg-emerald/60 rounded-full flex-shrink-0" aria-hidden="true" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div
                      className="rounded-2xl p-6 text-center"
                      style={{ background: `linear-gradient(135deg, ${industry.color}20 0%, ${industry.color}08 100%)`, border: `1px solid ${industry.color}30` }}
                    >
                      <p className="text-white font-semibold text-sm mb-4">
                        Specialized for {industry.title.split(' ')[0]} businesses
                      </p>
                      <Link
                        href="/contact"
                        className="w-full inline-flex items-center justify-center gap-2 text-white font-semibold py-3 rounded-xl text-sm transition-all duration-200 hover:opacity-90"
                        style={{ background: industry.color }}
                      >
                        Schedule Free Consultation
                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </section>
        ))}
      </div>

      <CTABanner
        headline="Your industry. Our expertise."
        subtext="Tell us about your business and we'll show you exactly how Accounting Skip handles your specific bookkeeping challenges."
      />
    </>
  )
}
