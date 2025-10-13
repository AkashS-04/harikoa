import { Metadata } from 'next'
import { CareersHero } from '@/components/pages/CareersHero'
import { JobListings } from '@/components/pages/JobListings'
import { Culture } from '@/components/pages/Culture'
import { Benefits } from '@/components/pages/Benefits'

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join the HariKoa team and help shape the future of technology. Explore open positions and discover our company culture.',
  openGraph: {
    title: 'Careers | HariKoa',
    description: 'Join the HariKoa team and help shape the future of technology. Explore open positions and discover our company culture.',
  },
}

export default function CareersPage() {
  return (
    <>
      <CareersHero />
      <Culture />
      <Benefits />
      <JobListings />
    </>
  )
}
