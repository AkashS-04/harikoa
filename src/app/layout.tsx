import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Suspense } from 'react'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { StructuredData } from '@/components/seo/StructuredData'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Harikoa Consulting - Building a business that is fulfilling and joyful',
    template: '%s | Harikoa Consulting'
  },
  description: 'At Harikoa, we bring structure to your numbers, strength to your strategy, and peace of mind to your journey—so you can build a business that\'s both fulfilling and joyful. Comprehensive financial services for growing businesses.',
  keywords: [
    'Harikoa Consulting',
    'financial services',
    'finance operations',
    'revenue operations',
    'startup CFO',
    'fractional CFO',
    'legal services',
    'company secretarial',
    'financial advisory',
    'taxation services',
    'business analytics',
    'not for profit services',
    'NGO accounting',
    'business growth',
    'financial strategy',
    'compliance',
    'accounting',
    'GST filing',
    'TDS compliance',
    'fund raising',
    'valuation services',
    'due diligence',
    'Mumbai financial consultants',
    'Bangalore accounting firms',
    'India financial services',
    'startup financial services',
    'bookkeeping services',
    'payroll processing',
    'audit services',
    'ROC filing',
    'ESOP documentation',
    'shareholder agreements',
    'income tax services',
    'international taxation',
    'business consulting',
    'financial consulting',
  ],
  authors: [{ name: 'Harikoa Consulting' }],
  creator: 'Harikoa Consulting',
  publisher: 'Harikoa Consulting',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://harikoa.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://harikoa.in',
    title: 'Harikoa Consulting - Building a business that is fulfilling and joyful',
    description: 'At Harikoa, we bring structure to your numbers, strength to your strategy, and peace of mind to your journey—so you can build a business that\'s both fulfilling and joyful. Comprehensive financial services for growing businesses.',
    siteName: 'Harikoa Consulting',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // verification: {
  //   google: 'your-google-verification-code', // Add your Google Search Console verification code here
  // },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        <StructuredData />
        <div className="flex min-h-screen flex-col">
          <Suspense fallback={<div className="h-16 lg:h-20" />}>
            <Header />
          </Suspense>
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
