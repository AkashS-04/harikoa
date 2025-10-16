import { Metadata } from 'next'
import { ServicesHero } from '@/components/pages/ServicesHero'
import { CTA } from '@/components/sections/CTA'

export const metadata: Metadata = {
  title: 'Revenue Operations',
  description: 'Bringing visibility, rhythm, and results to your sales process. We redefine how your sales team operates.',
}


export default function RevenueOperationsPage() {
  return (
    <>
      <ServicesHero />
      <CTA />
    </>
  )
}
