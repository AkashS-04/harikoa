import { Metadata } from 'next'
import { ServicesHero } from '@/components/pages/ServicesHero'
import { CTA } from '@/components/sections/CTA'

export const metadata: Metadata = {
  title: 'Startup CFO Services',
  description: 'Strategic finance leadership, investor-ready from day one. Your strategic finance partner for growth.',
}


export default function StartupCFOPage() {
  return (
    <>
      <ServicesHero />
      <CTA />
    </>
  )
}
