'use client'

import { motion, useReducedMotion } from 'framer-motion'

// ─── Data ─────────────────────────────────────────────────────────
const WORDS = ['We', 'are', 'Your', 'book', 'Keepers']

// "Keepers" gets the accent highlight
const ACCENT = 'Keepers'

// Total stagger duration before float begins
const STAGGER       = 0.06
const DELAY_FIRST   = 0.1
const FLOAT_DELAY   = DELAY_FIRST + WORDS.length * STAGGER + 0.6

// ─── Variants ─────────────────────────────────────────────────────
// Container staggers children
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: STAGGER,
      delayChildren:   DELAY_FIRST,
    },
  },
}

// Each word slides in from the RIGHT (x: 40 → 0) with spring physics
const wordVariant = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type:      'spring' as const,
      stiffness: 280,
      damping:   22,
    },
  },
}

// ─── Component ────────────────────────────────────────────────────
export default function AnimatedTagline() {
  const reduced = useReducedMotion()

  if (reduced) {
    return (
      <p className="text-xs sm:text-sm font-medium text-white/40 mb-4 tracking-wide">
        We are Your book Keepers
      </p>
    )
  }

  return (
    <div className="relative mb-4 inline-block">

      {/* Float wrapper — starts after slide-in completes, loops forever */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{
          delay:    FLOAT_DELAY,
          duration: 3,
          repeat:   Infinity,
          ease:     'easeInOut',
        }}
      >
        {/* Word row — each word slides in from right with stagger */}
        <motion.p
          className="text-xs sm:text-sm font-medium text-white/40 tracking-wide
                     flex flex-wrap gap-x-[0.28em] justify-center items-baseline"
          variants={container}
          initial="hidden"
          animate="show"
          aria-label="We are Your book Keepers"
        >
          {WORDS.map((w, i) => (
            <motion.span
              key={i}
              variants={wordVariant}
              style={{ display: 'inline-block' }}
              className={
                w === ACCENT
                  ? 'font-semibold text-[#4F8CFF]/80'
                  : ''
              }
            >
              {w}
            </motion.span>
          ))}
        </motion.p>
      </motion.div>

      {/* Accent underline — scaleX from left, appears after last word */}
      <motion.span
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{
          delay:    DELAY_FIRST + WORDS.length * STAGGER + 0.1,
          duration: 0.45,
          ease:     [0.22, 1, 0.36, 1] as [number, number, number, number],
        }}
        aria-hidden="true"
        style={{ transformOrigin: 'left' }}
        className="block h-px w-full bg-gradient-to-r from-[#4F8CFF]/60 via-[#4F8CFF]/30 to-transparent
                   rounded-full mt-1"
      />
    </div>
  )
}
