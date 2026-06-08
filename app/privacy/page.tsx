import type { Metadata } from 'next'
import Link from 'next/link'
import { Shield, ArrowLeft } from 'lucide-react'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Accounting Skip Privacy Policy — how we collect, use, and protect your personal and financial information.',
}

const LAST_UPDATED = 'May 27, 2026'

const sections = [
  {
    id: 'overview',
    heading: 'Overview',
    body: `Accounting Skip LLC ("Accounting Skip," "we," "our," or "us") is a Florida-based bookkeeping and accounting services company. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (accountingskip.com) or engage our bookkeeping services.

We take your privacy seriously. Because we handle financial information on behalf of small businesses, we operate under strict confidentiality standards and apply security controls appropriate for sensitive financial data.

By using our website or services, you agree to the practices described in this policy.`,
  },
  {
    id: 'information-we-collect',
    heading: 'Information We Collect',
    body: `We collect information in three ways:

**Information you provide directly**
When you contact us, request a consultation, or become a client, you may provide your name, email address, phone number, company name, and details about your business. As a bookkeeping client, you will also share financial records such as bank statements, transaction histories, receipts, invoices, payroll data, and access credentials to accounting software (QuickBooks, Xero, etc.).

**Information collected automatically**
When you visit our website, we collect standard web analytics data including your IP address, browser type, pages visited, time spent on pages, and referring URL. This data is collected via cookies and similar technologies and is used solely to improve our website.

**Information from third parties**
We receive financial data from platforms you authorize us to access, including QuickBooks Online, Xero, bank feeds, Stripe, Amazon Seller Central, and Shopify. We only access data you explicitly authorize.`,
  },
  {
    id: 'how-we-use-information',
    heading: 'How We Use Your Information',
    body: `We use your information for the following purposes:

- **Service delivery**: To perform bookkeeping, reconciliation, reporting, and related accounting services you have engaged us for
- **Communication**: To respond to inquiries, send monthly financial reports, and communicate about your account
- **Quality assurance**: To review work product accuracy and improve our AI categorization systems
- **Legal compliance**: To comply with applicable financial regulations, tax laws, and professional accounting standards
- **Business operations**: To process payments, manage client relationships, and operate our business

We do not use your financial data to train third-party AI models. Any AI tools we use for categorization operate under data processing agreements that prohibit using client data for model training.`,
  },
  {
    id: 'sharing',
    heading: 'How We Share Your Information',
    body: `We do not sell your personal or financial information to third parties. Period.

We share information only in the following limited circumstances:

**Service providers**: We work with vetted subprocessors including cloud storage providers (AWS, Google Cloud), accounting software vendors (Intuit, Xero), and communication tools. All subprocessors are bound by data processing agreements with confidentiality obligations.

**Professional partners**: If you are referred to us by a CPA firm under our Partner Program, we may share relevant engagement details with your referring CPA as authorized by you.

**Legal requirements**: We may disclose information if required by law, subpoena, court order, or to protect the rights, property, or safety of Accounting Skip, our clients, or others.

**Business transfer**: If Accounting Skip is acquired or merges, client data may transfer to the successor entity, which would be bound by this privacy policy.`,
  },
  {
    id: 'data-security',
    heading: 'Data Security',
    body: `Financial data requires serious security. We implement the following controls:

- All data is encrypted in transit using TLS 1.2 or higher
- Financial documents and records are encrypted at rest using AES-256
- Access to client data is restricted on a need-to-know basis using role-based access controls
- We use multi-factor authentication for all internal systems that store client data
- Accounting software credentials are stored in a dedicated secrets management system, not in plain text
- We conduct annual security reviews and employee training on data handling

Despite these measures, no system is 100% secure. We will notify affected clients promptly in the event of a confirmed data breach.`,
  },
  {
    id: 'retention',
    heading: 'Data Retention',
    body: `We retain client financial records for 7 years following the end of your engagement, consistent with IRS recordkeeping requirements for business tax purposes. Website analytics data is retained for 26 months.

Upon termination of services, you may request the return or deletion of your financial data. We will provide your records in a standard format (PDF, CSV, or QuickBooks export) within 10 business days of a written request. Copies retained for legal compliance purposes will be securely deleted after the required retention period expires.`,
  },
  {
    id: 'cookies',
    heading: 'Cookies & Tracking',
    body: `Our website uses the following types of cookies:

**Essential cookies**: Required for the website to function. These cannot be disabled.

**Analytics cookies**: We use anonymized analytics (Google Analytics 4) to understand how visitors use our website. This data does not include personally identifiable information and is aggregated. You can opt out via the cookie consent banner on our site.

**No advertising cookies**: We do not use advertising trackers, retargeting pixels, or sell any website behavioral data.

You can control cookies through your browser settings. Disabling analytics cookies will not affect your ability to use our website.`,
  },
  {
    id: 'your-rights',
    heading: 'Your Rights',
    body: `You have the following rights regarding your personal information:

- **Access**: Request a copy of the personal information we hold about you
- **Correction**: Request correction of inaccurate information
- **Deletion**: Request deletion of your personal information (subject to legal retention requirements)
- **Portability**: Receive your financial records in a portable format
- **Opt-out**: Unsubscribe from marketing communications at any time via the unsubscribe link in any email

If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA), including the right to know, delete, and opt-out of the sale of personal information. We do not sell personal information.

To exercise any of these rights, contact us at privacy@accountingskip.com.`,
  },
  {
    id: 'changes',
    heading: 'Changes to This Policy',
    body: `We may update this Privacy Policy periodically to reflect changes in our practices or applicable law. We will notify active clients of material changes via email at least 30 days before they take effect. The "Last Updated" date at the top of this page always reflects the most recent revision.

Continued use of our services after the effective date of any changes constitutes acceptance of the updated policy.`,
  },
  {
    id: 'contact',
    heading: 'Contact Us',
    body: `If you have questions about this Privacy Policy or want to exercise your data rights, reach us at:

Accounting Skip LLC
Email: privacy@accountingskip.com
General: team@accountingskip.com
Phone: (305) 555-0123`,
  },
]

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="aurora-bg section-pad pt-32 sm:pt-40" aria-labelledby="privacy-heading">
        <div className="relative container-xl max-w-3xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm font-medium mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Back to Home
          </Link>

          <div className="badge mb-4">
            <Shield className="w-3 h-3" aria-hidden="true" />
            Legal
          </div>
          <h1 id="privacy-heading" className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-white/50 text-sm">
            Last updated: {LAST_UPDATED}
          </p>
          <p className="text-white/60 mt-4 text-lg leading-relaxed max-w-2xl">
            We handle your financial data with the same care a trusted accountant would. Here is exactly what we collect, why, and how we protect it.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-navy-800 section-pad" aria-label="Privacy policy content">
        <div className="container-xl max-w-3xl">
          {/* Table of contents */}
          <nav
            className="glass-card rounded-2xl p-6 mb-8"
            aria-label="Table of contents"
          >
            <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-4">Contents</p>
            <ol className="space-y-2">
              {sections.map((s, i) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors group"
                  >
                    <span className="text-accent/60 font-mono text-xs w-5 flex-shrink-0 group-hover:text-accent transition-colors">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {s.heading}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Sections */}
          <div className="glass-card rounded-2xl p-8 sm:p-12 space-y-12">
            {sections.map((s) => (
              <section key={s.id} id={s.id} aria-labelledby={`${s.id}-heading`}>
                <h2
                  id={`${s.id}-heading`}
                  className="text-xl font-bold text-white mb-4 pb-3 border-b border-white/[0.07]"
                >
                  {s.heading}
                </h2>
                <div className="space-y-4">
                  {s.body.split('\n\n').map((para, i) => {
                    if (para.startsWith('- ') || para.split('\n').some(l => l.startsWith('- '))) {
                      const lines = para.split('\n')
                      return (
                        <ul key={i} className="space-y-2">
                          {lines.map((line, j) => {
                            if (line.startsWith('- ')) {
                              const text = line.slice(2)
                              const parts = text.split(/(\*\*[^*]+\*\*)/)
                              return (
                                <li key={j} className="flex items-start gap-3 text-sm text-white/60 leading-relaxed">
                                  <span className="w-1.5 h-1.5 bg-accent/50 rounded-full flex-shrink-0 mt-2" aria-hidden="true" />
                                  <span>
                                    {parts.map((p, k) =>
                                      p.startsWith('**') && p.endsWith('**')
                                        ? <strong key={k} className="text-white/85 font-semibold">{p.slice(2, -2)}</strong>
                                        : p
                                    )}
                                  </span>
                                </li>
                              )
                            }
                            return null
                          })}
                        </ul>
                      )
                    }
                    const parts = para.split(/(\*\*[^*]+\*\*)/)
                    return (
                      <p key={i} className="text-white/60 leading-relaxed text-sm">
                        {parts.map((p, j) =>
                          p.startsWith('**') && p.endsWith('**')
                            ? <strong key={j} className="text-white/85 font-semibold">{p.slice(2, -2)}</strong>
                            : p
                        )}
                      </p>
                    )
                  })}
                </div>
              </section>
            ))}
          </div>

          <p className="text-center text-white/30 text-xs mt-8">
            &copy; {new Date().getFullYear()} Accounting Skip LLC. All rights reserved. &middot;{' '}
            <Link href="/terms" className="hover:text-white/60 transition-colors">Terms of Service</Link>
            {' '}&middot;{' '}
            <Link href="/security" className="hover:text-white/60 transition-colors">Security</Link>
          </p>
        </div>
      </section>

      <CTABanner
        headline="Questions about how we handle your data?"
        subtext="We're happy to walk through our security and privacy practices before you sign up."
      />
    </>
  )
}
