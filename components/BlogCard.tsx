import Link from 'next/link'
import { Clock, Tag, ArrowRight } from 'lucide-react'

interface BlogCardProps {
  title: string
  excerpt: string
  category: string
  date: string
  slug: string
  readTime: string
  featured?: boolean
}

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  'Bookkeeping Tips': { bg: 'rgba(79,140,255,0.12)', text: '#4F8CFF', border: 'rgba(79,140,255,0.25)' },
  'Tax Updates': { bg: 'rgba(245,158,11,0.12)', text: '#F59E0B', border: 'rgba(245,158,11,0.25)' },
  'E-commerce': { bg: 'rgba(16,185,129,0.12)', text: '#10B981', border: 'rgba(16,185,129,0.25)' },
  'AI & Automation': { bg: 'rgba(139,92,246,0.12)', text: '#8B5CF6', border: 'rgba(139,92,246,0.25)' },
}

export default function BlogCard({
  title, excerpt, category, date, slug, readTime, featured = false,
}: BlogCardProps) {
  const colors = categoryColors[category] ?? { bg: 'rgba(255,255,255,0.06)', text: 'rgba(255,255,255,0.6)', border: 'rgba(255,255,255,0.12)' }

  return (
    <article
      className={`glass-card rounded-2xl flex flex-col group overflow-hidden ${featured ? 'p-8' : 'p-6'}`}
      aria-label={title}
    >
      {/* Top accent line */}
      <div
        className="h-px w-full mb-6 opacity-60"
        style={{ background: `linear-gradient(to right, ${colors.text}, transparent)` }}
        aria-hidden="true"
      />

      {/* Meta */}
      <div className="flex items-center gap-3 mb-4">
        <span
          className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full border"
          style={{ background: colors.bg, color: colors.text, borderColor: colors.border }}
        >
          <Tag className="w-3 h-3" aria-hidden="true" />
          {category}
        </span>
        <span className="flex items-center gap-1 text-xs text-white/40">
          <Clock className="w-3 h-3" aria-hidden="true" />
          {readTime}
        </span>
      </div>

      {/* Title */}
      <h3 className={`font-bold text-white mb-3 leading-tight group-hover:text-accent transition-colors ${featured ? 'text-2xl' : 'text-lg'}`}>
        <Link href={`/blog/${slug}`}>
          {title}
        </Link>
      </h3>

      {/* Excerpt */}
      <p className="text-white/50 text-sm leading-relaxed flex-1 mb-5">{excerpt}</p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
        <time className="text-xs text-white/30" dateTime={date}>
          {new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </time>
        <Link
          href={`/blog/${slug}`}
          className="inline-flex items-center gap-1 text-sm font-semibold text-accent/60 hover:text-accent hover:gap-2 transition-all"
          aria-label={`Read: ${title}`}
        >
          Read more <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  )
}
