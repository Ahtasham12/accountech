'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Services',   href: '/services'   },
  { label: 'Industries', href: '/industries' },
  { label: 'Pricing',    href: '/pricing'    },
  { label: 'About',      href: '/about'      },
  { label: 'For CPAs',   href: '/partners'   },
  { label: 'Blog',       href: '/blog'       },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => { setMobileOpen(false) }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0d1321]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">

        {/* ── Logo ─────────────────────────────────────────── */}
        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0" aria-label="Accounting Skip home">
          <Image
            src="/logo.jpg"
            alt="Accounting Skip logo"
            width={36}
            height={36}
            className="h-9 w-9 object-contain rounded-md flex-shrink-0"
            priority
          />
          <span className="text-xl font-bold">
            <span className="text-white">Accounting</span>
            <span className="text-[#4F6EF7]"> Skip</span>
          </span>
        </Link>

        {/* ── Desktop nav links ────────────────────────────── */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={[
                  'whitespace-nowrap text-[15px] font-semibold px-4 py-2 rounded-lg transition-all duration-200 tracking-wide',
                  'hover:text-white hover:bg-white/[0.08] hover:-translate-y-[2px] hover:shadow-[0_4px_12px_rgba(79,110,247,0.15)]',
                  isActive
                    ? 'text-white bg-white/10'
                    : 'text-gray-300',
                ].join(' ')}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* ── Right side ───────────────────────────────────── */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/contact"
            className="whitespace-nowrap text-[15px] font-semibold text-gray-300 tracking-wide px-4 py-2 rounded-lg hover:text-white hover:bg-white/[0.08] hover:-translate-y-[2px] hover:shadow-[0_4px_12px_rgba(79,110,247,0.15)] transition-all duration-200"
          >
            Contact
          </Link>
          <Link
            href="/contact"
            className="whitespace-nowrap inline-flex items-center gap-1.5 text-sm font-medium text-white bg-[#4F6EF7] hover:bg-[#5d7cf9] px-5 py-2 rounded-full hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(79,110,247,0.3)] transition-all duration-200"
          >
            Free Consultation
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </div>

        {/* ── Mobile hamburger ─────────────────────────────── */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/[0.08] transition-all duration-200"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          <AnimatePresence mode="wait" initial={false}>
            {mobileOpen ? (
              <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <X className="w-5 h-5" />
              </motion.span>
            ) : (
              <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <Menu className="w-5 h-5" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* ── Mobile menu ──────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
            className="lg:hidden overflow-hidden bg-[#0d1321]/98 backdrop-blur-xl border-t border-white/5"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.18 }}
                  >
                    <Link
                      href={link.href}
                      className={[
                        'flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200',
                        isActive
                          ? 'text-white bg-white/10'
                          : 'text-gray-400 hover:text-white hover:bg-white/[0.08]',
                      ].join(' ')}
                    >
                      {link.label}
                      {isActive && (
                        <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[#4F6EF7]/20 text-[#4F6EF7]">
                          Current
                        </span>
                      )}
                    </Link>
                  </motion.div>
                )
              })}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: navLinks.length * 0.04 + 0.06 }}
                className="pt-3 border-t border-white/5 space-y-2"
              >
                <Link href="/contact" className="block text-center text-sm font-medium text-gray-400 hover:text-white px-4 py-3 rounded-lg hover:bg-white/[0.08] transition-all duration-200">
                  Contact
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 text-sm font-semibold text-white bg-[#4F6EF7] hover:bg-[#5d7cf9] py-3 rounded-full transition-all duration-200"
                >
                  Schedule Free Consultation
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
