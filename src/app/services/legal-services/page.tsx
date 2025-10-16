import { Metadata } from 'next'
import { ServicesHero } from '@/components/pages/ServicesHero'
import { CTA } from '@/components/sections/CTA'

export const metadata: Metadata = {
  title: 'Legal Services',
  description: 'Practical, startup-focused legal support without jargon. Practical, business-aligned legal solutions for founders and startups.',
}


export default function LegalServicesPage() {
  return (
    <>
      <ServicesHero />
      <CTA />
    </>
  )
}
