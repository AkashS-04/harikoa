'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Database, Brain, Shield, Smartphone, Zap, TrendingUp, FileText, BarChart, Heart } from 'lucide-react'

const services = [
  {
    icon: Database,
    title: 'Finance Operations',
    description: 'Making your numbers make sense, every single time.',
    href: '/services?service=finance-operations',
    color: 'from-primary-950 to-primary-800'
  },
  {
    icon: Brain,
    title: 'Revenue Operations',
    description: 'Bringing visibility, rhythm, and results to your sales process.',
    href: '/services?service=revenue-operations',
    color: 'from-primary-800 to-accent-950'
  },
  {
    icon: Shield,
    title: 'Startup CFO Services',
    description: 'Strategic finance leadership, investor-ready from day one.',
    href: '/services?service=startup-cfo',
    color: 'from-accent-950 to-accent-800'
  },
  {
    icon: Smartphone,
    title: 'Legal Services',
    description: 'Practical, startup-focused legal support without jargon.',
    href: '/services?service=legal-services',
    color: 'from-accent-950 to-accent-800'
  },
  {
    icon: Zap,
    title: 'Company Secretarial',
    description: 'Structure, compliance, and governance done right.',
    href: '/services?service=company-secretarial',
    color: 'from-primary-700 to-accent-950'
  },
  {
    icon: TrendingUp,
    title: 'Financial Advisory Services',
    description: 'Fund Raising, Valuation and Due Diligence',
    href: '/services?service=financial-advisory',
    color: 'from-primary-950 to-primary-700'
  },
  {
    icon: FileText,
    title: 'Taxation Services',
    description: 'Income Tax, GST and International Taxation',
    href: '/services?service=taxation-services',
    color: 'from-accent-950 to-accent-700'
  },
  {
    icon: BarChart,
    title: 'Business Analytics',
    description: 'Bringing clarity to your numbers',
    href: '/services?service=business-analytics',
    color: 'from-primary-800 to-accent-800'
  },
  {
    icon: Heart,
    title: 'Not for Profit Services',
    description: 'Bringing Trust to the impact created.',
    href: '/services?service=not-for-profit',
    color: 'from-accent-800 to-primary-800'
  }
]

export function ServicesOverview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services-section" ref={ref} className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 font-montserrat">
            <span className="text-primary-950">Our Core </span>
            <span className="bg-gradient-to-r from-primary-950 via-accent-950 to-primary-950 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto font-roboto">
            Comprehensive financial solutions designed to bring structure to your numbers, 
            strength to your strategy, and peace of mind to your journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group"
            >
              <Link href={service.href} className="block h-full">
                <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 border border-primary-100 hover:border-primary-200 h-full flex flex-col min-h-[280px]">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors duration-300 flex-shrink-0">
                    {service.title}
                  </h3>
                  <p className="text-secondary-600 mb-4 flex-grow min-h-[48px]">
                    {service.description}
                  </p>
                  <div className="flex items-center text-primary-600 font-semibold group-hover:translate-x-2 transition-transform duration-300 flex-shrink-0 mt-auto">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
