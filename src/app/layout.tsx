import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'HariKoa - Financial Solutions & Business Growth',
    template: '%s | HariKoa'
  },
  description: 'Bringing structure to your numbers, strength to your strategy, and peace of mind to your journey. Comprehensive financial services for growing businesses.',
  keywords: [
    'financial services',
    'finance operations',
    'revenue operations',
    'startup CFO',
    'legal services',
    'company secretarial',
    'business growth',
    'financial strategy',
    'compliance',
    'accounting'
  ],
  authors: [{ name: 'HariKoa' }],
  creator: 'HariKoa',
  publisher: 'HariKoa',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://harikoa.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://harikoa.com',
    title: 'HariKoa - Innovative Technology Solutions',
    description: 'Leading technology consulting firm specializing in digital transformation, cloud solutions, and innovative software development.',
    siteName: 'HariKoa',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'HariKoa - Innovative Technology Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HariKoa - Innovative Technology Solutions',
    description: 'Leading technology consulting firm specializing in digital transformation, cloud solutions, and innovative software development.',
    images: ['/og-image.jpg'],
    creator: '@harikoa',
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
