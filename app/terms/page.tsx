import type { Metadata } from 'next'
import Link from 'next/link'
import { FileText, ArrowLeft } from 'lucide-react'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Accounting Skip Terms of Service — the agreement governing our AI-powered bookkeeping services.',
}

const LAST_UPDATED = 'May 27, 2026'

const sections = [
  {
    id: 'acceptance',
    heading: 'Acceptance of Terms',
    body: `These Terms of Service ("Terms") constitute a legally binding agreement between you (the client, "you," or "your") and Accounting Skip LLC, a Florida limited liability company ("Accounting Skip," "we," "our," or "us").

By signing a Service Agreement, accessing our portal, or using any Accounting Skip service, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy.

If you are entering into these Terms on behalf of a company or other legal entity, you represent that you have the authority to bind that entity to these Terms.`,
  },
  {
    id: 'services',
    heading: 'Services Provided',
    body: `Accounting Skip provides cloud-based bookkeeping, accounting, and financial reporting services as described in your selected plan (Starter, Growth, or Scale). Services may include:

- Monthly transaction categorization and coding
- Bank and credit card reconciliation
- Accounts payable and receivable management
- Monthly financial report preparation (P&L, Balance Sheet, Cash Flow)
- Receipt and document processing
- E-commerce platform reconciliation (Amazon, Shopify, and similar)
- Sales tax preparation and multi-state nexus monitoring (Growth and Scale plans)
- AI-assisted transaction processing reviewed by a QBO-certified accountant

The specific scope of services is defined in your signed Service Agreement or plan selection. Services described on our website are for general informational purposes and do not constitute a guarantee of scope unless confirmed in writing.

**Limitations**: Accounting Skip provides bookkeeping and accounting services, not tax preparation, legal advice, or financial planning. We are not a CPA firm. For tax filing, audit representation, or legal matters, we will refer you to qualified professionals.`,
  },
  {
    id: 'client-responsibilities',
    heading: 'Client Responsibilities',
    body: `To enable us to deliver accurate bookkeeping, you agree to:

- Provide timely access to your bank feeds, financial accounts, and accounting software as required for your plan
- Submit receipts, invoices, and supporting documents by the agreed monthly deadline (typically the 3rd business day of each month)
- Respond to requests for clarification on unusual transactions within 5 business days
- Notify Accounting Skip of any significant changes to your business (new bank accounts, new revenue streams, business structure changes) within 15 days
- Maintain the accuracy of information you provide; Accounting Skip's output is dependent on the completeness and accuracy of data you supply
- Keep your portal credentials confidential and notify us immediately of any unauthorized access

Accounting Skip is not responsible for errors or delays caused by incomplete, inaccurate, or late submission of required information.`,
  },
  {
    id: 'payment',
    heading: 'Payment Terms',
    body: `**Billing cycle**: Services are billed monthly in advance on the 1st of each month. Your plan rate is confirmed in your Service Agreement.

**Payment method**: We accept ACH bank transfer and major credit cards (Visa, Mastercard, Amex). Payment is processed automatically on the billing date.

**Late payments**: Invoices unpaid after 10 days incur a 1.5% monthly late fee. Accounts more than 30 days past due may be suspended until payment is received.

**Plan changes**: You may upgrade or downgrade your plan with 14 days' written notice before your next billing date. Upgrades take effect immediately and are prorated; downgrades take effect on the next billing cycle.

**Refunds**: Monthly fees are non-refundable once the billing period has started. If you cancel within the first 30 days of your initial engagement and are not satisfied with the service, we will issue a full refund at our discretion.

**Price changes**: We will provide 60 days' written notice before any price increase. Continued use of services after the notice period constitutes acceptance of the new rate.`,
  },
  {
    id: 'term-termination',
    heading: 'Term & Termination',
    body: `**Term**: These Terms begin on the date you sign your Service Agreement and continue month-to-month unless a fixed term is specified.

**Cancellation by you**: You may cancel at any time with 30 days' written notice to team@accountingskip.com. Your final billing period will run through the end of the notice period.

**Termination by Accounting Skip**: We may terminate services immediately if you breach these Terms, fail to pay after 30 days' notice, or engage in conduct that is fraudulent, illegal, or abusive toward our team. We may terminate without cause with 60 days' written notice.

**Effect of termination**: Upon termination, we will provide your financial records in a standard export format (PDF reports, QuickBooks export, or CSV) within 10 business days. We will revoke access to any third-party integrations authorized under your account.`,
  },
  {
    id: 'accuracy',
    heading: 'Accuracy & Limitation of Liability',
    body: `Accounting Skip uses AI-assisted categorization verified by a QBO-certified accountant. We target a 99%+ accuracy rate. However, we cannot guarantee error-free bookkeeping in all cases, particularly when:

- Source documents are incomplete, illegible, or not provided
- Transactions require industry-specific judgment beyond the scope of standard bookkeeping
- You or your other service providers have made changes to your accounts without notifying us

**Limitation of liability**: To the fullest extent permitted by law, Accounting Skip's total liability for any claims arising from these Terms or your use of our services shall not exceed the total fees paid by you in the three months preceding the claim. We are not liable for indirect, incidental, consequential, or punitive damages.

Accounting Skip is not liable for financial decisions you make based on our reports, tax penalties arising from information you failed to provide, or losses resulting from system outages or force majeure events.`,
  },
  {
    id: 'confidentiality',
    heading: 'Confidentiality',
    body: `Both parties agree to keep confidential all non-public information received from the other party in connection with the services. Accounting Skip will not disclose your financial records to any third party except as described in our Privacy Policy, required by law, or authorized by you in writing.

This obligation survives termination of the service relationship for a period of 5 years.`,
  },
  {
    id: 'intellectual-property',
    heading: 'Intellectual Property',
    body: `**Your data**: You retain ownership of all financial data, documents, and records you provide to Accounting Skip. We use this data solely to deliver services to you.

**Our work product**: Reports, analyses, and other deliverables we create for you are provided for your use. Upon full payment, you own these deliverables.

**Our platform**: Accounting Skip's software, AI systems, methodologies, processes, and website are our proprietary intellectual property. You receive a limited, non-transferable license to use our client portal during the term of your engagement only.`,
  },
  {
    id: 'governing-law',
    heading: 'Governing Law & Disputes',
    body: `These Terms are governed by the laws of the State of Florida, without regard to conflict of law principles. Any dispute arising from these Terms that cannot be resolved informally within 30 days shall be submitted to binding arbitration under the American Arbitration Association Commercial Arbitration Rules, conducted in Miami-Dade County, Florida.

You waive any right to participate in a class action lawsuit or class-wide arbitration in connection with any dispute arising from these Terms.`,
  },
  {
    id: 'changes',
    heading: 'Changes to Terms',
    body: `We may update these Terms periodically. We will notify you by email at least 30 days before material changes take effect. Minor changes (such as clarifications that do not affect your rights) may be posted without notice.

Your continued use of Accounting Skip services after the effective date of any revision constitutes your acceptance of the updated Terms.

If you do not agree to updated Terms, you may terminate your service with 30 days' written notice before the effective date.`,
  },
  {
    id: 'contact',
    heading: 'Contact',
    body: `For questions about these Terms, contact us at:

Accounting Skip LLC
Email: legal@accountingskip.com
General: team@accountingskip.com
Phone: (305) 555-0123`,
  },
]

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <section className="aurora-bg section-pad pt-32 sm:pt-40" aria-labelledby="terms-heading">
        <div className="relative container-xl max-w-3xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm font-medium mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Back to Home
          </Link>

          <div className="badge mb-4">
            <FileText className="w-3 h-3" aria-hidden="true" />
            Legal
          </div>
          <h1 id="terms-heading" className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-white/50 text-sm">
            Last updated: {LAST_UPDATED}
          </p>
          <p className="text-white/60 mt-4 text-lg leading-relaxed max-w-2xl">
            Plain-language terms governing your use of Accounting Skip bookkeeping services. We have tried to write these in plain English — but they are still a legal agreement.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-navy-800 section-pad" aria-label="Terms of service content">
        <div className="container-xl max-w-3xl">
          {/* Table of contents */}
          <nav className="glass-card rounded-2xl p-6 mb-8" aria-label="Table of contents">
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
                    if (para.split('\n').some(l => l.startsWith('- '))) {
                      const lines = para.split('\n')
                      return (
                        <ul key={i} className="space-y-2">
                          {lines.map((line, j) => {
                            if (!line.startsWith('- ')) return null
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
            <Link href="/privacy" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
            {' '}&middot;{' '}
            <Link href="/security" className="hover:text-white/60 transition-colors">Security</Link>
          </p>
        </div>
      </section>

      <CTABanner
        headline="Ready to get started?"
        subtext="Clean books in 5 days or less. Starting at $349/month."
      />
    </>
  )
}
