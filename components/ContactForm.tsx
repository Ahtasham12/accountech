'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

const serviceOptions = [
  'Monthly Bookkeeping',
  'Financial Reporting',
  'Receipt Management',
  'AP/AR Management',
  'E-commerce Accounting (Amazon/Shopify)',
  'Sales Tax Preparation',
  'Payroll Support',
  'CPA Partner Program',
  'Not sure — need guidance',
]

interface FormState {
  name: string; email: string; company: string
  phone: string; service: string; message: string
}

type Status = 'idle' | 'submitting' | 'success' | 'error'

const inputClass = `w-full px-4 py-3.5 glass rounded-xl text-white text-sm placeholder-white/30
  focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all duration-200
  border border-white/[0.08] hover:border-white/[0.15]`

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({ name:'',email:'',company:'',phone:'',service:'',message:'' })
  const [status, setStatus] = useState<Status>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const res = await fetch('/api/contact', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error ?? 'Unknown error')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center text-center py-16"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.1, type: 'spring', stiffness: 300 }}
        className="w-16 h-16 bg-emerald/20 border border-emerald/30 rounded-full flex items-center justify-center mb-5"
      >
        <CheckCircle className="w-8 h-8 text-emerald" />
      </motion.div>
      <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
      <p className="text-white/50 max-w-xs mb-6">We'll get back to you within 1 business day. Look out for an email from team@accountingskip.com.</p>
      <button
        onClick={() => { setForm({ name:'',email:'',company:'',phone:'',service:'',message:'' }); setStatus('idle') }}
        className="btn-ghost text-sm"
      >
        Send another message
      </button>
    </motion.div>
  )

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Contact form" className="space-y-4">
      {status === 'error' && (
        <div className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          Something went wrong. Please try again or email us directly.
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-1.5">
            Full Name <span className="text-accent" aria-hidden="true">*</span>
          </label>
          <input id="name" name="name" type="text" required value={form.name}
            onChange={handleChange} placeholder="Jane Smith" className={inputClass} autoComplete="name" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-1.5">
            Email <span className="text-accent" aria-hidden="true">*</span>
          </label>
          <input id="email" name="email" type="email" required value={form.email}
            onChange={handleChange} placeholder="jane@company.com" className={inputClass} autoComplete="email" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-white/70 mb-1.5">Company</label>
          <input id="company" name="company" type="text" value={form.company}
            onChange={handleChange} placeholder="Acme LLC" className={inputClass} autoComplete="organization" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-white/70 mb-1.5">Phone</label>
          <input id="phone" name="phone" type="tel" value={form.phone}
            onChange={handleChange} placeholder="(305) 555-0100" className={inputClass} autoComplete="tel" />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-white/70 mb-1.5">
          Service Interest <span className="text-accent" aria-hidden="true">*</span>
        </label>
        <select id="service" name="service" required value={form.service}
          onChange={handleChange} className={`${inputClass} cursor-pointer`}>
          <option value="">Select a service...</option>
          {serviceOptions.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-1.5">How can we help?</label>
        <textarea id="message" name="message" rows={4} value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your business, current setup, and what you need..."
          className={`${inputClass} resize-none`} />
      </div>

      <button type="submit" disabled={status === 'submitting'}
        className="w-full btn-primary justify-center text-base !py-4 disabled:opacity-60 disabled:cursor-not-allowed">
        {status === 'submitting'
          ? <><Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" /> Sending...</>
          : <><Send className="w-4 h-4" aria-hidden="true" /> Send Message</>}
      </button>

      <p className="text-xs text-white/30 text-center">
        By submitting, you agree to our <a href="/privacy" className="text-accent/70 hover:text-accent">Privacy Policy</a>. We never share your data.
      </p>
    </form>
  )
}
