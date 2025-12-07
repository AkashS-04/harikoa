export function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Harikoa Consulting',
    url: 'https://harikoa.in',
    logo: 'https://harikoa.in/images/logo.jpg',
    description: 'At Harikoa, we bring structure to your numbers, strength to your strategy, and peace of mind to your journey—so you can build a business that\'s both fulfilling and joyful. Comprehensive financial services for growing businesses.',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'hello@harikoa.in',
      telephone: '+91-88845-00434',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Mumbai',
      addressRegion: 'Maharashtra',
      postalCode: '400607',
      addressCountry: 'IN',
    },
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Harikoa Consulting',
    url: 'https://harikoa.in',
    description: 'Comprehensive financial services for growing businesses including Finance Operations, Revenue Operations, Startup CFO Services, Legal Services, Company Secretarial, Financial Advisory Services, Taxation Services, Business Analytics, and Not for Profit Services.',
  }

  const financialServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: 'Harikoa Consulting',
    provider: {
      '@type': 'Organization',
      name: 'Harikoa Consulting',
    },
    description: 'Comprehensive financial solutions including Finance Operations, Revenue Operations, Startup CFO Services, Legal Services, Company Secretarial, Financial Advisory Services, Taxation Services, Business Analytics, and Not for Profit Services.',
    serviceType: [
      'Finance Operations',
      'Revenue Operations',
      'Startup CFO Services',
      'Legal Services',
      'Company Secretarial',
      'Financial Advisory Services',
      'Taxation Services',
      'Business Analytics',
      'Not for Profit Services',
    ],
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(financialServiceSchema) }}
      />
    </>
  )
}

