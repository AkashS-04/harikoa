import { Metadata } from 'next'
import { TeamPageContent } from '@/components/pages/TeamPage/TeamPage'

export const metadata: Metadata = {
  title: 'Team',
  description: 'Meet our experienced team of financial experts and advisors.',
  openGraph: {
    title: 'Team | Harikoa',
    description: 'Meet our experienced team of financial experts and advisors.',
  },
}

export default function TeamPage() {
  return <TeamPageContent />
}

