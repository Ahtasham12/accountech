import type { Metadata } from 'next'
import { Tag, Zap } from 'lucide-react'
import BlogCard from '@/components/BlogCard'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import CTABanner from '@/components/CTABanner'
import NewsletterForm from '@/components/NewsletterForm'

export const metadata: Metadata = {
  title: 'Blog — Bookkeeping Tips, Tax Updates & E-commerce Accounting',
  description:
    'Practical bookkeeping tips, tax updates, e-commerce accounting guides, and AI automation insights for US small business owners.',
  openGraph: {
    title: 'Accounting Skip Blog',
    description: 'Bookkeeping tips, tax updates, and e-commerce accounting for US small businesses.',
  },
}

const posts = [
  {
    title: 'How AI Categorizes 80% of Your Business Transactions (And What Happens to the Other 20%)',
    excerpt:
      'We break down exactly how our AI categorization engine works — from vendor recognition to confidence scoring — and why human review still matters for edge cases.',
    category: 'AI & Automation',
    date: '2026-05-15',
    slug: 'how-ai-categorizes-transactions',
    readTime: '6 min read',
    featured: true,
  },
  {
    title: "Amazon FBA Sellers: Why Your Bank Balance Doesn't Match Your Revenue Dashboard",
    excerpt:
      "FBA settlement cycles, reserve accounts, and fee netting make Amazon accounting confusing. Here's the reconciliation process we use for every Amazon client.",
    category: 'E-commerce',
    date: '2026-05-08',
    slug: 'amazon-fba-bank-balance-reconciliation',
    readTime: '8 min read',
  },
  {
    title: 'The 2026 Sales Tax Nexus Guide for Online Sellers',
    excerpt:
      "Economic nexus thresholds changed in several states this year. Here's what e-commerce sellers need to know to stay compliant — and what happens if you don't.",
    category: 'Tax Updates',
    date: '2026-04-22',
    slug: '2026-sales-tax-nexus-guide',
    readTime: '10 min read',
  },
]

const categories = ['All', 'Bookkeeping Tips', 'Tax Updates', 'E-commerce', 'AI & Automation']

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="aurora-bg section-pad pt-32 sm:pt-40" aria-labelledby="blog-heading">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="gradient-mesh" />
          </div>
        </div>
        <div className="relative container-xl max-w-3xl text-center">
          <AnimateOnScroll variant="fade-up">
            <div className="badge mb-4">
              <Zap className="w-3 h-3" aria-hidden="true" />
              The Accounting Skip Blog
            </div>
            <h1 id="blog-heading" className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
              Bookkeeping insights for{' '}
              <span className="text-gradient">US small businesses</span>
            </h1>
            <p className="section-sub max-w-xl mx-auto">
              Practical guides on bookkeeping, tax compliance, e-commerce accounting, and how AI is changing
              the way small businesses manage their finances.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Category filter */}
      <section className="bg-navy-800 border-b border-white/[0.06] py-4" aria-label="Blog categories">
        <div className="container-xl">
          <div className="flex flex-wrap gap-2 px-4 sm:px-6 lg:px-8">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 ${
                  cat === 'All'
                    ? 'bg-accent text-white shadow-glow-blue-sm'
                    : 'glass text-white/50 hover:text-white hover:border-white/20'
                }`}
                aria-pressed={cat === 'All'}
              >
                {cat !== 'All' && <Tag className="w-3 h-3" aria-hidden="true" />}
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog posts */}
      <section className="bg-navy section-pad" aria-labelledby="posts-label">
        <div className="container-xl">
          <h2 id="posts-label" className="sr-only">Blog posts</h2>

          <AnimateOnScroll variant="fade-up">
            <div className="mb-6">
              <BlogCard {...posts[0]} featured />
            </div>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-2 gap-6">
            {posts.slice(1).map((post, i) => (
              <AnimateOnScroll key={post.slug} variant="fade-up" delay={i * 0.1}>
                <BlogCard {...post} />
              </AnimateOnScroll>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              className="btn-ghost opacity-50 cursor-not-allowed"
              disabled
              aria-label="More posts coming soon"
            >
              More posts coming soon
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-navy-800 section-pad" aria-labelledby="newsletter-heading">
        <div className="container-xl max-w-2xl text-center">
          <AnimateOnScroll variant="fade-up">
            <div className="badge mb-4 mx-auto">Newsletter</div>
            <h2 id="newsletter-heading" className="section-heading mb-4">
              Get bookkeeping insights monthly
            </h2>
            <p className="section-sub mb-8">
              Tax updates, bookkeeping tips, and AI in accounting — delivered once a month. No spam.
            </p>
            <NewsletterForm />
          </AnimateOnScroll>
        </div>
      </section>

      <CTABanner
        headline="Want us to handle the bookkeeping?"
        subtext="Reading about bookkeeping is one thing. Let us actually do it for you — starting at $349/month."
      />
    </>
  )
}
