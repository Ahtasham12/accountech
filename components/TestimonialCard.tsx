import { Quote } from 'lucide-react'

interface TestimonialCardProps {
  quote: string
  author: string
  company: string
  role?: string
  rating?: number
  compact?: boolean
}

export default function TestimonialCard({
  quote,
  author,
  company,
  role,
  rating = 5,
  compact = false,
}: TestimonialCardProps) {
  return (
    <figure
      className={`card-base bg-white ${compact ? 'p-5' : 'p-8'}`}
      aria-label={`Testimonial from ${author} at ${company}`}
    >
      {/* Stars */}
      <div className="flex items-center gap-1 mb-4" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: rating }).map((_, i) => (
          <svg
            key={i}
            className="w-4 h-4 text-yellow-400 fill-current"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <blockquote className={`${compact ? 'text-sm' : 'text-base'} text-dark leading-relaxed mb-6`}>
        <Quote className="w-6 h-6 text-primary/30 mb-2" aria-hidden="true" />
        "{quote}"
      </blockquote>

      {/* Author */}
      <figcaption className="flex items-center gap-3">
        <div
          className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center flex-shrink-0"
          aria-hidden="true"
        >
          <span className="text-primary font-bold text-sm">{author.charAt(0)}</span>
        </div>
        <div>
          <div className="font-semibold text-dark text-sm">{author}</div>
          <div className="text-xs text-text-gray">
            {company}
            {role && ` · ${role}`}
          </div>
        </div>
      </figcaption>
    </figure>
  )
}
