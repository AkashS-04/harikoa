import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join Harikoa Consulting - a team with over 70 years of combined experience in financial services. We offer exciting opportunities to join a dynamic team helping businesses build fulfilling and joyful operations through Finance Operations, Revenue Operations, Startup CFO Services, Legal Services, and more.',
  keywords: [
    'careers at Harikoa',
    'financial services jobs',
    'accounting jobs Mumbai',
    'finance jobs Bangalore',
    'CFO jobs',
    'financial analyst jobs',
    'accountant jobs',
    'tax consultant jobs',
    'company secretary jobs',
    'financial advisory jobs',
    'startup finance jobs',
    'revenue operations jobs',
    'business analytics jobs',
    'consulting jobs India',
    'finance operations careers',
    'audit jobs',
    'compliance jobs',
    'GST consultant jobs',
    'TDS specialist jobs',
    'financial modeling jobs',
    'valuation analyst jobs',
    'due diligence jobs',
    'MIS analyst jobs',
    'financial reporting jobs',
    'work at Harikoa',
    'join Harikoa team',
  ],
  openGraph: {
    title: 'Careers | Harikoa Consulting',
    description: 'Join Harikoa Consulting - a team with over 70 years of combined experience in financial services. We offer exciting opportunities to join a dynamic team helping businesses build fulfilling and joyful operations.',
  },
}

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

