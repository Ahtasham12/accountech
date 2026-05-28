import type { Metadata } from 'next'
import { Target, Eye, Zap, Heart, Award, Shield, Users, TrendingUp, BrainCircuit } from 'lucide-react'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import TrustBadgeBar from '@/components/TrustBadgeBar'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'About AccounTech — AI + Human Bookkeeping for US Small Businesses',
  description:
    'AccounTech was founded to bridge the gap between expensive US bookkeeping and unreliable offshore services. Florida LLC. QBO ProAdvisor Certified. AI-powered.',
  openGraph: {
    title: 'About AccounTech',
    description: "We combine AI technology with certified accountants to deliver bookkeeping that's faster, more accurate, and more affordable.",
  },
}

const values = [
  {
    icon: Target,
    title: 'Accuracy',
    description: 'We maintain a 99.2% accuracy rate by combining AI speed with human judgment. Every transaction is verified before it posts.',
    color: '#4F8CFF',
  },
  {
    icon: Eye,
    title: 'Transparency',
    description: "Clear pricing, plain-English reports, honest communication. No hidden fees, no bookkeeping jargon you can't understand.",
    color: '#00D4FF',
  },
  {
    icon: Zap,
    title: 'Technology-Forward',
    description: 'We use the latest AI (Claude API) for repetitive work — so our accountants can focus on the judgment calls that matter.',
    color: '#8B5CF6',
  },
  {
    icon: Heart,
    title: 'Client-First',
    description: "Small businesses are the backbone of the US economy. We're here to give them accounting resources previously only available to larger companies.",
    color: '#10B981',
  },
]

const stats = [
  { value: '80%', label: 'Transactions auto-categorized', color: '#4F8CFF' },
  { value: '5 days', label: 'Month-end close (Scale plan)', color: '#10B981' },
  { value: '99.2%', label: 'Accuracy rate, verified monthly', color: '#00D4FF' },
  { value: '$349', label: 'Starting price per month', color: '#8B5CF6' },
]

const aiItems = [
  'Routine expense categorization',
  'Recurring vendor recognition',
  'Standard bank feed matching',
  'Receipt OCR and data extraction',
  'Duplicate detection',
  'High-confidence categorization',
]

const humanItems = [
  'Unusual or ambiguous transactions',
  'New vendor classification',
  'Complex expense splitting',
  'Industry-specific categorization',
  'Financial narrative writing',
  'Client questions and advisory',
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="aurora-bg section-pad pt-32 sm:pt-40" aria-labelledby="about-heading">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="gradient-mesh" />
          </div>
        </div>
        <div className="relative container-xl max-w-4xl text-center">
          <AnimateOnScroll variant="fade-up">
            <div className="badge mb-4">Our Story</div>
            <h1 id="about-heading" className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Built to make great bookkeeping{' '}
              <span className="text-gradient">accessible to every US small business</span>
            </h1>
            <p className="section-sub max-w-2xl mx-auto">
              AccounTech was founded to bridge the gap between expensive US bookkeeping and unreliable offshore services.
              The answer: AI for the repetitive work, certified accountants for the judgment calls.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Story */}
      <section className="bg-navy-800 section-pad" aria-labelledby="story-heading">
        <div className="container-xl max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll variant="fade-up">
              <div>
                <div className="badge mb-4">The Problem We Solved</div>
                <h2 id="story-heading" className="section-heading mb-6">
                  US small businesses deserved better
                </h2>
                <div className="space-y-4 text-white/60 leading-relaxed text-sm sm:text-base">
                  <p>
                    US small business owners faced an impossible choice: pay $800–$2,000/month for a local bookkeeper,
                    risk unreliable offshore services, or DIY their finances while running their business.
                  </p>
                  <p>
                    None of these options worked. Local bookkeepers are expensive. Offshore services often lack
                    US tax knowledge. DIY leads to errors that cost more to fix than prevent.
                  </p>
                  <p>
                    We built AccounTech to bridge this gap. By automating the repetitive parts of bookkeeping with AI
                    (about 80% of all transactions), we deliver accurate, US-standard bookkeeping at a price that
                    actually makes sense for small businesses.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll variant="fade-up" delay={0.15}>
              <div className="glass-card rounded-2xl p-8">
                <h3 className="font-bold text-white text-lg mb-8">Our approach in numbers</h3>
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div
                        className="text-3xl font-black mb-2"
                        style={{ color: stat.color }}
                      >
                        {stat.value}
                      </div>
                      <div className="text-xs text-white/40 leading-relaxed">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* AI vs Human split */}
      <section className="bg-navy section-pad" aria-labelledby="approach-heading">
        <div className="container-xl max-w-5xl">
          <div className="text-center mb-16">
            <AnimateOnScroll variant="fade-up">
              <div className="badge mb-4">Our Approach</div>
              <h2 id="approach-heading" className="section-heading mb-4">
                AI handles the volume.{' '}
                <span className="text-gradient">Humans handle the judgment.</span>
              </h2>
              <p className="section-sub max-w-xl mx-auto">
                This isn't AI replacing accountants — it's AI amplifying what accountants can do.
              </p>
            </AnimateOnScroll>
          </div>

          {/* 80/20 visual bar */}
          <AnimateOnScroll variant="fade-up" delay={0.05}>
            <div className="mb-10 glass-card rounded-2xl p-6 overflow-hidden">
              <div className="flex items-center gap-1 mb-3">
                <div className="h-3 rounded-l-full bg-accent transition-all" style={{ width: '80%' }} />
                <div className="h-3 rounded-r-full bg-emerald transition-all" style={{ width: '20%' }} />
              </div>
              <div className="flex justify-between text-xs text-white/50">
                <span>AI handles 80% of transactions</span>
                <span>Humans handle 20%</span>
              </div>
            </div>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-2 gap-6">
            <AnimateOnScroll variant="fade-up">
              <div className="glass-card rounded-2xl p-6 border-l-2 border-l-accent">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <BrainCircuit className="w-5 h-5 text-accent" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">AI Handles</h3>
                    <span className="text-xs text-accent font-semibold">~80% of all transactions</span>
                  </div>
                </div>
                <ul className="space-y-2.5">
                  {aiItems.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-white/60">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll variant="fade-up" delay={0.1}>
              <div className="glass-card rounded-2xl p-6 border-l-2 border-l-emerald">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-emerald/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-emerald" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">Humans Handle</h3>
                    <span className="text-xs text-emerald font-semibold">~20% requiring judgment</span>
                  </div>
                </div>
                <ul className="space-y-2.5">
                  {humanItems.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-white/60">
                      <span className="w-1.5 h-1.5 bg-emerald rounded-full flex-shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-navy-800 section-pad" aria-labelledby="values-heading">
        <div className="container-xl">
          <div className="text-center mb-16">
            <AnimateOnScroll variant="fade-up">
              <div className="badge mb-4">Our Values</div>
              <h2 id="values-heading" className="section-heading mb-4">What we stand for</h2>
            </AnimateOnScroll>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, description, color }, i) => (
              <AnimateOnScroll key={title} variant="fade-up" delay={i * 0.08}>
                <div className="glass-card rounded-2xl p-6 text-center group">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110"
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

      {/* Team */}
      <section className="bg-navy section-pad" aria-labelledby="team-heading">
        <div className="container-xl max-w-4xl">
          <div className="text-center mb-12">
            <AnimateOnScroll variant="fade-up">
              <div className="badge mb-4">Our Team</div>
              <h2 id="team-heading" className="section-heading mb-4">
                Certified accountants, backed by AI
              </h2>
              <p className="section-sub max-w-xl mx-auto">
                Every client gets a dedicated QBO-certified bookkeeper. US-based, trained on industry-specific accounting,
                supported by AI to move faster without sacrificing accuracy.
              </p>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll variant="fade-up" delay={0.1}>
            <div className="grid sm:grid-cols-3 gap-6">
              {['Lead Bookkeeper', 'QBO Specialist', 'E-commerce Accountant'].map((role) => (
                <div key={role} className="glass-card rounded-2xl p-6 text-center">
                  <div className="w-16 h-16 bg-accent/10 border border-accent/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-8 h-8 text-accent" aria-hidden="true" />
                  </div>
                  <div className="font-semibold text-white">{role}</div>
                  <div className="text-xs text-white/40 mt-1">Team member coming soon</div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-navy-800 section-pad" aria-labelledby="certs-heading">
        <div className="container-xl">
          <div className="text-center mb-10">
            <AnimateOnScroll variant="fade-up">
              <h2 id="certs-heading" className="section-heading mb-4">
                Certifications & trust signals
              </h2>
            </AnimateOnScroll>
          </div>
          <AnimateOnScroll variant="fade-up" delay={0.1}>
            <TrustBadgeBar className="justify-center" />
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up" delay={0.2}>
            <div className="mt-12 grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                { icon: Award, title: 'QBO ProAdvisor Certified', desc: 'Highest level of QuickBooks certification available.', color: '#4F8CFF' },
                { icon: Shield, title: 'SOC 2 Compliant', desc: 'Your financial data is protected to enterprise standards.', color: '#10B981' },
                { icon: TrendingUp, title: 'Florida LLC', desc: 'US-registered entity. Accountable under US law.', color: '#00D4FF' },
              ].map(({ icon: Icon, title, desc, color }) => (
                <div key={title} className="glass-card rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3" style={{ background: `${color}18`, color }}>
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-white text-sm mb-1">{title}</h3>
                  <p className="text-xs text-white/40">{desc}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <CTABanner
        headline="Ready to experience the difference?"
        subtext="Schedule a free consultation and see how AccounTech can transform your bookkeeping."
      />
    </>
  )
}
