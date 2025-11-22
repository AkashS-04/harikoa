import { Metadata } from 'next'
import { ContactHero } from '@/components/pages/ContactHero'
import { ContactForm } from '@/components/pages/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Harikoa for your technology consulting needs. We\'re here to help transform your business with innovative solutions.',
  openGraph: {
    title: 'Contact Us | Harikoa',
    description: 'Get in touch with Harikoa for your technology consulting needs. We\'re here to help transform your business with innovative solutions.',
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
