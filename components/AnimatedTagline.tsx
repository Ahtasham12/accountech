'use client'

import { motion, useReducedMotion } from 'framer-motion'

// ─── Data ─────────────────────────────────────────────────────────
const WORDS = ['Let', 'us', 'automate', 'your', 'bookkeeping', 'workflow']

// "automate" gets the accent highlight — reinforces the product's core promise
const ACCENT = 'automate'

// ─── Variants ─────────────────────────────────────────────────────
// Container staggers children by 55 ms (within UX Pro Max 30–50 ms guideline)
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.055,
      delayChildren:   0.08,
    },
  },
}

// Each word: spring physics (stiffness 300 / damping 24 = snappy, natural)
// Only opacity + translateY → GPU-composited, zero layout reflow
const wordVariant = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type:      'spring' as const,
      stiffness: 300,
      damping:   24,
    },
  },
}

// Accent underline: scaleX 0→1 from left origin
// Uses transform only — no width animation (UX Pro Max: transform-performance)
const underlineVariant = {
  hidden: { scaleX: 0, opacity: 0 },
  show: {
    scaleX:  1,
    opacity: 1,
    transition: {
      delay:    WORDS.length * 0.055 + 0.15,   // starts after last word lands
      duration: 0.45,
      ease:     [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
}

// Blinking cursor: appears as last word lands, fades after ~1.4 s
const cursorVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: [0, 1, 1, 1, 0],
    transition: {
      delay:    WORDS.length * 0.055 - 0.05,
      duration: 1.4,
      times:    [0, 0.05, 0.5, 0.85, 1],
      ease:     'linear',
    },
  },
}

// ─── Component ────────────────────────────────────────────────────
export default function AnimatedTagline() {
  // Respects prefers-reduced-motion (UX Pro Max: reduced-motion)
  const reduced = useReducedMotion()

  if (reduced) {
    return (
      <p className="text-sm sm:text-base font-medium text-white/40 mb-4 tracking-wide">
        Let us automate your bookkeeping workflow
      </p>
    )
  }

  return (
    <div className="relative mb-4 inline-block">
      {/* Word row */}
      <motion.p
        className="text-sm sm:text-base font-medium text-white/40 tracking-wide
                   flex flex-wrap gap-x-[0.28em] justify-center items-baseline"
        variants={container}
        initial="hidden"
        animate="show"
        aria-label="Let us automate your bookkeeping workflow"
      >
        {WORDS.map((w, i) => (
          <motion.span
            key={i}
            variants={wordVariant}
            style={{ display: 'inline-block' }}
            className={
              w === ACCENT
                ? 'font-semibold text-[#4F8CFF]/75'
                : ''
            }
          >
            {w}
          </motion.span>
        ))}

        {/* Blinking cursor — appears alongside last word, then fades */}
        <motion.span
          variants={cursorVariant}
          aria-hidden="true"
          style={{ display: 'inline-block' }}
          className="font-light text-[#4F8CFF]/70 ml-0.5 select-none"
        >
          |
        </motion.span>
      </motion.p>

      {/* Accent underline — scaleX from left, GPU-composited */}
      <motion.span
        variants={underlineVariant}
        initial="hidden"
        animate="show"
        aria-hidden="true"
        style={{ transformOrigin: 'left' }}
        className="block h-px w-full bg-gradient-to-r from-[#4F8CFF]/60 via-[#4F8CFF]/30 to-transparent
                   rounded-full mt-1"
      />
    </div>
  )
}
