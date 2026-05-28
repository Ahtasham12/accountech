'use client'

import { Share2 } from 'lucide-react'

interface ShareButtonProps {
  title: string
}

export default function ShareButton({ title }: ShareButtonProps) {
  const handleShare = () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      navigator.share({ title, url: window.location.href })
    }
  }

  return (
    <button
      onClick={handleShare}
      className="inline-flex items-center gap-2 text-sm font-medium text-text-gray hover:text-primary transition-colors"
    >
      <Share2 className="w-4 h-4" aria-hidden="true" />
      Share
    </button>
  )
}
