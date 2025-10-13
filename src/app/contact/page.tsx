import { Metadata } from 'next'
import { ContactHero } from '@/components/pages/ContactHero'
import { ContactForm } from '@/components/pages/ContactForm'
import { ContactInfo } from '@/components/pages/ContactInfo'
import { Map } from '@/components/pages/Map'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with HariKoa for your technology consulting needs. We\'re here to help transform your business with innovative solutions.',
  openGraph: {
    title: 'Contact Us | HariKoa',
    description: 'Get in touch with HariKoa for your technology consulting needs. We\'re here to help transform your business with innovative solutions.',
  },
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <Map />
    </>
  )
}
