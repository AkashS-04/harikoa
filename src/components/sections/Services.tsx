'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { 
  Cloud, 
  Brain, 
  Database, 
  Shield, 
  Smartphone, 
  ArrowRight,
  Zap
} from 'lucide-react'

const services = [
  {
    icon: Database,
    title: 'Finance Operations',
    description: 'Making your numbers make sense, every single time.',
    features: ['Accounting Setup, Bookkeeping & Reconciliation', 'Payroll Structuring and Execution', 'GST, TDS, PF/ESIC Filing and Compliance', 'Month-end Close, MIS & Audit Coordination'],
    href: '/services/finance-operations',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Brain,
    title: 'Revenue Operations',
    description: 'Bringing visibility, rhythm, and results to your sales process.',
    features: ['Sales Compensation & Incentive Policy Design', 'Performance Analytics & Forecasting', 'Pipeline Management, Billing, and Collections', 'Pricing and Profitability Optimization'],
    href: '/services/revenue-operations',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Shield,
    title: 'Startup CFO Services',
    description: 'Strategic finance leadership, investor-ready from day one.',
    features: ['Accounting Setup and Compliance Hygiene', 'Cash Flow & Working Capital Management', 'Budgeting, Forecasting, and Financial Modeling', 'Due Diligence & Data Room Management', 'Governance Frameworks & KPI Dashboards'],
    href: '/services/startup-cfo',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    icon: Smartphone,
    title: 'Legal Services',
    description: 'Practical, startup-focused legal support without jargon.',
    features: ['Founders\' Agreements & Shareholder Structures', 'ESOP Design, Exit Clauses, and Rights Management', 'Vendor, Client & Service Contracts', 'Employment Agreements, NDAs, and Risk Allocation'],
    href: '/services/legal-services',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Zap,
    title: 'Company Secretarial Services',
    description: 'Structure, compliance, and governance done right.',
    features: ['Incorporation (Company, LLP, Partnership)', 'ROC Filings, Board Resolutions & Event-Based Compliances', 'Governance Frameworks under Companies Act, 2013'],
    href: '/services/company-secretarial',
    color: 'from-yellow-500 to-orange-500'
  }
]

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Our <span className="text-gradient">Core Services</span>
          </h2>
          <p className="text-xl text-secondary-600 text-balance">
            Comprehensive financial solutions designed to bring structure to your numbers, 
            strength to your strategy, and peace of mind to your journey.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Link href={service.href} className="block">
                <div className="card-hover p-8 h-full">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-semibold text-secondary-900 mb-4 group-hover:text-primary-600 transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-secondary-600 mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-secondary-500">
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="flex items-center text-primary-600 font-medium group-hover:text-primary-700 transition-colors duration-200">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
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
