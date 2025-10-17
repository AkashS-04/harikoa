import { Metadata } from 'next'
import { Suspense } from 'react'
import { ServicesPageContent } from '@/components/pages/ServicesPage'
import { CTASection } from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Comprehensive financial solutions including Finance Operations, Revenue Operations, Startup CFO Services, Legal Services, and Company Secretarial.',
  openGraph: {
    title: 'Services | Harikoa',
    description: 'Comprehensive financial solutions including Finance Operations, Revenue Operations, Startup CFO Services, Legal Services, and Company Secretarial.',
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
