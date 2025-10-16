import { Metadata } from 'next'
import { ServicesPageContent } from '@/components/pages/ServicesPage'
import { CTASection } from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Comprehensive financial solutions including Finance Operations, Revenue Operations, Startup CFO Services, Legal Services, and Company Secretarial.',
  openGraph: {
    title: 'Services | HariKoa',
    description: 'Comprehensive financial solutions including Finance Operations, Revenue Operations, Startup CFO Services, Legal Services, and Company Secretarial.',
  },
}

export default function ServicesPage() {
  return (
    <>
      <ServicesPageContent />
      <CTASection />
    </>
  )
}
