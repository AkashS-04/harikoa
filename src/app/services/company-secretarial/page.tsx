import { Metadata } from 'next'
import { ServicesHero } from '@/components/pages/ServicesHero'
import { CTA } from '@/components/sections/CTA'

export const metadata: Metadata = {
  title: 'Company Secretarial Services',
  description: 'Structure, compliance, and governance done right. We ensure your legal foundation remains clean, compliant, and due-diligence ready.',
}


export default function CompanySecretarialPage() {
  return (
    <>
      <ServicesHero />
      <CTA />
    </>
  )
}
