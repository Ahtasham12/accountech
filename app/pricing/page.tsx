'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Check, Phone, ArrowRight, Zap } from 'lucide-react'
import PricingCard from '@/components/PricingCard'
import FAQAccordion from '@/components/FAQAccordion'
import CTABanner from '@/components/CTABanner'
import AnimateOnScroll from '@/components/AnimateOnScroll'

const plans = [
  {
    name: 'Starter',
    monthlyPrice: 349,
    annualPrice: 299,
    description: 'Perfect for single-location businesses getting started with professional bookkeeping.',
    timeline: '10-day close',
    bestFor: 'Single-location businesses',
    features: [
      'Up to 200 transactions/month',
      '1 bank + 1 credit card',
      'Monthly P&L & Balance Sheet',
      'AI transaction categorization',
      'Receipt capture via email',
      'Dedicated bookkeeper',
      'QuickBooks or Xero setup',
      'Email support',
    ],
  },
  {
    name: 'Growth',
    monthlyPrice: 649,
    annualPrice: 549,
    description: 'Our most popular plan. Growing businesses with AP/AR and anomaly alerts.',
    timeline: '7-day close',
    bestFor: 'Growing multi-revenue businesses',
    highlighted: true,
    badge: 'Most Popular',
    features: [
      'Up to 500 transactions/month',
      'Up to 3 bank + 3 credit cards',
      'P&L, Balance Sheet & Cash Flow',
      'AI categorization + anomaly alerts',
      'AP/AR management',
      'Sales tax preparation',
      'Monthly financial narrative',
      'Priority email support',
    ],
  },
  {
    name: 'Scale',
    monthlyPrice: 1199,
    annualPrice: 999,
    description: 'High-volume and multi-location businesses that need full-service bookkeeping.',
    timeline: '5-day close',
    bestFor: 'High-volume & multi-location',
    features: [
      'Unlimited transactions',
      'Unlimited accounts',
      'Full financial reporting suite',
      'Inventory & COGS tracking',
      'Multi-location class tracking',
      'Payroll entry & reconciliation',
      'Priority support (same-day)',
      'Dedicated senior accountant',
    ],
  },
]

const faqs = [
  {
    question: 'What accounting software do you support?',
    answer: "We work natively with QuickBooks Online (QBO) and Xero. If you're on a different platform or using spreadsheets, we can migrate you at no extra cost. Our team is QBO ProAdvisor Certified.",
  },
  {
    question: 'How does AI categorization work?',
    answer: 'Our AI is trained on millions of business transactions and uses contextual analysis to categorize expenses and income. Each transaction gets a confidence score — anything below 99% goes to a QBO-certified accountant for review.',
  },
  {
    question: 'Is my financial data secure?',
    answer: 'Yes. We use bank-level 256-bit encryption for all data at rest and in transit. Our systems are SOC 2 compliant. We access your accounting platform via API tokens — no username/password sharing. Revoke access anytime.',
  },
  {
    question: 'Can I switch plans or cancel?',
    answer: "Yes to both. Upgrade or downgrade at any time — changes take effect on your next billing cycle. No long-term contracts. If you cancel, we'll send a complete export of all your books.",
  },
  {
    question: 'Do you handle sales tax filing?',
    answer: 'The Growth and Scale plans include sales tax preparation — we track nexus obligations, calculate amounts, and prepare reports. For filing, we partner with TaxJar or Avalara and can coordinate the process for an additional fee.',
  },
  {
    question: 'What if I have multiple locations?',
    answer: "Multi-location businesses are best served by our Scale plan, which includes multi-location class tracking and unlimited accounts. Contact us if you have 5+ locations — we'll build a custom quote.",
  },
]

export default function PricingPage() {
  const [annual, setAnnual] = useState(false)

  return (
    <>
      {/* Hero */}
      <section className="aurora-bg section-pad pt-32 sm:pt-40" aria-labelledby="pricing-heading">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="gradient-mesh" />
          </div>
        </div>
        <div className="container-xl text-center relative">
          <AnimateOnScroll variant="fade-up">
            <div className="badge mb-4">
              <Zap className="w-3 h-3" aria-hidden="true" />
              Transparent Pricing
            </div>
            <h1 id="pricing-heading" className="section-heading text-4xl sm:text-5xl mb-4">
              Simple pricing.{' '}
              <span className="text-gradient">No surprises.</span>
            </h1>
            <p className="section-sub max-w-xl mx-auto mb-8">
              One flat monthly fee. No per-transaction charges, no setup fees, no contracts.
            </p>
          </AnimateOnScroll>

          {/* Value props */}
          <AnimateOnScroll variant="fade-up" delay={0.1}>
            <div className="flex flex-wrap items-center justify-center gap-6 mb-10 text-sm text-white/60">
              {['No setup fees', 'No long-term contracts', 'Cancel anytime', 'Free migration'].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald flex-shrink-0" aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>
          </AnimateOnScroll>

          {/* Billing toggle */}
          <AnimateOnScroll variant="fade-up" delay={0.15}>
            <div className="inline-flex items-center gap-4 glass rounded-2xl px-4 py-3">
              <span className={`text-sm font-medium transition-colors ${!annual ? 'text-white' : 'text-white/40'}`}>
                Monthly
              </span>
              <button
                role="switch"
                aria-checked={annual}
                onClick={() => setAnnual(a => !a)}
                className={`relative w-12 h-6 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-navy ${annual ? 'bg-accent' : 'bg-white/10'}`}
              >
                <span
                  className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow transition-transform duration-300 ${annual ? 'translate-x-6' : 'translate-x-0'}`}
                />
                <span className="sr-only">Toggle annual billing</span>
              </button>
              <span className={`text-sm font-medium transition-colors flex items-center gap-2 ${annual ? 'text-white' : 'text-white/40'}`}>
                Annual
                <span className="text-xs bg-emerald/20 text-emerald border border-emerald/30 px-2 py-0.5 rounded-full font-semibold">
                  Save ~15%
                </span>
              </span>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="bg-navy section-pad" aria-labelledby="plans-label">
        <div className="container-xl">
          <h2 id="plans-label" className="sr-only">Pricing plans</h2>
          <div className="grid md:grid-cols-3 gap-6 items-start">
            {plans.map((plan, i) => (
              <AnimateOnScroll key={plan.name} variant="fade-up" delay={i * 0.1}>
                <PricingCard {...plan} annual={annual} />
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll variant="fade-up" delay={0.3}>
            <div className="mt-12 glass rounded-2xl p-6 sm:p-8 text-center">
              <h3 className="font-bold text-white text-lg mb-2">Need something custom?</h3>
              <p className="text-white/50 text-sm mb-6">
                Multi-entity, catch-up bookkeeping, or historical cleanup? We build custom quotes for unique situations.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link href="/contact" className="btn-primary">
                  Request Custom Quote
                </Link>
                <a href="tel:+13055550123" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors">
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  (305) 555-0123
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Compare table */}
      <section className="bg-navy-800 section-pad" aria-labelledby="compare-heading">
        <div className="container-xl max-w-5xl">
          <AnimateOnScroll variant="fade-up">
            <h2 id="compare-heading" className="section-heading text-center mb-12">Compare plans</h2>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up" delay={0.1}>
            <div className="glass rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm" aria-label="Plan feature comparison">
                  <thead>
                    <tr className="border-b border-white/[0.07]">
                      <th className="text-left py-4 px-6 font-semibold text-white">Feature</th>
                      <th className="text-center py-4 px-4 font-semibold text-white/60">Starter</th>
                      <th className="text-center py-4 px-4 font-semibold text-accent">Growth</th>
                      <th className="text-center py-4 px-4 font-semibold text-white/60">Scale</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.05]">
                    {[
                      ['Monthly transactions', '200', '500', 'Unlimited'],
                      ['Bank/credit card accounts', '1+1', '3+3', 'Unlimited'],
                      ['P&L + Balance Sheet', '✓', '✓', '✓'],
                      ['Cash Flow statement', '—', '✓', '✓'],
                      ['AI categorization', '✓', '✓', '✓'],
                      ['Anomaly alerts', '—', '✓', '✓'],
                      ['AP/AR management', '—', '✓', '✓'],
                      ['Sales tax preparation', '—', '✓', '✓'],
                      ['Inventory & COGS', '—', '—', '✓'],
                      ['Payroll entry', '—', '—', '✓'],
                      ['Multi-location tracking', '—', '—', '✓'],
                      ['Month-end close', '10 days', '7 days', '5 days'],
                      ['Support', 'Email', 'Priority', 'Same-day'],
                    ].map(([feature, starter, growth, scale]) => (
                      <tr key={feature} className="hover:bg-white/[0.02] transition-colors">
                        <td className="py-3.5 px-6 text-white/80 font-medium">{feature}</td>
                        <td className="py-3.5 px-4 text-center text-white/40">{starter}</td>
                        <td className="py-3.5 px-4 text-center text-accent font-semibold">{growth}</td>
                        <td className="py-3.5 px-4 text-center text-white/40">{scale}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-navy section-pad" aria-labelledby="faq-heading">
        <div className="container-xl max-w-3xl">
          <AnimateOnScroll variant="fade-up">
            <h2 id="faq-heading" className="section-heading text-center mb-12">
              Frequently asked questions
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-up" delay={0.1}>
            <FAQAccordion items={faqs} />
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-up" delay={0.2}>
            <p className="text-center text-white/40 mt-8 text-sm">
              Still have questions?{' '}
              <Link href="/contact" className="text-accent hover:text-accent/80 font-semibold transition-colors">
                Contact us
              </Link>{' '}
              — we reply within 1 business day.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
