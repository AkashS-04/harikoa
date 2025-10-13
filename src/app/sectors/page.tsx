import { Metadata } from 'next'
import { SectorsHero } from '@/components/pages/SectorsHero'
import { SectorsGrid } from '@/components/pages/SectorsGrid'
import { CTA } from '@/components/sections/CTA'

export const metadata: Metadata = {
  title: 'Industries We Serve',
  description: 'Discover how HariKoa delivers technology solutions across healthcare, finance, manufacturing, retail, and education sectors.',
  openGraph: {
    title: 'Industries We Serve | HariKoa',
    description: 'Discover how HariKoa delivers technology solutions across healthcare, finance, manufacturing, retail, and education sectors.',
  },
}

export default function SectorsPage() {
  return (
    <>
      <SectorsHero />
      <SectorsGrid />
      <CTA />
    </>
  )
}
