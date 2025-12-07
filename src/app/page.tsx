import { Welcome } from '@/components/sections/Welcome'
import { AboutUs } from '@/components/sections/AboutUs'
import { ServicesOverview } from '@/components/sections/ServicesOverview'
import { WorkWithUs } from '@/components/sections/WorkWithUs'
import { CTASection } from '@/components/sections/CTASection'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Bringing structure to your numbers, strength to your strategy, and peace of mind to your journey. Comprehensive financial services for growing businesses.',
}

export default function HomePage() {
  return (
    <>
      <Welcome />
      <AboutUs />
      <ServicesOverview />
      <WorkWithUs />
      <CTASection />
    </>
  )
}
