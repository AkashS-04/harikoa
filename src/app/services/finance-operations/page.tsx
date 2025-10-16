import { Metadata } from 'next'
import { ServicesHero } from '@/components/pages/ServicesHero'
import { CTA } from '@/components/sections/CTA'

export const metadata: Metadata = {
  title: 'Finance Operations',
  description: 'Making your numbers make sense, every single time. We bring structure, discipline, and accuracy to your financial backbone.',
}


export default function FinanceOperationsPage() {
  return (
    <>
      <ServicesHero />
      <CTA />
    </>
  )
}
