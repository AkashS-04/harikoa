import { Metadata } from 'next'
import { ServicesHero } from '@/components/pages/ServicesHero'
import { ServicesGrid } from '@/components/pages/ServicesGrid'
import { Process } from '@/components/pages/Process'
import { CTA } from '@/components/sections/CTA'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Comprehensive technology solutions including cloud services, AI & ML, data analytics, cybersecurity, and custom development.',
  openGraph: {
    title: 'Services | HariKoa',
    description: 'Comprehensive technology solutions including cloud services, AI & ML, data analytics, cybersecurity, and custom development.',
  },
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <Process />
      <CTA />
    </>
  )
}
