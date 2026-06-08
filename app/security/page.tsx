import type { Metadata } from 'next'
import Link from 'next/link'
import { Lock, Shield, Server, Eye, RefreshCw, Users, ArrowLeft } from 'lucide-react'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Security',
  description: 'How Accounting Skip protects your financial data — encryption, access controls, and security practices.',
}

const controls = [
  {
    Icon: Lock,
    color: '#4F8CFF',
    title: 'Encryption Everywhere',
    items: [
      'All data in transit is encrypted with TLS 1.3',
      'Financial documents stored with AES-256 encryption at rest',
      'Database backups are encrypted before leaving our infrastructure',
      'Internal API communications use mutual TLS',
    ],
  },
  {
    Icon: Users,
    color: '#10B981',
    title: 'Access Controls',
    items: [
      'Role-based access — staff only see client data relevant to their work',
      'Multi-factor authentication required for all internal systems',
      'Principle of least privilege enforced across all tools',
      'Access logs retained for 12 months and reviewed monthly',
    ],
  },
  {
    Icon: Server,
    color: '#8B5CF6',
    title: 'Infrastructure',
    items: [
      'Hosted on AWS with SOC 2 Type II certified data centers',
      'Data residency in the United States',
      'Automated daily backups with 30-day retention',
      'Infrastructure-as-code with version-controlled configuration',
    ],
  },
  {
    Icon: Eye,
    color: '#00D4FF',
    title: 'Credential Management',
    items: [
      'Third-party credentials (bank logins, QuickBooks) stored in a dedicated secrets vault',
      'No passwords stored in plain text or source code',
      'Accounting software connected via OAuth where available',
      'Credential rotation policy enforced annually',
    ],
  },
  {
    Icon: RefreshCw,
    color: '#F59E0B',
    title: 'Incident Response',
    items: [
      'Documented incident response plan reviewed annually',
      'Clients notified within 72 hours of any confirmed breach',
      'Security events logged to a SIEM for real-time alerting',
      'Annual penetration test by an independent third party',
    ],
  },
  {
    Icon: Shield,
    color: '#EC4899',
    title: 'Employee Training',
    items: [
      'All staff complete security awareness training upon hire',
      'Annual phishing simulation and security refresher',
      'Background checks performed on all team members with client data access',
      'Strict clean-desk and screen-lock policy for remote work',
    ],
  },
]

export default function SecurityPage() {
  return (
    <>
      {/* Hero */}
      <section className="aurora-bg section-pad pt-32 sm:pt-40" aria-labelledby="security-heading">
        <div className="relative container-xl max-w-4xl text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm font-medium mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Back to Home
          </Link>

          <div className="badge mb-4 mx-auto">
            <Shield className="w-3 h-3" aria-hidden="true" />
            Security
          </div>
          <h1 id="security-heading" className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
            How We Protect Your Data
          </h1>
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto">
            Your financial data is among the most sensitive information your business has. We treat it that way — with bank-grade security controls, strict access policies, and a culture of security-first thinking.
          </p>
        </div>
      </section>

      {/* Security controls grid */}
      <section className="bg-navy-800 section-pad" aria-labelledby="controls-heading">
        <div className="container-xl">
          <h2 id="controls-heading" className="sr-only">Security controls</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {controls.map(({ Icon, color, title, items }) => (
              <div key={title} className="glass-card rounded-2xl p-6 relative overflow-hidden group">
                {/* Hover glow */}
                <div
                  className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl pointer-events-none"
                  style={{ background: color }}
                  aria-hidden="true"
                />

                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${color}18`, color }}
                  aria-hidden="true"
                >
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-base font-bold text-white mb-4">{title}</h3>

                <ul className="space-y-2.5">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-white/55 leading-relaxed">
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5"
                        style={{ background: color }}
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsible disclosure */}
      <section className="bg-navy section-pad" aria-labelledby="disclosure-heading">
        <div className="container-xl max-w-2xl text-center">
          <div className="badge mb-4 mx-auto">
            <Eye className="w-3 h-3" aria-hidden="true" />
            Responsible Disclosure
          </div>
          <h2 id="disclosure-heading" className="section-heading mb-4">
            Found a security issue?
          </h2>
          <p className="section-sub mb-8">
            If you discover a security vulnerability on our website or in our systems, please report it to us before disclosing publicly. We will acknowledge receipt within 24 hours and keep you updated as we investigate.
          </p>
          <a
            href="mailto:security@accountingskip.com"
            className="btn-primary shadow-glow-blue"
          >
            <Shield className="w-4 h-4" aria-hidden="true" />
            security@accountingskip.com
          </a>
          <p className="text-white/30 text-xs mt-6">
            We do not pursue legal action against researchers who follow responsible disclosure practices.
          </p>
        </div>
      </section>

      <CTABanner
        headline="Security questions before you sign up?"
        subtext="We are happy to walk through our controls in detail. Schedule a free call with our team."
      />
    </>
  )
}
