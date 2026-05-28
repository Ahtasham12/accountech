import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight, Plug, BrainCircuit, UserCheck, FileText,
  BookOpen, BarChart3, Receipt, CreditCard, ShoppingCart,
  Calculator, ShoppingBag, Building2, Fuel, Zap,
} from 'lucide-react'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import AnimatedTagline from '@/components/AnimatedTagline'
import AnimatedHeroBg  from '@/components/AnimatedHeroBg'
import AIVisualization from '@/components/AIVisualization'
import StatsCounter from '@/components/StatsCounter'
import TrustBadgeBar from '@/components/TrustBadgeBar'
import ServiceCard from '@/components/ServiceCard'
import IndustryCard from '@/components/IndustryCard'
import TestimonialCarousel from '@/components/TestimonialCarousel'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'AccounTech — AI-Powered Bookkeeping for US Small Businesses',
  description:
    'Your books closed in 5 days, not 21. AI categorizes 80% of transactions instantly. QBO-certified review. Starting at $349/month.',
  openGraph: {
    title: 'AccounTech — AI-Powered Bookkeeping',
    description: 'Month-end close in 5 days. AI + human review. Starting at $349/month.',
    url: 'https://accountech.com',
  },
}

const services = [
  {
    title: 'Monthly Bookkeeping',
    description: 'Accurate, on-time bookkeeping every month. AI categorizes, humans verify — nothing slips through.',
    icon: <BookOpen className="w-6 h-6" />,
    accentColor: '#4F8CFF',
    features: ['Transaction categorization', 'Bank reconciliation', 'Credit card recon', 'Month-end close in 5 days'],
    href: '/services#bookkeeping',
  },
  {
    title: 'Financial Reporting',
    description: 'Plain-English P&L, balance sheet, and cash flow — delivered by the 5th of every month.',
    icon: <BarChart3 className="w-6 h-6" />,
    accentColor: '#00D4FF',
    features: ['Profit & Loss statement', 'Balance Sheet', 'Cash Flow statement', 'Custom reports'],
    href: '/services#reporting',
  },
  {
    title: 'Receipt Management',
    description: 'AI-powered OCR reads and categorizes receipts instantly. Email or photo — we handle the rest.',
    icon: <Receipt className="w-6 h-6" />,
    accentColor: '#8B5CF6',
    features: ['AI OCR extraction', 'Auto-categorization', 'Digital storage', 'Email/photo upload'],
    href: '/services#receipts',
  },
  {
    title: 'AP / AR Management',
    description: 'Stay on top of who owes you and what you owe. Aging reports and vendor management included.',
    icon: <CreditCard className="w-6 h-6" />,
    accentColor: '#10B981',
    features: ['Invoice tracking', 'Aging reports', 'Vendor management', 'Payment reminders'],
    href: '/services#apar',
  },
  {
    title: 'E-commerce Accounting',
    description: 'Specialized for Amazon, Shopify, and multi-channel sellers. We handle the complexity.',
    icon: <ShoppingCart className="w-6 h-6" />,
    accentColor: '#F59E0B',
    features: ['Amazon/Shopify recon', 'FBA fee tracking', 'Inventory costing', 'Multi-channel COGS'],
    href: '/services#ecommerce',
  },
  {
    title: 'Sales Tax Prep',
    description: 'Multi-state nexus tracking, tax calculation, and preparation. Stay compliant across all states.',
    icon: <Calculator className="w-6 h-6" />,
    accentColor: '#EC4899',
    features: ['Multi-state nexus', 'Tax calculation', 'Report preparation', 'Compliance tracking'],
    href: '/services#salestax',
  },
]

const industries = [
  {
    title: 'E-commerce & Amazon Sellers',
    description: 'Multi-channel reconciliation built for Amazon FBA, Shopify, and marketplace complexity.',
    icon: <ShoppingBag className="w-7 h-7" />,
    accentColor: '#4F8CFF',
    features: ['Multi-channel reconciliation', 'FBA fee tracking & analysis', 'Inventory & COGS costing', 'Returns & refunds', 'Sales tax nexus tracking'],
    href: '/industries#ecommerce',
  },
  {
    title: 'Restaurants & Food Service',
    description: 'POS reconciliation, food cost tracking, and delivery platform settlements — done monthly.',
    icon: <Building2 className="w-7 h-7" />,
    accentColor: '#10B981',
    features: ['POS reconciliation', 'Food cost tracking (28–35% target)', 'Tip management & reporting', 'Delivery platform settlements', 'Multi-location P&L'],
    href: '/industries#restaurants',
  },
  {
    title: 'Convenience Stores & Gas Stations',
    description: 'Specialized tracking for fuel margins, lottery commissions, and tobacco inventory.',
    icon: <Fuel className="w-7 h-7" />,
    accentColor: '#00D4FF',
    features: ['POS settlement reconciliation', 'Lottery commission tracking', 'Fuel margin analysis', 'Tobacco inventory management', 'Vendor invoice management'],
    href: '/industries#convenience',
  },
]

const steps = [
  { step: '01', title: 'Connect Your Data', icon: <Plug className="w-5 h-5" />, description: 'We connect to QuickBooks, Xero, or bank feeds. Receipts come in via email or photo — zero friction.', color: '#4F8CFF' },
  { step: '02', title: 'AI Categorizes', icon: <BrainCircuit className="w-5 h-5" />, description: 'Our AI engine categorizes 80% of transactions instantly with 99%+ confidence. Unusual items get flagged.', color: '#00D4FF' },
  { step: '03', title: 'Expert Reviews', icon: <UserCheck className="w-5 h-5" />, description: 'A QBO-certified accountant reviews every flagged item. Nothing posts without human verification.', color: '#8B5CF6' },
  { step: '04', title: 'Reports Delivered', icon: <FileText className="w-5 h-5" />, description: 'Clean P&L, balance sheet, and plain-English summary emailed by the 5th of every month.', color: '#10B981' },
]

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden aurora-bg pt-24 pb-0 sm:pt-32"
        aria-labelledby="hero-headline"
      >
        {/* Animated background orbs */}
        <AnimatedHeroBg />

        <div className="relative container-xl section-pad pt-0 pb-0">
          <div className="max-w-4xl mx-auto text-center pb-12">

            {/* Animated tagline */}
            <AnimatedTagline />

            <AnimateOnScroll variant="fade-up" delay={0.04}>
              <div className="badge mb-6">
                <Zap className="w-3 h-3" aria-hidden="true" />
                AI-Powered · QBO Certified · Florida LLC
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll variant="fade-up" delay={0.1}>
              <h1
                id="hero-headline"
                className="text-hero-sm sm:text-hero-md lg:text-hero leading-[1.05] font-bold mb-6"
              >
                Your books closed in{' '}
                <span className="text-gradient">5 days</span>
                ,{' '}not 21.
              </h1>
            </AnimateOnScroll>

            <AnimateOnScroll variant="fade-up" delay={0.16}>
              <p className="text-lg sm:text-xl text-white/60 leading-relaxed mb-10 max-w-2xl mx-auto">
                AI-powered bookkeeping for US small businesses.{' '}
                <span className="text-white font-medium">80% of transactions categorized instantly</span> — then verified by a QBO-certified accountant. Enterprise accuracy at small business pricing.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll variant="fade-up" delay={0.22}>
              <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
                <Link href="/contact" className="btn-primary !px-8 !py-4 text-base shadow-glow-blue">
                  Schedule Free Consultation
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </Link>
                <Link href="#how-it-works" className="btn-ghost !px-8 !py-4 text-base">
                  See How It Works
                </Link>
              </div>
            </AnimateOnScroll>

            {/* Stats bar */}
            <AnimateOnScroll variant="fade-up" delay={0.26}>
              <div className="glass rounded-2xl p-2">
                <StatsCounter />
              </div>
            </AnimateOnScroll>

            {/* Trust badges */}
            <AnimateOnScroll variant="fade-up" delay={0.32}>
              <TrustBadgeBar className="mt-6 pb-2" />
            </AnimateOnScroll>
          </div>

          {/* AI Visualization canvas */}
          <AnimateOnScroll variant="fade-in" delay={0.4}>
            <div className="relative max-w-3xl mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-b from-transparent via-accent/5 to-navy rounded-t-3xl pointer-events-none" />
              <AIVisualization />
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── How It Works ─────────────────────────────────────── */}
      <section id="how-it-works" className="bg-navy-800 section-pad" aria-labelledby="how-heading">
        <div className="container-xl">
          <div className="text-center mb-16">
            <AnimateOnScroll variant="fade-up">
              <div className="badge mb-4">How It Works</div>
              <h2 id="how-heading" className="section-heading mb-4">
                From raw data to clean books in 4 steps
              </h2>
              <p className="section-sub max-w-2xl mx-auto">
                A process engineered for AI speed and human accuracy — every single month, without fail.
              </p>
            </AnimateOnScroll>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <AnimateOnScroll key={step.step} variant="fade-up" delay={i * 0.1}>
                <div className="glass-card rounded-2xl p-6 h-full relative overflow-hidden group">
                  {/* Glow orb */}
                  <div
                    className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
                    style={{ background: step.color }}
                    aria-hidden="true"
                  />
                  {/* Step number */}
                  <div className="text-5xl font-black mb-4 leading-none" style={{ color: `${step.color}20` }}>
                    {step.step}
                  </div>
                  {/* Icon */}
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `${step.color}18`, color: step.color }}
                    aria-hidden="true"
                  >
                    {step.icon}
                  </div>
                  <h3 className="font-bold text-white text-base mb-2">{step.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{step.description}</p>

                  {/* Connector (desktop) */}
                  {i < steps.length - 1 && (
                    <div
                      className="hidden lg:block absolute top-12 -right-3 w-6 h-px"
                      style={{ background: `linear-gradient(to right, ${step.color}40, transparent)` }}
                      aria-hidden="true"
                    />
                  )}
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Grid ─────────────────────────────────────── */}
      <section className="bg-navy section-pad" aria-labelledby="services-heading">
        <div className="container-xl">
          <div className="text-center mb-16">
            <AnimateOnScroll variant="fade-up">
              <div className="badge mb-4">Our Services</div>
              <h2 id="services-heading" className="section-heading mb-4">
                Everything your books need, covered
              </h2>
              <p className="section-sub max-w-2xl mx-auto">
                One flat monthly fee. Complete coverage. No per-service surprises.
              </p>
            </AnimateOnScroll>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <AnimateOnScroll key={service.title} variant="fade-up" delay={i * 0.07}>
                <ServiceCard {...service} />
              </AnimateOnScroll>
            ))}
          </div>

          <div className="text-center mt-10">
            <AnimateOnScroll variant="fade-up" delay={0.1}>
              <Link href="/services" className="btn-ghost">
                Explore All Services <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── Industries ────────────────────────────────────────── */}
      <section className="bg-navy-800 section-pad" aria-labelledby="industries-heading">
        <div className="container-xl">
          <div className="text-center mb-16">
            <AnimateOnScroll variant="fade-up">
              <div className="badge mb-4">Industries We Serve</div>
              <h2 id="industries-heading" className="section-heading mb-4">
                Built for your specific business
              </h2>
              <p className="section-sub max-w-2xl mx-auto">
                Generic bookkeeping misses industry-specific nuances. We specialize in the businesses we serve.
              </p>
            </AnimateOnScroll>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {industries.map((industry, i) => (
              <AnimateOnScroll key={industry.title} variant="fade-up" delay={i * 0.1}>
                <IndustryCard {...industry} />
              </AnimateOnScroll>
            ))}
          </div>

          <div className="text-center mt-10">
            <AnimateOnScroll variant="fade-up">
              <Link href="/industries" className="btn-ghost">
                All Industries <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────── */}
      <section className="bg-navy section-pad" aria-labelledby="testimonials-heading">
        <div className="container-xl max-w-4xl">
          <div className="text-center mb-12">
            <AnimateOnScroll variant="fade-up">
              <div className="badge mb-4">Client Stories</div>
              <h2 id="testimonials-heading" className="section-heading mb-4">
                Trusted by US small businesses
              </h2>
            </AnimateOnScroll>
          </div>
          <AnimateOnScroll variant="scale-in">
            <TestimonialCarousel />
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── CPA Partner Dark Section ─────────────────────────── */}
      <section className="bg-navy-800 section-pad relative overflow-hidden" aria-labelledby="cpa-heading">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
        </div>
        <div className="relative container-xl max-w-4xl text-center">
          <AnimateOnScroll variant="fade-up">
            <div className="badge mb-4">For CPA Firms</div>
            <h2 id="cpa-heading" className="section-heading mb-4">
              Let us handle bookkeeping.{' '}
              <span className="text-gradient">You focus on advisory.</span>
            </h2>
            <p className="section-sub max-w-2xl mx-auto mb-6">
              White-label bookkeeping for CPA firms. Your brand, our AI-powered team. Starting at{' '}
              <span className="text-white font-semibold">$300/client</span>.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 mb-10 text-sm text-white/50">
              {['Your brand, our team', 'AI-powered accuracy', 'Scale without hiring', 'Month-end in 5 days'].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald rounded-full" aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>
            <Link href="/partners" className="btn-primary !px-8 !py-4 text-base shadow-glow-blue">
              Partner With Us <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────── */}
      <CTABanner
        headline="Ready to close your books in 5 days?"
        subtext="Schedule a free 30-minute consultation. No commitment. We'll review your current setup and show you exactly what AccounTech delivers."
        primaryCTA="Schedule Free Consultation"
        primaryHref="/contact"
        secondaryCTA="View Pricing"
        secondaryHref="/pricing"
      />
    </>
  )
}
