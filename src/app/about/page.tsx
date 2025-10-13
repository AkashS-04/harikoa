import { Metadata } from 'next'
import { AboutHero } from '@/components/pages/AboutHero'
import { Team } from '@/components/pages/Team'
import { Values } from '@/components/pages/Values'
import { History } from '@/components/pages/History'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about HariKoa\'s mission, vision, values, and the passionate team behind our innovative technology solutions.',
  openGraph: {
    title: 'About Us | HariKoa',
    description: 'Learn about HariKoa\'s mission, vision, values, and the passionate team behind our innovative technology solutions.',
  },
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <History />
      <Values />
      <Team />
    </>
  )
}
