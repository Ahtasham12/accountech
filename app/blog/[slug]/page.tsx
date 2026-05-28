import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Clock, Tag, Calendar } from 'lucide-react'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import CTABanner from '@/components/CTABanner'
import ShareButton from '@/components/ShareButton'

const posts: Record<string, {
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  content: string
}> = {
  'how-ai-categorizes-transactions': {
    title: 'How AI Categorizes 80% of Your Business Transactions (And What Happens to the Other 20%)',
    excerpt: 'We break down exactly how our AI categorization engine works — from vendor recognition to confidence scoring — and why human review still matters for edge cases.',
    category: 'AI & Automation',
    date: '2026-05-15',
    readTime: '6 min read',
    content: `
When business owners hear "AI categorizes 80% of your transactions," the natural follow-up question is: what's actually happening under the hood?

We get that question a lot. And we think it deserves a real answer — not marketing fluff.

## How the categorization engine works

Every transaction that hits your books goes through four layers of analysis:

**1. Vendor recognition**
The first thing our system does is identify the vendor. "AMZN*MKTP" becomes "Amazon Marketplace." "SQ *OFFICE DEPOT" becomes "Office Depot." We maintain a database of 50,000+ vendor patterns across every major US merchant category.

**2. Amount pattern analysis**
Certain amounts suggest certain categories. A charge of $14.99 from an unknown vendor with "MONTHLY" in the description is almost certainly a software subscription. Context matters.

**3. Historical pattern matching**
If you've categorized a transaction from the same vendor the same way 15 times, that's strong evidence the next one should be categorized the same way. Our system learns from your history.

**4. Confidence scoring**
Every categorization gets a confidence score from 0–100. Transactions scoring 95+ are automatically posted. Below 95? They go to a human reviewer.

## What falls into the 20%?

The 20% that goes to human review isn't random — it's the genuinely ambiguous stuff:

- New vendors we haven't seen before
- Mixed-purpose purchases (a Costco run that included both office supplies and personal groceries)
- Unusual amounts that don't fit historical patterns
- Split transactions that need to be broken across multiple categories
- Industry-specific items requiring contextual knowledge

This is where our QBO-certified accountants add the most value. Categorizing "Uline" as "Packaging Supplies" for an e-commerce business vs. "Office Supplies" for a restaurant requires knowing the business.

## Why 80%+ matters for you

When 80% of your transactions are categorized automatically at 99%+ accuracy, the economics of bookkeeping change entirely. What used to require hours of data entry becomes a review-and-approve workflow. That's how we can deliver month-end close in 5 days instead of 21.

The remaining 20% still gets human attention — it just gets better human attention, because our accountants aren't exhausted from manual data entry.

## The bottom line

AI categorization isn't about replacing accountants. It's about removing the parts of bookkeeping that don't require human judgment — so humans can focus on the parts that do.
    `,
  },
  'amazon-fba-bank-balance-reconciliation': {
    title: "Amazon FBA Sellers: Why Your Bank Balance Doesn't Match Your Revenue Dashboard",
    excerpt: "FBA settlement cycles, reserve accounts, and fee netting make Amazon accounting confusing. Here's the reconciliation process we use for every Amazon client.",
    category: 'E-commerce',
    date: '2026-05-08',
    readTime: '8 min read',
    content: `
If you're an Amazon FBA seller, you've probably experienced this: your Seller Central dashboard shows $45,000 in revenue for the month, but you only see $31,000 deposited to your bank. Where did $14,000 go?

The answer lies in how Amazon's settlement system works — and why reconciling it to your books requires understanding several moving parts.

## The Amazon settlement cycle

Amazon doesn't pay you every day. Settlements happen every 14 days, and each settlement covers a rolling period that's offset from the calendar. This means:

- Sales from days 1–14 might settle on day 17
- Returns initiated on day 10 might not net against your account until day 18
- A reimbursement from a claim filed 30 days ago shows up in today's settlement

This mismatch between your dashboard revenue and your bank deposits is the #1 source of confusion for FBA sellers.

## What's in a settlement

Every Amazon settlement is actually a net figure that includes:

- Product sales (gross)
- Minus: FBA fulfillment fees
- Minus: Referral fees (8-15% of sale price)
- Minus: Storage fees
- Minus: Returns and refunds
- Plus: Reimbursements
- Minus: Reserved amounts (Amazon holds funds if your account has disputes)

When you get a $31,000 deposit, you're seeing the end result of all these netting operations — not your revenue.

## Why this matters for your P&L

If you just book the bank deposit as revenue, your P&L will be wrong in two important ways:

1. Revenue will be understated (you're missing the gross sales figure)
2. Expenses won't be broken out (FBA fees, referral fees, storage should be separate line items)

The right approach is to reconcile each settlement report line by line, booking gross revenue and each fee category separately.

## Our reconciliation process

For every AccounTech e-commerce client, here's what we do:

1. Download the settlement detail report from Seller Central (or pull it via API)
2. Map each line item to the appropriate QuickBooks account
3. Reconcile the net deposit to the bank transaction
4. Track reserved funds separately until they release
5. Reconcile reimbursements back to the original inventory cost

It takes time, but it gives you a P&L that actually reflects how your Amazon business is performing — not just what hit your bank account.
    `,
  },
  '2026-sales-tax-nexus-guide': {
    title: 'The 2026 Sales Tax Nexus Guide for Online Sellers',
    excerpt: "Economic nexus thresholds changed in several states this year. Here's what e-commerce sellers need to know to stay compliant.",
    category: 'Tax Updates',
    date: '2026-04-22',
    readTime: '10 min read',
    content: `
If you sell online and ship to customers in multiple states, you likely have sales tax obligations in states where you've never set foot — and those obligations may have changed in 2026.

Here's what you need to know.

## Economic nexus: the short version

Prior to 2018, you only owed sales tax in states where you had a physical presence. The Supreme Court's South Dakota v. Wayfair decision changed that: states can now require you to collect and remit sales tax based solely on your sales volume in that state.

This is called "economic nexus."

## 2026 threshold changes

Several states updated their economic nexus thresholds effective January 1, 2026:

- Colorado: Lowered threshold from $500,000 to $100,000 in sales
- Louisiana: Added transaction count threshold of 200 transactions
- Missouri: New state, now enforcing economic nexus with $100,000 threshold
- Pennsylvania: Added marketplace facilitator rules affecting third-party sellers

Bottom line for multi-state sellers: If you're selling $100,000+ or 200+ transactions in a state, you likely have nexus there and need to collect and remit sales tax.

## Marketplace vs. direct sales

If you sell only through Amazon or Shopify, here's some relief: these platforms collect and remit sales tax on your behalf in most states. You still need to track this for your records, but you're generally not responsible for the collection.

However, if you sell directly through your own website in addition to marketplaces, your direct sales count toward nexus thresholds in those states.

## What happens if you ignore it

The consequences of uncollected sales tax are getting more serious:

- Back taxes plus interest (often 10-12% annually)
- Penalties of 25-50% of the unpaid tax in some states
- Voluntary disclosure programs exist, but you have to initiate them before the state finds you
- Some states are actively auditing out-of-state sellers using data from payment processors

## How to get compliant

1. Audit your nexus exposure: Where are you selling? How much? Check against each state's threshold.
2. Register in nexus states: Once you have nexus, you're required to register and collect.
3. Set up tax collection: Tools like TaxJar and Avalara automate this for e-commerce sellers.
4. File regularly: Monthly, quarterly, or annually depending on the state and your volume.

AccounTech clients on Growth and Scale plans get nexus monitoring included. We track your sales by state and flag when you're approaching or crossing thresholds.
    `,
  },
}

const categoryColors: Record<string, string> = {
  'AI & Automation': '#8B5CF6',
  'E-commerce': '#10B981',
  'Tax Updates': '#F59E0B',
  'Bookkeeping Tips': '#4F8CFF',
}

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = posts[params.slug]
  if (!post) return { title: 'Post Not Found' }
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
    },
  }
}

function renderContent(content: string) {
  const lines = content.trim().split('\n')
  const elements: React.ReactNode[] = []
  let key = 0

  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed) { key++; continue }

    if (trimmed.startsWith('## ')) {
      elements.push(
        <h2 key={key++} className="text-2xl font-bold text-white mt-10 mb-4 leading-tight">
          {trimmed.slice(3)}
        </h2>
      )
    } else if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
      elements.push(
        <p key={key++} className="font-semibold text-white/90 mt-5 mb-2">
          {trimmed.slice(2, -2)}
        </p>
      )
    } else if (trimmed.startsWith('- ')) {
      elements.push(
        <li key={key++} className="ml-4 mb-2 text-white/60 flex items-start gap-2">
          <span className="w-1.5 h-1.5 bg-accent/60 rounded-full flex-shrink-0 mt-1.5" aria-hidden="true" />
          {trimmed.slice(2)}
        </li>
      )
    } else if (trimmed.match(/^\d+\. /)) {
      const match = trimmed.match(/^(\d+)\. (.+)$/)
      if (match) {
        elements.push(
          <div key={key++} className="flex gap-3 mb-2">
            <span className="text-accent font-bold flex-shrink-0">{match[1]}.</span>
            <p className="text-white/60 leading-relaxed">{match[2]}</p>
          </div>
        )
      }
    } else {
      elements.push(
        <p key={key++} className="text-white/60 leading-relaxed mb-4">
          {trimmed}
        </p>
      )
    }
  }

  return elements
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts[params.slug]
  const accentColor = post ? (categoryColors[post.category] ?? '#4F8CFF') : '#4F8CFF'

  if (!post) {
    return (
      <div className="min-h-dvh aurora-bg flex items-center justify-center px-4 py-32">
        <div className="text-center">
          <h1 className="section-heading mb-4">Post not found</h1>
          <Link href="/blog" className="btn-primary">Back to Blog</Link>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Header */}
      <section className="aurora-bg section-pad pt-32 sm:pt-40" aria-labelledby="post-heading">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="gradient-mesh opacity-60" />
          </div>
        </div>
        <div className="relative container-xl max-w-3xl">
          <AnimateOnScroll variant="fade-up">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm font-medium mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              Back to Blog
            </Link>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border"
                style={{ background: `${accentColor}15`, color: accentColor, borderColor: `${accentColor}30` }}
              >
                <Tag className="w-3 h-3" aria-hidden="true" />
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-white/40">
                <Clock className="w-3 h-3" aria-hidden="true" />
                {post.readTime}
              </span>
              <time className="flex items-center gap-1.5 text-xs text-white/40" dateTime={post.date}>
                <Calendar className="w-3 h-3" aria-hidden="true" />
                {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </time>
            </div>

            <h1 id="post-heading" className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-5">
              {post.title}
            </h1>
            <p className="text-lg text-white/50 leading-relaxed">{post.excerpt}</p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Article */}
      <article className="bg-navy-800 section-pad" aria-label="Blog post content">
        <div className="container-xl max-w-3xl">
          <div className="glass-card rounded-2xl p-8 sm:p-12">
            <div className="space-y-1">
              {renderContent(post.content)}
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 flex items-center justify-between">
            <Link href="/blog" className="btn-ghost text-sm">
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              Back to Blog
            </Link>
            <ShareButton title={post.title} />
          </div>
        </div>
      </article>

      <CTABanner
        headline="Let us handle your books"
        subtext="Starting at $349/month. AI-powered categorization, QBO-certified review, 5-day close."
      />
    </>
  )
}
