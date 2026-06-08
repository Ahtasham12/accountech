'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log to your error tracking service here (e.g. Sentry)
    console.error('[Accounting Skip Error]', error)
  }, [error])

  return (
    <div
      className="min-h-dvh aurora-bg flex items-center justify-center px-4 py-32 relative overflow-hidden"
      role="main"
    >
      <div className="relative text-center max-w-lg mx-auto">
        {/* Icon */}
        <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-2xl bg-red-500/10 border border-red-500/20">
          <AlertTriangle className="w-9 h-9 text-red-400" aria-hidden="true" />
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Something went wrong
        </h1>
        <p className="text-white/50 mb-10 leading-relaxed">
          An unexpected error occurred. Our team has been notified. Please try again — if the issue persists, contact us directly.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={reset}
            className="btn-primary shadow-glow-blue"
          >
            <RefreshCw className="w-4 h-4" aria-hidden="true" />
            Try Again
          </button>
          <Link href="/" className="btn-ghost">
            <Home className="w-4 h-4" aria-hidden="true" />
            Go Home
          </Link>
        </div>

        <p className="mt-8 text-xs text-white/25">
          Still having trouble?{' '}
          <a href="mailto:team@accountingskip.com" className="text-accent/60 hover:text-accent transition-colors">
            team@accountingskip.com
          </a>
        </p>
      </div>
    </div>
  )
}
