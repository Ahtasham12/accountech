'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Testimonial {
  quote: string
  author: string
  company: string
  role: string
  rating: number
  initials: string
  accent: string
}

const testimonials: Testimonial[] = [
  {
    quote: "AccounTech transformed how we handle our books. Their AI catches things our old bookkeeper missed, and we get our monthly reports a week faster than before. The best part? We actually understand the financial summaries they send us.",
    author: "LogCabinRustics",
    company: "E-commerce · Amazon & Shopify Seller",
    role: "Founder",
    rating: 5,
    initials: "LC",
    accent: "#4F8CFF",
  },
  {
    quote: "We were spending 3 days a month chasing receipts and reconciling Amazon settlements. AccounTech cut that to zero. Their FBA reconciliation is incredibly detailed — we now know exactly where every dollar goes.",
    author: "Michael Chen",
    company: "Multi-channel Amazon Seller",
    role: "Owner",
    rating: 5,
    initials: "MC",
    accent: "#10B981",
  },
  {
    quote: "As a CPA firm, we needed a reliable bookkeeping partner for our small business clients. AccounTech's white-label service is flawless. Our clients get better books, faster, and we can focus on high-value advisory work.",
    author: "Sarah Rodriguez, CPA",
    company: "SR Advisory Group",
    role: "Managing Partner",
    rating: 5,
    initials: "SR",
    accent: "#00D4FF",
  },
]

const variants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 40 : -40 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -40 : 40 }),
}

export default function TestimonialCarousel() {
  const [[index, dir], setPage] = useState([0, 0])
  const [paused, setPaused] = useState(false)

  const paginate = useCallback((newDir: number) => {
    setPage(([prev]) => {
      const next = ((prev + newDir) % testimonials.length + testimonials.length) % testimonials.length
      return [next, newDir]
    })
  }, [])

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => paginate(1), 5500)
    return () => clearInterval(id)
  }, [paused, paginate])

  const t = testimonials[index]

  return (
    <div
      className="relative max-w-3xl mx-auto"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Client testimonials"
    >
      <AnimatePresence mode="wait" custom={dir}>
        <motion.div
          key={index}
          custom={dir}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="glass-card rounded-2xl p-8 sm:p-10"
          aria-live="polite"
        >
          {/* Stars */}
          <div className="flex items-center gap-1 mb-6" aria-label={`${t.rating} out of 5 stars`}>
            {Array.from({ length: t.rating }).map((_, i) => (
              <svg key={i} className="w-4 h-4 fill-yellow-400" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          {/* Quote */}
          <blockquote className="text-lg sm:text-xl text-white/90 leading-relaxed mb-8 font-light">
            "{t.quote}"
          </blockquote>

          {/* Author */}
          <figcaption className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm"
              style={{ backgroundColor: `${t.accent}20`, color: t.accent, border: `1px solid ${t.accent}40` }}
              aria-hidden="true"
            >
              {t.initials}
            </div>
            <div>
              <div className="font-semibold text-white">{t.author}</div>
              <div className="text-sm text-white/50">{t.company} · {t.role}</div>
            </div>
          </figcaption>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <div className="flex items-center justify-between mt-6">
        {/* Dots */}
        <div className="flex items-center gap-2" role="tablist" aria-label="Testimonial navigation">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setPage([i, i > index ? 1 : -1])}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? 'w-6 bg-accent' : 'w-1.5 bg-white/20 hover:bg-white/40'}`}
              role="tab"
              aria-selected={i === index}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>

        {/* Arrows */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => paginate(-1)}
            className="flex items-center justify-center w-9 h-9 glass rounded-xl hover:border-accent/30 hover:bg-accent/10 transition-all"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-4 h-4 text-white/60" aria-hidden="true" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="flex items-center justify-center w-9 h-9 glass rounded-xl hover:border-accent/30 hover:bg-accent/10 transition-all"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-4 h-4 text-white/60" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  )
}
