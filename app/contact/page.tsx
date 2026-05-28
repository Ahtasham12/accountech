import type { Metadata } from 'next'
import { Mail, Phone, Clock, MapPin, Calendar, Zap } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import TrustBadgeBar from '@/components/TrustBadgeBar'

export const metadata: Metadata = {
  title: 'Contact — Schedule a Free Consultation',
  description:
    'Get in touch with AccounTech. Schedule a free 30-minute consultation. Email: team@accountech.com. Phone: (305) 555-0123. Mon–Fri 9AM–6PM EST.',
  openGraph: {
    title: 'Contact AccounTech',
    description: 'Schedule a free bookkeeping consultation. We respond within 1 business day.',
  },
}

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'team@accountech.com',
    href: 'mailto:team@accountech.com',
    color: '#4F8CFF',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '(305) 555-0123',
    href: 'tel:+13055550123',
    color: '#10B981',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Mon–Fri, 9AM–6PM EST',
    href: null,
    color: '#00D4FF',
  },
  {
    icon: MapPin,
    label: 'Entity',
    value: 'AccounTech LLC · Florida, USA',
    href: null,
    color: '#8B5CF6',
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="aurora-bg section-pad pt-32 sm:pt-40" aria-labelledby="contact-heading">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="gradient-mesh" />
          </div>
        </div>
        <div className="relative container-xl max-w-3xl text-center">
          <AnimateOnScroll variant="fade-up">
            <div className="badge mb-4">
              <Zap className="w-3 h-3" aria-hidden="true" />
              Get in Touch
            </div>
            <h1 id="contact-heading" className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
              Let's talk about{' '}
              <span className="text-gradient">your books</span>
            </h1>
            <p className="section-sub max-w-xl mx-auto">
              Schedule a free 30-minute consultation. We'll review your current setup and show you
              exactly how AccounTech works — no commitment required.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-navy-800 section-pad" aria-label="Contact information and form">
        <div className="container-xl max-w-6xl">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* Left: Contact info */}
            <div className="lg:col-span-2 space-y-6">
              <AnimateOnScroll variant="fade-up">
                <h2 className="text-xl font-bold text-white mb-6">Contact information</h2>

                <div className="space-y-4">
                  {contactInfo.map(({ icon: Icon, label, value, href, color }) => (
                    <div key={label} className="glass-card rounded-xl p-4 flex items-center gap-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: `${color}18`, color }}
                        aria-hidden="true"
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-white/40 font-medium">{label}</div>
                        {href ? (
                          <a href={href} className="text-white/80 hover:text-white text-sm font-medium transition-colors">
                            {value}
                          </a>
                        ) : (
                          <div className="text-white/80 text-sm font-medium">{value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>

              {/* Calendly CTA */}
              <AnimateOnScroll variant="fade-up" delay={0.1}>
                <div className="glass-card rounded-2xl p-6" style={{ background: 'linear-gradient(135deg, rgba(79,140,255,0.12) 0%, rgba(0,212,255,0.06) 100%)', borderColor: 'rgba(79,140,255,0.25)' }}>
                  <div className="flex items-center gap-3 mb-3">
                    <Calendar className="w-5 h-5 text-accent" aria-hidden="true" />
                    <h3 className="font-bold text-white">Schedule a call directly</h3>
                  </div>
                  <p className="text-white/50 text-sm mb-5">
                    Prefer to book a time directly? Use our scheduling link for a free 30-minute consultation.
                  </p>
                  <a
                    href="https://calendly.com/accountech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full btn-primary justify-center"
                  >
                    Book via Calendly
                    <Calendar className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>
              </AnimateOnScroll>

              {/* Response time */}
              <AnimateOnScroll variant="fade-up" delay={0.15}>
                <div className="glass rounded-xl p-4 border border-emerald/20">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 bg-emerald rounded-full animate-pulse" aria-hidden="true" />
                    <span className="font-semibold text-emerald text-sm">We respond within 1 business day</span>
                  </div>
                  <p className="text-sm text-white/40">
                    Most inquiries get a response within a few hours during business hours.
                  </p>
                </div>
              </AnimateOnScroll>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              <AnimateOnScroll variant="fade-up" delay={0.1}>
                <div className="glass-card rounded-2xl p-6 sm:p-8">
                  <h2 className="text-xl font-bold text-white mb-6">Send us a message</h2>
                  <ContactForm />
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-navy section-pad-sm" aria-labelledby="trust-heading">
        <div className="container-xl">
          <h2 id="trust-heading" className="text-center text-xs font-semibold text-white/30 mb-6 uppercase tracking-widest">
            Certified, secure, and US-based
          </h2>
          <TrustBadgeBar className="justify-center" />
        </div>
      </section>
    </>
  )
}
