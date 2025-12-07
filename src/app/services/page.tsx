import { Metadata } from 'next'
import { Suspense } from 'react'
import { ServicesPageContent } from '@/components/pages/ServicesPage/ServicesPage'
import { CTASection } from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Comprehensive financial solutions including Finance Operations, Revenue Operations, Startup CFO Services, Legal Services, Company Secretarial, Financial Advisory Services, Taxation Services, Business Analytics, and Not for Profit Services.',
  keywords: [
    'finance operations services',
    'revenue operations consulting',
    'startup CFO services',
    'fractional CFO India',
    'legal services for startups',
    'company secretarial services',
    'ROC filing services',
    'financial advisory services',
    'fund raising advisory',
    'business valuation services',
    'due diligence services',
    'taxation services India',
    'GST filing services',
    'TDS compliance services',
    'income tax services',
    'international taxation',
    'business analytics services',
    'profitability analysis',
    'pricing analytics',
    'customer analytics',
    'treasury analytics',
    'not for profit services',
    'NGO accounting services',
    'trust registration services',
    'FCRA compliance',
    '12A 80G registration',
    'bookkeeping services',
    'payroll processing',
    'month end close',
    'audit coordination',
    'ESOP documentation',
    'shareholder agreements',
    'founders agreement',
    'sales compensation structuring',
    'pipeline management',
    'receivables management',
    'cash flow management',
    'financial modeling',
    'MIS reporting',
    'investor presentations',
  ],
  openGraph: {
    title: 'Services | Harikoa Consulting',
    description: 'Comprehensive financial solutions including Finance Operations, Revenue Operations, Startup CFO Services, Legal Services, Company Secretarial, Financial Advisory Services, Taxation Services, Business Analytics, and Not for Profit Services.',
  },
}

export default function ServicesPage() {
  return (
    <>
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
        <ServicesPageContent />
      </Suspense>
      <CTASection />
    </>
  )
}
