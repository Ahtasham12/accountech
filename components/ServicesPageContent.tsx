'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import {
  Zap, ArrowRight, Link2, Cpu, BarChart3,
  BookOpen, Receipt, FileText, CreditCard,
  ShoppingCart, Calculator, Users, Check,
  Store, TrendingUp,
} from 'lucide-react'

// ─── Types ───────────────────────────────────────────────────────
interface FeedItem {
  id: number
  desc: string
  amount: string
  cat: string
  conf: number
  warn?: boolean
  income?: boolean
}

// ─── Transaction feed data ────────────────────────────────────────
const FEED: FeedItem[] = [
  { id: 1,  desc: 'Amazon FBA Fee',         amount: '−$142.50',   cat: 'Shipping & Fulfillment',  conf: 98 },
  { id: 2,  desc: 'Shopify Payout',          amount: '+$3,847.20', cat: 'Revenue',                  conf: 99, income: true },
  { id: 3,  desc: 'Office Depot',            amount: '−$67.30',    cat: 'Office Supplies',          conf: 94 },
  { id: 4,  desc: 'Unknown Vendor #4821',    amount: '−$250.00',   cat: 'Needs Review',             conf: 62, warn: true },
  { id: 5,  desc: 'AWS Cloud Services',      amount: '−$189.00',   cat: 'Software & Tools',         conf: 97 },
  { id: 6,  desc: 'USPS Shipping Labels',    amount: '−$23.50',    cat: 'Shipping & Fulfillment',   conf: 99 },
  { id: 7,  desc: 'Stripe Processing Fee',   amount: '−$45.80',    cat: 'Payment Processing',       conf: 98 },
  { id: 8,  desc: 'Costco Wholesale',        amount: '−$312.40',   cat: 'Needs Review',             conf: 71, warn: true },
  { id: 9,  desc: 'Google Ads',              amount: '−$890.00',   cat: 'Marketing & Advertising',  conf: 99 },
  { id: 10, desc: 'FedEx Overnight',         amount: '−$78.90',    cat: 'Shipping & Fulfillment',   conf: 96 },
]

// ─── Animated transaction feed ────────────────────────────────────
function TransactionFeed() {
  const doubled = [...FEED, ...FEED]
  const GREEN  = '#34D399'
  const YELLOW = '#FBBF24'

  return (
    <div
      className="relative rounded-2xl overflow-hidden"
      style={{
        background: '#080D18',
        border: '1px solid rgba(79,140,255,0.22)',
        boxShadow: '0 0 0 1px rgba(79,140,255,0.1), 0 0 80px rgba(79,140,255,0.12)',
      }}
    >
      {/* Window chrome */}
      <div
        className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06]"
        style={{ background: 'rgba(255,255,255,0.025)' }}
      >
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FF5F57' }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FEBC2E' }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#28C840' }} />
        <span className="ml-3 font-mono text-[11px]" style={{ color: 'rgba(255,255,255,0.3)' }}>
          AI Processing Feed — Live
        </span>
        <span className="ml-auto flex items-center gap-1.5">
          <motion.span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: GREEN }}
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
          />
          <span className="font-mono text-[10px]" style={{ color: GREEN }}>processing</span>
        </span>
      </div>

      {/* Column headers */}
      <div
        className="grid px-4 py-2 border-b border-white/[0.04]"
        style={{ gridTemplateColumns: '1fr auto auto' }}
      >
        <span className="font-mono font-bold uppercase tracking-widest" style={{ fontSize: 9, color: 'rgba(255,255,255,0.22)' }}>Transaction</span>
        <span className="font-mono font-bold uppercase tracking-widest mr-4" style={{ fontSize: 9, color: 'rgba(255,255,255,0.22)' }}>Category</span>
        <span className="font-mono font-bold uppercase tracking-widest" style={{ fontSize: 9, color: 'rgba(255,255,255,0.22)' }}>Conf</span>
      </div>

      {/* Infinite scroll rows */}
      <div className="overflow-hidden relative" style={{ height: 248 }}>
        {/* Fade masks */}
        <div className="absolute inset-x-0 top-0 z-10 pointer-events-none" style={{ height: 24, background: 'linear-gradient(to bottom, #080D18, transparent)' }} />
        <div className="absolute inset-x-0 bottom-0 z-10 pointer-events-none" style={{ height: 24, background: 'linear-gradient(to top, #080D18, transparent)' }} />

        <motion.div
          animate={{ y: ['0%', '-50%'] }}
          transition={{ duration: 16, ease: 'linear', repeat: Infinity }}
        >
          {doubled.map((item, i) => (
            <div
              key={`${item.id}-${i}`}
              className="grid items-center px-4 border-b border-white/[0.04]"
              style={{ gridTemplateColumns: '1fr auto auto', paddingTop: 9, paddingBottom: 9 }}
            >
              {/* Name + amount */}
              <div className="flex items-center gap-2 min-w-0 pr-2">
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: item.warn ? YELLOW : GREEN }}
                />
                <div className="min-w-0">
                  <p className="font-mono font-medium truncate" style={{ fontSize: 11, color: 'rgba(255,255,255,0.88)' }}>
                    {item.desc}
                  </p>
                  <p
                    className="font-mono"
                    style={{ fontSize: 10, color: item.income ? GREEN : 'rgba(255,255,255,0.32)' }}
                  >
                    {item.amount}
                  </p>
                </div>
              </div>

              {/* Category badge */}
              <span
                className="font-mono rounded mr-4 truncate"
                style={{
                  fontSize: 10,
                  padding: '2px 7px',
                  maxWidth: 138,
                  color:       item.warn ? YELLOW : GREEN,
                  background:  item.warn ? 'rgba(251,191,36,0.10)' : 'rgba(52,211,153,0.10)',
                }}
              >
                {item.warn ? '⚠ ' : '✓ '}{item.cat}
              </span>

              {/* Confidence */}
              <span
                className="font-mono font-bold"
                style={{ fontSize: 11, color: item.conf >= 90 ? GREEN : YELLOW }}
              >
                {item.conf}%
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Footer stats */}
      <div
        className="flex items-center justify-between px-4 py-3 border-t border-white/[0.06]"
        style={{ background: 'rgba(255,255,255,0.018)' }}
      >
        <div className="flex gap-5">
          {[
            { label: 'Categorized', value: '2,847', color: GREEN },
            { label: 'Accuracy',    value: '98.2%', color: '#4F8CFF' },
            { label: 'Flagged',     value: '23',    color: YELLOW },
          ].map(({ label, value, color }) => (
            <div key={label}>
              <p className="font-mono uppercase tracking-widest" style={{ fontSize: 9, color: 'rgba(255,255,255,0.22)' }}>{label}</p>
              <p className="font-mono font-bold text-sm" style={{ color }}>{value}</p>
            </div>
          ))}
        </div>
        <span className="font-mono" style={{ fontSize: 9, color: 'rgba(255,255,255,0.14)' }}>acc-ai v2.4</span>
      </div>
    </div>
  )
}

// ─── Animated counter ─────────────────────────────────────────────
function Counter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  useEffect(() => {
    if (!inView) return
    const start = Date.now()
    const duration = 2200
    const tick = () => {
      const p = Math.min((Date.now() - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setCount(Math.floor(eased * value))
      if (p < 1) requestAnimationFrame(tick)
      else setCount(value)
    }
    requestAnimationFrame(tick)
  }, [inView, value])

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

// ─── Services grid data ───────────────────────────────────────────
const SERVICES = [
  { Icon: BookOpen,     title: 'Daily Transaction Categorization', badge: 'Fully Automated', badgeColor: '#10B981', color: '#10B981', desc: 'AI categorizes every transaction in real-time using your custom Chart of Accounts' },
  { Icon: BarChart3,    title: 'Monthly Financial Reporting',      badge: 'AI-Generated',    badgeColor: '#4F8CFF', color: '#4F8CFF', desc: 'AI-generated P&L, balance sheets, and executive summaries delivered monthly' },
  { Icon: Receipt,      title: 'Receipt & Invoice Capture',        badge: 'AI Vision',       badgeColor: '#8B5CF6', color: '#8B5CF6', desc: 'Email or snap receipts — AI extracts, matches, and files automatically' },
  { Icon: FileText,     title: 'Document Chase',                   badge: 'Auto-Chase',      badgeColor: '#00D4FF', color: '#00D4FF', desc: 'AI tracks missing docs, writes smart reminders, and follows up automatically' },
  { Icon: CreditCard,   title: 'Accounts Payable & Receivable',    badge: 'AI-Tracked',      badgeColor: '#4F8CFF', color: '#4F8CFF', desc: "Track what you owe and what's owed with automated aging reports" },
  { Icon: ShoppingCart, title: 'E-commerce Accounting',            badge: 'Platform Synced', badgeColor: '#10B981', color: '#10B981', desc: 'Built for Amazon FBA, Shopify, and multi-channel sellers' },
  { Icon: Calculator,   title: 'Sales Tax Preparation',            badge: 'AI-Calculated',   badgeColor: '#8B5CF6', color: '#8B5CF6', desc: 'AI calculates nexus obligations and prepares state-by-state filings' },
  { Icon: Users,        title: 'Payroll Support',                  badge: 'AI-Assisted',     badgeColor: '#00D4FF', color: '#00D4FF', desc: 'Integration-ready payroll tracking and quarterly tax reconciliation' },
]

// ─── Comparison table data ────────────────────────────────────────
const COMPARISON = [
  { feature: 'Transaction categorization', trad: 'Manual, 2–3 day delay',    ai: 'Real-time, 95%+ accuracy' },
  { feature: 'Receipt processing',          trad: 'Email back-and-forth',     ai: 'AI Vision — snap & done' },
  { feature: 'Document follow-up',          trad: 'You chase them',           ai: 'AI auto-chase with reminders' },
  { feature: 'Month-end close',             trad: '5–10 business days',       ai: '24–48 hours' },
  { feature: 'Error rate',                  trad: '3–5% industry average',    ai: '<1% with AI + human review' },
  { feature: 'Monthly cost',                trad: '$800–2,000/month',         ai: 'Starting at $349/month' },
]

// ─── Animation helpers ────────────────────────────────────────────
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

const heroStagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}

// ─── Helper: section title block ─────────────────────────────────
function SectionLabel({ badge, heading, sub, icon: Icon }: { badge: string; heading: React.ReactNode; sub?: string; icon?: React.ElementType }) {
  return (
    <div className="text-center mb-14">
      <motion.div
        initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5 }}
        className="badge mb-4 mx-auto inline-flex"
      >
        {Icon && <Icon className="w-3 h-3" aria-hidden="true" />}
        {badge}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.08 }}
        className="text-3xl sm:text-4xl font-bold text-white mb-4"
      >
        {heading}
      </motion.h2>
      {sub && (
        <motion.p
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.14 }}
          className="text-white/50 max-w-md mx-auto text-sm"
        >
          {sub}
        </motion.p>
      )}
    </div>
  )
}

// ─── Main export ──────────────────────────────────────────────────
export default function ServicesPageContent() {
  return (
    <>
      {/* ════════════════════ HERO ══════════════════════ */}
      <section className="relative overflow-hidden aurora-bg pt-28 pb-24 sm:pt-36 sm:pb-32">

        <div className="relative container-xl">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

            {/* Left: headline + CTAs */}
            <motion.div variants={heroStagger} initial="hidden" animate="show">
              <motion.div variants={fadeUp} className="badge mb-5 inline-flex">
                <Zap className="w-3 h-3" aria-hidden="true" />
                AI-POWERED BOOKKEEPING
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-4xl sm:text-5xl xl:text-[3.4rem] font-bold leading-[1.06] tracking-tight mb-6"
              >
                Your Books Run on AI.{' '}
                <span className="text-gradient">You Focus on Business.</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="text-white/60 text-lg leading-relaxed mb-8 max-w-lg">
                Accounting Skip's AI engine categorizes transactions in real-time, chases missing documents, and delivers month-end reports — no manual data entry, no delays.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                <Link href="/pricing" className="btn-primary !px-7 !py-3.5 shadow-glow-blue">
                  See Pricing <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <Link href="/contact" className="btn-ghost !px-7 !py-3.5">
                  Book Free Consultation
                </Link>
              </motion.div>
            </motion.div>

            {/* Right: live transaction feed */}
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.97 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.35, ease: EASE }}
            >
              <TransactionFeed />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ════════════════ HOW OUR AI WORKS ══════════════ */}
      <section className="section-pad bg-navy-800">
        <div className="container-xl">
          <SectionLabel
            badge="The Process"
            icon={Zap}
            heading="How Our AI Works"
            sub="Three steps. Zero spreadsheet headaches."
          />

          <div className="relative grid md:grid-cols-3 gap-5">
            {/* Dashed connector */}
            <div
              className="hidden md:block absolute pointer-events-none"
              style={{
                top: 72, left: 'calc(33.33% + 12px)', right: 'calc(33.33% + 12px)',
                borderTop: '2px dashed rgba(255,255,255,0.09)',
              }}
              aria-hidden="true"
            />

            {[
              { Icon: Link2,    step: '01', title: 'Connect',        color: '#4F8CFF', desc: 'Link your bank feeds, payment processors, and receipt inbox. We integrate with all major platforms.' },
              { Icon: Cpu,      step: '02', title: 'AI Processes',   color: '#00D4FF', desc: 'Our AI reads every transaction, matches it against your Chart of Accounts with 95%+ accuracy, and flags uncertain items for human review.' },
              { Icon: BarChart3, step: '03', title: 'You Get Reports', color: '#10B981', desc: 'Monthly P&L, balance sheets, and narrative summaries delivered to your inbox. No back-and-forth.' },
            ].map(({ Icon, step, title, color, desc }, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.14, ease: EASE }}
                className="glass-card rounded-2xl p-8 flex flex-col relative overflow-hidden"
              >
                {/* Pulse glow */}
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  animate={{ opacity: [0, 0.07, 0] }}
                  transition={{ duration: 3.5, delay: i * 0.9, repeat: Infinity, ease: 'easeInOut' }}
                  style={{ background: color }}
                  aria-hidden="true"
                />

                {/* Giant step number */}
                <span
                  className="text-7xl font-black leading-none select-none mb-4"
                  style={{ color: `${color}12` }}
                  aria-hidden="true"
                >
                  {step}
                </span>

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 flex-shrink-0"
                  style={{ background: `${color}18`, color }}
                  aria-hidden="true"
                >
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-bold text-white mb-3">{title}</h3>
                <p className="text-sm text-white/50 leading-relaxed flex-1">{desc}</p>

                <div
                  className="h-px mt-6 rounded-full"
                  style={{ background: `linear-gradient(to right, ${color}80, transparent)`, width: '40%' }}
                  aria-hidden="true"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═════════════════ SERVICES GRID ════════════════ */}
      <section className="section-pad bg-navy">
        <div className="container-xl">
          <SectionLabel
            badge="What's Included"
            icon={Zap}
            heading={<>Everything Your Business Needs, <span className="text-gradient-blue">All in One Plan</span></>}
            sub="No add-ons. No per-service billing. One flat monthly fee covers all of it."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map(({ Icon, title, desc, badge, badgeColor, color }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.07, ease: EASE }}
                whileHover={{ y: -4, transition: { duration: 0.18 } }}
                className="glass-card rounded-2xl p-6 flex flex-col group relative overflow-hidden cursor-default"
              >
                {/* Hover glow */}
                <div
                  className="absolute -top-10 -right-10 w-28 h-28 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                  style={{ background: color }}
                  aria-hidden="true"
                />

                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 flex-shrink-0"
                  style={{ background: `${color}18`, color }}
                  aria-hidden="true"
                >
                  <Icon className="w-5 h-5" />
                </div>

                {/* AI capability badge */}
                <span
                  className="inline-flex self-start text-[10px] font-semibold px-2.5 py-0.5 rounded-full mb-3"
                  style={{ background: `${badgeColor}18`, color: badgeColor }}
                >
                  {badge}
                </span>

                <h3 className="text-sm font-semibold text-white mb-2 leading-snug">{title}</h3>
                <p className="text-xs text-white/45 leading-relaxed flex-1">{desc}</p>

                {/* Hover accent line */}
                <div
                  className="h-px mt-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(to right, ${color}90, transparent)` }}
                  aria-hidden="true"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ AI VS TRADITIONAL TABLE ═══════════ */}
      <section className="section-pad bg-navy-800">
        <div className="container-xl max-w-4xl">
          <SectionLabel
            badge="The Difference"
            icon={TrendingUp}
            heading={<>AI Bookkeeping vs. <span className="text-white/30">Traditional</span></>}
            sub="See exactly what changes when you switch to Accounting Skip."
          />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: EASE }}
            className="rounded-2xl overflow-hidden"
            style={{ border: '1px solid rgba(255,255,255,0.08)' }}
          >
            {/* Header row */}
            <div className="grid" style={{ gridTemplateColumns: '1.5fr 1fr 1fr' }}>
              <div className="p-4 border-b border-r border-white/[0.07]" style={{ background: 'rgba(10,14,26,0.6)' }}>
                <span className="text-[11px] font-semibold text-white/35 uppercase tracking-wider">Feature</span>
              </div>
              <div className="p-4 border-b border-r border-white/[0.07]" style={{ background: 'rgba(10,14,26,0.4)' }}>
                <span className="text-[11px] font-semibold text-white/25 uppercase tracking-wider">Traditional Bookkeeper</span>
              </div>
              <div className="p-4 border-b relative" style={{ background: 'rgba(79,140,255,0.07)', borderBottomColor: 'rgba(255,255,255,0.07)' }}>
                {/* Glowing top border */}
                <div
                  className="absolute top-0 inset-x-0 h-px pointer-events-none"
                  style={{ background: 'linear-gradient(to right, transparent, rgba(79,140,255,0.8), transparent)' }}
                  aria-hidden="true"
                />
                <span className="text-[11px] font-bold text-accent uppercase tracking-wider">Accounting Skip AI ✦</span>
              </div>
            </div>

            {/* Data rows */}
            {COMPARISON.map(({ feature, trad, ai }, i) => (
              <div
                key={feature}
                className="grid"
                style={{
                  gridTemplateColumns: '1.5fr 1fr 1fr',
                  borderBottom: i < COMPARISON.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                }}
              >
                <div className="p-4 border-r border-white/[0.05]">
                  <span className="text-sm font-medium text-white/65">{feature}</span>
                </div>
                <div className="p-4 border-r border-white/[0.05]" style={{ background: i % 2 === 0 ? 'rgba(0,0,0,0.06)' : 'transparent' }}>
                  <span className="text-sm text-white/28">{trad}</span>
                </div>
                <div
                  className="p-4 flex items-start gap-2"
                  style={{ background: i % 2 === 0 ? 'rgba(79,140,255,0.06)' : 'rgba(79,140,255,0.03)' }}
                >
                  <Check className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: '#34D399' }} aria-hidden="true" />
                  <span className="text-sm font-medium text-white/80">{ai}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════ INDUSTRY CARDS ═══════════════ */}
      <section className="section-pad bg-navy">
        <div className="container-xl">
          <SectionLabel
            badge="Industry Focus"
            icon={Store}
            heading="Built for Your Industry"
            sub="Not generic bookkeeping. Industry-specific knowledge built in."
          />

          <div className="grid md:grid-cols-2 gap-6">
            {/* E-commerce */}
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: EASE }}
              className="glass-card rounded-2xl p-8 relative overflow-hidden group"
            >
              <div
                className="absolute -top-16 -right-16 w-52 h-52 rounded-full blur-3xl opacity-0 group-hover:opacity-15 transition-opacity duration-500 pointer-events-none"
                style={{ background: '#F59E0B' }}
                aria-hidden="true"
              />

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: '#F59E0B18', color: '#F59E0B' }} aria-hidden="true">
                  <ShoppingCart className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">E-commerce Sellers</h3>
                  <p className="text-xs text-white/40">Amazon · Shopify · Multi-channel</p>
                </div>
              </div>

              <p className="text-white/55 text-sm leading-relaxed mb-6">
                Amazon FBA, Shopify, multi-channel. We handle COGS, inventory, platform fees, and refund tracking — all reconciled to the penny, every month.
              </p>

              <ul className="space-y-2.5 mb-6">
                {['FBA settlement reconciliation', 'COGS & inventory costing', 'Platform fee analysis', 'Multi-state sales tax nexus', 'Returns & refund tracking'].map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-white/60">
                    <Check className="w-4 h-4 flex-shrink-0" style={{ color: '#F59E0B' }} aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {['Amazon FBA', 'Shopify', 'eBay', 'Walmart', 'Etsy'].map((p) => (
                  <span key={p} className="text-xs glass rounded-lg px-3 py-1.5 text-white/45 border border-white/[0.06]">{p}</span>
                ))}
              </div>
            </motion.div>

            {/* Convenience stores */}
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
              className="glass-card rounded-2xl p-8 relative overflow-hidden group"
            >
              <div
                className="absolute -top-16 -right-16 w-52 h-52 rounded-full blur-3xl opacity-0 group-hover:opacity-15 transition-opacity duration-500 pointer-events-none"
                style={{ background: '#10B981' }}
                aria-hidden="true"
              />

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: '#10B98118', color: '#10B981' }} aria-hidden="true">
                  <Store className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Convenience Stores & Gas Stations</h3>
                  <p className="text-xs text-white/40">Retail · Fuel · ATM</p>
                </div>
              </div>

              <p className="text-white/55 text-sm leading-relaxed mb-6">
                Lottery commissions, fuel margins, daily cash reconciliation, ATM tracking — we know your books inside out and handle every line item specific to your business.
              </p>

              <ul className="space-y-2.5 mb-6">
                {['Daily cash reconciliation', 'Lottery commission tracking', 'Fuel margin analysis', 'ATM & money order tracking', 'Tobacco & restricted item tracking'].map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-white/60">
                    <Check className="w-4 h-4 flex-shrink-0" style={{ color: '#10B981' }} aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {['Cash registers', 'POS systems', 'Fuel cards', 'Lottery terminal', 'ATM'].map((p) => (
                  <span key={p} className="text-xs glass rounded-lg px-3 py-1.5 text-white/45 border border-white/[0.06]">{p}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ METRICS ════════════════════ */}
      <section className="section-pad bg-navy-800">
        <div className="container-xl">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { value: 50000, suffix: '+',  label: 'Transactions Categorized', sub: 'Every month, accurately',  color: '#4F8CFF' },
              { value: 95,    suffix: '%+', label: 'AI Accuracy Rate',          sub: '95%+ on the first pass',  color: '#10B981' },
              { value: 48,    suffix: 'hr', label: 'Month-End Close',           sub: 'From data to delivered',  color: '#00D4FF' },
            ].map(({ value, suffix, label, sub, color }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: EASE }}
                className="glass-card rounded-2xl p-8 text-center relative overflow-hidden"
              >
                <div
                  className="absolute inset-0 rounded-2xl opacity-[0.04] pointer-events-none"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${color}, transparent 70%)` }}
                  aria-hidden="true"
                />
                <p className="text-5xl font-black mb-2" style={{ color }}>
                  <Counter value={value} suffix={suffix} />
                </p>
                <p className="font-semibold text-white mb-1">{label}</p>
                <p className="text-sm text-white/40">{sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ BOTTOM CTA ═════════════════ */}
      <section className="section-pad bg-navy relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="gradient-mesh" style={{ opacity: 0.7 }} />
        </div>

        <div className="relative container-xl max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <div className="badge mb-6 mx-auto inline-flex">
              <Zap className="w-3 h-3" aria-hidden="true" />
              Get Started Today
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-5">
              Ready to Put AI to Work{' '}
              <span className="text-gradient">on Your Books?</span>
            </h2>

            <p className="text-white/50 text-lg mb-10">
              Join businesses saving 10+ hours per month on bookkeeping.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary !px-8 !py-4 shadow-glow-blue">
                Start Free Consultation <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
              <Link href="/pricing" className="btn-ghost !px-8 !py-4">
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
