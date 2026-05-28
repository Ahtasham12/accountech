'use client'

import Link from 'next/link'
import { Zap, Mail, Phone, MapPin, Twitter, Linkedin, Github, ArrowRight } from 'lucide-react'

const footerLinks = {
  Services: [
    { label: 'Monthly Bookkeeping', href: '/services#bookkeeping' },
    { label: 'Financial Reporting', href: '/services#reporting' },
    { label: 'Receipt Management', href: '/services#receipts' },
    { label: 'AP/AR Management', href: '/services#apar' },
    { label: 'E-commerce Accounting', href: '/services#ecommerce' },
    { label: 'Sales Tax', href: '/services#salestax' },
  ],
  Industries: [
    { label: 'E-commerce & Amazon', href: '/industries#ecommerce' },
    { label: 'Restaurants', href: '/industries#restaurants' },
    { label: 'Convenience Stores', href: '/industries#convenience' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'For CPA Firms', href: '/partners' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Security', href: '/security' },
  ],
}

export default function Footer() {
  return (
    <footer className="relative bg-navy border-t border-white/[0.06]" role="contentinfo">
      {/* Top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main grid */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-5" aria-label="AccounTech Home">
              <div className="flex items-center justify-center w-8 h-8 bg-accent rounded-lg shadow-glow-blue-sm">
                <Zap className="w-4 h-4 text-white" aria-hidden="true" />
              </div>
              <span className="font-bold text-xl text-white">
                Accoun<span className="text-gradient-blue">Tech</span>
              </span>
            </Link>

            <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-6">
              AI-powered bookkeeping for US small businesses. Enterprise accuracy at small business pricing.
            </p>

            <div className="space-y-3 text-sm text-white/40 mb-7">
              <a href="mailto:team@accountech.com" className="flex items-center gap-2.5 hover:text-accent transition-colors group">
                <Mail className="w-4 h-4 text-accent/70 group-hover:text-accent transition-colors flex-shrink-0" aria-hidden="true" />
                team@accountech.com
              </a>
              <a href="tel:+13055550123" className="flex items-center gap-2.5 hover:text-accent transition-colors group">
                <Phone className="w-4 h-4 text-accent/70 group-hover:text-accent transition-colors flex-shrink-0" aria-hidden="true" />
                (305) 555-0123
              </a>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-accent/70 flex-shrink-0" aria-hidden="true" />
                Florida LLC · US-Based
              </div>
            </div>

            <div className="flex items-center gap-2">
              {[
                { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
                { icon: Twitter, label: 'Twitter', href: 'https://twitter.com' },
                { icon: Github, label: 'GitHub', href: 'https://github.com' },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 glass rounded-lg hover:border-accent/30 hover:bg-accent/10 transition-all duration-200"
                  aria-label={`AccounTech on ${label}`}
                >
                  <Icon className="w-4 h-4 text-white/50 hover:text-accent" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="lg:col-span-1">
              <h3 className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-4">
                {category}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="py-8 border-t border-white/[0.06]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-10">
            <div className="flex-1">
              <h3 className="text-base font-semibold text-white mb-1">Stay up to date</h3>
              <p className="text-sm text-white/40">Tax updates, bookkeeping tips, and AI in accounting — monthly.</p>
            </div>
            <form className="flex w-full sm:w-auto gap-2" onSubmit={(e) => e.preventDefault()} aria-label="Newsletter signup">
              <input
                type="email"
                placeholder="your@email.com"
                required
                className="flex-1 sm:w-60 px-4 py-2.5 glass rounded-xl text-sm text-white placeholder-white/30 focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/40 transition-all"
                aria-label="Email address"
              />
              <button type="submit" className="btn-primary text-sm !px-4 !py-2.5 whitespace-nowrap">
                Subscribe <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} AccounTech LLC. All rights reserved. Florida LLC.
          </p>
          <div className="flex items-center gap-3 text-xs text-white/25">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-emerald rounded-full animate-pulse-glow" aria-hidden="true" />
              QBO ProAdvisor Certified
            </span>
            <span>·</span>
            <span>SOC 2 Compliant</span>
            <span>·</span>
            <span>AI-Powered</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
