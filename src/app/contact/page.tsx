import { Metadata } from 'next'
import { ContactHero } from '@/components/pages/ContactHero'
import { ContactForm } from '@/components/pages/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Harikoa Consulting for your financial services needs. Contact us at hello@harikoa.in or call us for Finance Operations, Revenue Operations, Startup CFO Services, Legal Services, and more.',
  keywords: [
    'contact Harikoa Consulting',
    'financial consulting Mumbai',
    'accounting services Bangalore',
    'Harikoa contact number',
    'Harikoa email',
    'financial services inquiry',
    'consultation booking',
    'Mumbai financial consultants',
    'Bangalore accounting firms',
    'Thane financial services',
    'ITPL Bangalore consulting',
    'financial advisory contact',
    'startup consulting contact',
    'finance operations inquiry',
    'revenue operations consultation',
    'CFO services contact',
    'legal services inquiry',
    'taxation services contact',
    'business analytics consultation',
  ],
  openGraph: {
    title: 'Contact Us | Harikoa Consulting',
    description: 'Get in touch with Harikoa Consulting for your financial services needs. Contact us at hello@harikoa.in or call us for Finance Operations, Revenue Operations, Startup CFO Services, Legal Services, and more.',
  },
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
    </>
  )
}
