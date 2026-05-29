import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight, Plug, BrainCircuit, UserCheck, FileText,
  BookOpen, BarChart3, Receipt, CreditCard, ShoppingCart,
  Calculator, ShoppingBag, Building2, Fuel,
  MessageSquare, Mail, RefreshCw, Bell, CalendarCheck,
  TrendingUp, Landmark, ShieldCheck, FileSearch, Cpu,
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
  title: 'AccounTech — AI-Powered Accounting Operations for US Businesses',
  description:
    'AI-powered accounting operations platform. Transactions auto-categorized, receipts captured via WhatsApp & Gmail, bank reconciliation automated — books closed in 5 days. QBO certified. From $349/mo.',
  openGraph: {
    title: 'AccounTech — AI-Powered Accounting Operations',
    description: 'AI categorizes transactions, reads receipts, reconciles banks — books closed in 5 days. From $349/mo.',
    url: 'https://accountech.com',
  },
}

// ─── Services ─────────────────────────────────────────────────────────────────
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
    description: 'AI-powered OCR reads and categorizes receipts instantly. WhatsApp, email, or photo — we handle the rest.',
    icon: <Receipt className="w-6 h-6" />,
    accentColor: '#8B5CF6',
    features: ['AI OCR extraction', 'WhatsApp & Gmail capture', 'Auto-categorization', 'Digital storage'],
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

// ─── Industries ───────────────────────────────────────────────────────────────
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

// ─── How It Works steps ───────────────────────────────────────────────────────
const steps = [
  {
    step: '01',
    title: 'Connect Your Systems',
    icon: <Plug className="w-5 h-5" />,
    description:
      'Link QuickBooks or Xero, connect bank feeds, and forward invoices from Gmail. WhatsApp receipts, Stripe, Shopify, and PayPal sync automatically — zero manual data entry.',
    tags: ['QuickBooks', 'Gmail', 'WhatsApp', 'Stripe', 'Shopify'],
    color: '#4F8CFF',
  },
  {
    step: '02',
    title: 'AI Processes Everything',
    icon: <BrainCircuit className="w-5 h-5" />,
    description:
      'Our AI engine categorizes 80%+ of transactions in seconds, reads receipts via OCR, performs 3-way bank reconciliation, detects anomalies, and automatically chases missing documents.',
    tags: ['Auto-categorize', 'OCR receipts', 'Bank matching', 'Anomaly alerts'],
    color: '#00D4FF',
  },
  {
    step: '03',
    title: 'Human Review & Approval',
    icon: <UserCheck className="w-5 h-5" />,
    description:
      'A QBO-certified accountant reviews every AI decision, approves flagged transactions, and verifies accuracy end-to-end. Nothing posts to your books without explicit human sign-off.',
    tags: ['QBO Certified', 'Human verified', 'Zero errors'],
    color: '#8B5CF6',
  },
  {
    step: '04',
    title: 'Reports & Clean Close',
    icon: <FileText className="w-5 h-5" />,
    description:
      'Receive P&L, balance sheet, and cash flow statement by the 5th of every month. Tax-ready, audit-proof, with a plain-English summary that tells you exactly where your money went.',
    tags: ['P&L', 'Balance sheet', 'Cash flow', 'Month-end in 5 days'],
    color: '#10B981',
  },
]

// ─── AI Automation Features ───────────────────────────────────────────────────
const aiFeatures = [
  {
    icon: <Cpu className="w-5 h-5" />,
    title: 'Transaction Categorization',
    description:
      'AI categorizes 80%+ of transactions instantly with 99%+ accuracy — trained on millions of real bookkeeping entries.',
    color: '#4F8CFF',
  },
  {
    icon: <MessageSquare className="w-5 h-5" />,
    title: 'WhatsApp Receipt Capture',
    description:
      'Snap and send receipt photos to our WhatsApp number. AI reads, extracts, and logs the expense automatically.',
    color: '#25D366',
  },
  {
    icon: <Mail className="w-5 h-5" />,
    title: 'Gmail Invoice Scanning',
    description:
      'Forward invoices from Gmail and our AI extracts vendor, amount, date, and category — no manual entry ever.',
    color: '#EA4335',
  },
  {
    icon: <RefreshCw className="w-5 h-5" />,
    title: 'Bank Statement Matching',
    description:
      'Automated 3-way reconciliation across all bank accounts. Every statement matched, every discrepancy flagged.',
    color: '#8B5CF6',
  },
  {
    icon: <Bell className="w-5 h-5" />,
    title: 'Missing Document Chase',
    description:
      'AI identifies missing receipts and sends automated reminders to your team — nothing falls through the cracks.',
    color: '#F59E0B',
  },
  {
    icon: <CalendarCheck className="w-5 h-5" />,
    title: 'Month-End Assist',
    description:
      'AI pre-fills guided month-end checklists. Your accountant reviews and approves the final package.',
    color: '#10B981',
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: 'Weekly Financial Reports',
    description:
      'Automated P&L snapshots delivered every Friday — know your revenue, expenses, and margins before the week ends.',
    color: '#EC4899',
  },
  {
    icon: <Landmark className="w-5 h-5" />,
    title: 'Multi-Bank Support',
    description:
      'Connect unlimited bank accounts, credit cards, and payment processors. One unified view of all your finances.',
    color: '#00D4FF',
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: 'Human-Verified Accuracy',
    description:
      'Every AI decision is reviewed and approved by a QBO-certified accountant. Enterprise accuracy at AI speed.',
    color: '#4F8CFF',
  },
  {
    icon: <FileSearch className="w-5 h-5" />,
    title: 'Full Audit Trail',
    description:
      'Complete transaction history with source documents, categorization rationale, and reviewer sign-off. Always audit-ready.',
    color: '#8B5CF6',
  },
]

// ─── AI vs Traditional Comparison ─────────────────────────────────────────────
const comparisons = [
  { metric: 'Month-end close', traditional: '21–30+ days', accountech: '5 business days' },
  { metric: 'Transaction categorization', traditional: 'Manual, takes days', accountech: 'AI in seconds' },
  { metric: 'Receipt capture', traditional: 'Manual scan & filing', accountech: 'WhatsApp + Gmail AI' },
  { metric: 'Monthly cost', traditional: '$2,000–$5,000+', accountech: 'From $349/month' },
  { metric: 'Availability', traditional: 'Business hours only', accountech: '24/7 AI capture' },
  { metric: 'Accuracy', traditional: 'Human error risk', accountech: '99%+ AI accuracy' },
  { metric: 'Scalability', traditional: 'Limited capacity', accountech: 'Unlimited transactions' },
  { metric: 'Human oversight', traditional: 'Varies by firm', accountech: 'Every entry — QBO certified' },
]

// ─── Integrations ─────────────────────────────────────────────────────────────
const integrations = [
  { name: 'QuickBooks', color: '#2CA01C', category: 'Accounting' },
  { name: 'Gmail', color: '#EA4335', category: 'Email' },
  { name: 'WhatsApp', color: '#25D366', category: 'Messaging' },
  { name: 'Stripe', color: '#635BFF', category: 'Payments' },
  { name: 'Shopify', color: '#96BF48', category: 'E-commerce' },
  { name: 'PayPal', color: '#003DB3', category: 'Payments' },
  { name: 'CSV Import', color: '#4F8CFF', category: 'Data' },
  { name: 'Bank Feeds', color: '#10B981', category: 'Banking' },
]

// ─── Page ─────────────────────────────────────────────────────────────────────
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

            <AnimateOnScroll variant="fade-up" delay={0.1}>
              <h1
                id="hero-headline"
                className="text-hero-sm sm:text-hero-md lg:text-hero leading-[1.05] font-bold mb-6"
              >
                We do your bookkeeping faster using AI.{' '}
                <span className="text-gradient">Your Books Closure are not Delayed Anymore!</span>
              </h1>
            </AnimateOnScroll>

            <AnimateOnScroll variant="fade-up" delay={0.16}>
              <p className="text-lg sm:text-xl text-white/60 leading-relaxed mb-10 max-w-2xl mx-auto">
                We connect to your bank, Gmail, WhatsApp, Stripe, and Shopify.{' '}
                <span className="text-white font-medium">
                  AI categorizes transactions, reads receipts, and reconciles bank statements automatically
                </span>{' '}
                — then a QBO-certified accountant verifies every entry before your books close.
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
                A complete AI accounting operations pipeline — engineered for speed, built on human accuracy.
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
                  <p className="text-sm text-white/50 leading-relaxed mb-4">{step.description}</p>

                  {/* Integration / capability tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {step.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded-full"
                        style={{ background: `${step.color}14`, color: `${step.color}CC` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Connector arrow (desktop) */}
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

      {/* ── AI Automation Features ──────────────────────────────── */}
      <section className="bg-navy section-pad" aria-labelledby="ai-features-heading">
        <div className="container-xl">
          <div className="text-center mb-16">
            <AnimateOnScroll variant="fade-up">
              <div className="badge mb-4">AI Automation</div>
              <h2 id="ai-features-heading" className="section-heading mb-4">
                10 AI automations running every month
              </h2>
              <p className="section-sub max-w-2xl mx-auto">
                Not just categorization — a full AI accounting engine handling the complete workflow,
                from receipt capture to monthly close.
              </p>
            </AnimateOnScroll>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {aiFeatures.map((feature, i) => (
              <AnimateOnScroll key={feature.title} variant="fade-up" delay={i * 0.04}>
                <div className="glass-card rounded-2xl p-5 h-full transition-all duration-300 group hover:border-white/10">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${feature.color}18`, color: feature.color }}
                    aria-hidden="true"
                  >
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-white text-sm mb-2 leading-snug">{feature.title}</h3>
                  <p className="text-xs text-white/45 leading-relaxed">{feature.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI vs Traditional Comparison ────────────────────────── */}
      <section className="bg-navy-800 section-pad" aria-labelledby="comparison-heading">
        <div className="container-xl max-w-4xl">
          <div className="text-center mb-16">
            <AnimateOnScroll variant="fade-up">
              <div className="badge mb-4">AI vs Traditional</div>
              <h2 id="comparison-heading" className="section-heading mb-4">
                Why modern businesses are switching to AI accounting
              </h2>
              <p className="section-sub max-w-2xl mx-auto">
                The same quality accounting delivered 4× faster at a fraction of the cost — with
                human verification at every step.
              </p>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll variant="fade-up" delay={0.1}>
            <div className="glass-card rounded-2xl overflow-hidden">
              {/* Header row */}
              <div className="grid grid-cols-3 border-b border-white/[0.08]">
                <div className="p-4 sm:p-5" />
                <div className="p-4 sm:p-5 text-center border-l border-white/[0.08]">
                  <p className="text-[10px] font-medium text-white/30 uppercase tracking-widest mb-1">Traditional</p>
                  <p className="text-sm font-semibold text-white/50">Accountant</p>
                </div>
                <div className="p-4 sm:p-5 text-center border-l border-white/[0.08] bg-accent/[0.06]">
                  <p className="text-[10px] font-medium text-accent/60 uppercase tracking-widest mb-1">AccounTech</p>
                  <p className="text-sm font-semibold text-accent">AI + Human</p>
                </div>
              </div>

              {/* Data rows */}
              {comparisons.map((row, i) => (
                <div
                  key={row.metric}
                  className={`grid grid-cols-3 border-b border-white/[0.05] last:border-0${i % 2 !== 0 ? ' bg-white/[0.015]' : ''}`}
                >
                  <div className="p-4 sm:p-5 text-sm text-white/60 font-medium flex items-center">
                    {row.metric}
                  </div>
                  <div className="p-4 sm:p-5 text-center border-l border-white/[0.05] text-sm text-white/35 flex items-center justify-center">
                    {row.traditional}
                  </div>
                  <div className="p-4 sm:p-5 text-center border-l border-white/[0.05] bg-accent/[0.04] text-sm font-semibold text-[#10B981] flex items-center justify-center">
                    {row.accountech}
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
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

      {/* ── Integrations ─────────────────────────────────────────── */}
      <section className="bg-navy-800 section-pad" aria-labelledby="integrations-heading">
        <div className="container-xl max-w-3xl text-center">
          <div className="mb-16">
            <AnimateOnScroll variant="fade-up">
              <div className="badge mb-4">Integrations</div>
              <h2 id="integrations-heading" className="section-heading mb-4">
                Connects to your entire financial stack
              </h2>
              <p className="section-sub max-w-xl mx-auto">
                AccounTech plugs into the tools you already use — no migration, no disruption,
                no manual data entry.
              </p>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll variant="fade-up" delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {integrations.map((item) => (
                <div
                  key={item.name}
                  className="glass-card px-5 py-3 rounded-xl flex items-center gap-2.5 hover:border-white/15 transition-all duration-200 cursor-default"
                >
                  <div
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: item.color }}
                    aria-hidden="true"
                  />
                  <span className="text-sm font-medium text-white/75">{item.name}</span>
                  <span className="text-xs text-white/25 hidden sm:inline">· {item.category}</span>
                </div>
              ))}
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up" delay={0.2}>
            <p className="text-sm text-white/30">
              Don&apos;t see your tool?{' '}
              <Link href="/contact" className="text-accent/60 hover:text-accent transition-colors">
                Request an integration →
              </Link>
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Industries ────────────────────────────────────────── */}
      <section className="bg-navy section-pad" aria-labelledby="industries-heading">
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
      <section className="bg-navy-800 section-pad" aria-labelledby="testimonials-heading">
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
      <section className="bg-navy section-pad relative overflow-hidden" aria-labelledby="cpa-heading">
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
        subtext="Schedule a free 30-minute consultation. No commitment. We'll review your current setup and show you exactly what AccounTech's AI operations platform delivers."
        primaryCTA="Schedule Free Consultation"
        primaryHref="/contact"
        secondaryCTA="View Pricing"
        secondaryHref="/pricing"
      />
    </>
  )
}
