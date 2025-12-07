import { Welcome } from '@/components/sections/Welcome'
import { AboutUs } from '@/components/sections/AboutUs'
import { ServicesOverview } from '@/components/sections/ServicesOverview'
import { WorkWithUs } from '@/components/sections/WorkWithUs'
import { CTASection } from '@/components/sections/CTASection'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
  description: 'At Harikoa, we bring structure to your numbers, strength to your strategy, and peace of mind to your journey—so you can build a business that\'s both fulfilling and joyful. Comprehensive financial services for growing businesses.',
  keywords: [
    'Harikoa Consulting',
    'financial consulting India',
    'finance operations Mumbai',
    'startup CFO services',
    'revenue operations',
    'financial advisory',
    'business consulting Mumbai',
    'accounting services Bangalore',
    'GST filing services',
    'TDS compliance',
    'company secretarial services',
    'legal services for startups',
    'fund raising advisory',
    'valuation services',
    'due diligence services',
    'business analytics',
    'taxation services India',
    'not for profit consulting',
    'financial strategy consulting',
    'Mumbai financial consultants',
    'Bangalore accounting firms',
    'startup financial services',
  ],
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
