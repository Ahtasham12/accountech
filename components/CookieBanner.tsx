'use client'

import { useState, useEffect } from 'react'
import { X, Cookie } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem('cookiesAccepted')
    if (!accepted) {
      const timer = setTimeout(() => setVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('cookiesAccepted', 'true')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('cookiesAccepted', 'false')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-sm z-50 glass-card rounded-2xl p-5 shadow-2xl"
          role="dialog"
          aria-label="Cookie consent"
          aria-live="polite"
        >
          <div className="flex items-start gap-3">
            <Cookie className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-white mb-1">We use cookies</p>
              <p className="text-xs text-white/50 leading-relaxed">
                We use cookies to improve your experience and analyze site traffic. See our{' '}
                <a href="/privacy" className="text-accent hover:underline">
                  Privacy Policy
                </a>
                .
              </p>
              <div className="flex gap-2 mt-3">
                <button
                  onClick={accept}
                  className="flex-1 btn-primary text-xs !px-3 !py-2 justify-center"
                >
                  Accept All
                </button>
                <button
                  onClick={decline}
                  className="flex-1 text-xs px-3 py-2 glass rounded-lg hover:border-white/20 transition-colors font-medium text-white/60 hover:text-white"
                >
                  Decline
                </button>
              </div>
            </div>
            <button
              onClick={decline}
              className="flex-shrink-0 text-white/30 hover:text-white transition-colors"
              aria-label="Dismiss cookie banner"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
