'use client'

export default function NewsletterForm() {
  return (
    <form
      className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
      onSubmit={(e) => e.preventDefault()}
      aria-label="Newsletter signup"
    >
      <input
        type="email"
        placeholder="your@email.com"
        required
        className="flex-1 px-4 py-3 glass rounded-xl text-white text-sm placeholder-white/30
          focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all duration-200
          border border-white/[0.08] hover:border-white/[0.15]"
        aria-label="Email address"
      />
      <button type="submit" className="btn-primary whitespace-nowrap">
        Subscribe
      </button>
    </form>
  )
}
