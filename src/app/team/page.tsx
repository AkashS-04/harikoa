import { Metadata } from 'next'
import { TeamPageContent } from '@/components/pages/TeamPage/TeamPage'

export const metadata: Metadata = {
  title: 'Team',
  description: 'Meet our experienced team of Partners & Advisors at Harikoa Consulting. Our team brings together over 70 years of collective experience across Finance, Technology, Company Secretarial, and Revenue Operations, with backgrounds at industry leaders like Infosys, Deloitte, Tata, and the Hinduja Group.',
  keywords: [
    'Harikoa team',
    'financial experts Mumbai',
    'Chartered Accountants',
    'CFA professionals',
    'financial advisors',
    'company secretarial experts',
    'revenue operations specialists',
    'Infosys alumni',
    'Deloitte professionals',
    'Tata Group experience',
    'Hinduja Group consultants',
    'FCA professionals',
    'MBA finance experts',
    'registered valuers',
    'CISA certified',
    'financial consulting team',
    'startup advisors',
    'investment banking experience',
    'corporate finance experts',
    'taxation specialists',
    'audit professionals',
    'compliance experts',
    'financial strategy advisors',
  ],
  openGraph: {
    title: 'Team | Harikoa Consulting',
    description: 'Meet our experienced team of Partners & Advisors at Harikoa Consulting. Our team brings together over 70 years of collective experience across Finance, Technology, Company Secretarial, and Revenue Operations.',
  },
}

export default function TeamPage() {
  return <TeamPageContent />
}

