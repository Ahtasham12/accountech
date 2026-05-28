import type { Metadata } from 'next'
import ServicesPageContent from '@/components/ServicesPageContent'

export const metadata: Metadata = {
  title: 'Services — AI-Powered Bookkeeping & Accounting Services',
  description:
    'AccounTech AI engine categorizes transactions in real-time, processes receipts instantly, and delivers month-end close in 48 hours. Full-service bookkeeping starting at $349/month.',
  openGraph: {
    title: 'AccounTech Services — AI-Powered Bookkeeping',
    description: 'Real-time AI transaction categorization, receipt capture, financial reporting, and month-end close in 48 hours.',
  },
}

export default function ServicesPage() {
  return <ServicesPageContent />
}
