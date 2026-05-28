'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

interface FAQItem { question: string; answer: string }
interface FAQAccordionProps { items: FAQItem[] }

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [open, setOpen] = useState<number | null>(null)
  const toggle = (i: number) => setOpen(open === i ? null : i)

  return (
    <div className="space-y-2" role="list">
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div
            key={i}
            className={`rounded-xl border transition-all duration-200 ${
              isOpen
                ? 'border-accent/30 bg-accent/[0.05]'
                : 'border-white/[0.07] bg-white/[0.02] hover:border-white/[0.12]'
            }`}
            role="listitem"
          >
            <button
              onClick={() => toggle(i)}
              className="flex items-center justify-between w-full px-6 py-5 text-left"
              aria-expanded={isOpen}
              aria-controls={`faq-${i}`}
              id={`faq-btn-${i}`}
            >
              <span className={`font-medium text-base pr-8 transition-colors ${isOpen ? 'text-white' : 'text-white/80'}`}>
                {item.question}
              </span>
              <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 ${
                isOpen ? 'bg-accent text-white rotate-0' : 'bg-white/[0.06] text-white/50 rotate-0'
              }`} aria-hidden="true">
                {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-${i}`}
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
                  style={{ overflow: 'hidden' }}
                >
                  <div className="px-6 pb-6 pt-0">
                    <div className="w-full h-px bg-white/[0.06] mb-4" aria-hidden="true" />
                    <p className="text-white/60 leading-relaxed text-sm sm:text-base">{item.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
