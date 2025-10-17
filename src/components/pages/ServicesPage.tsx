'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Calculator, 
  TrendingUp, 
  Users, 
  Scale, 
  FileText,
  ArrowRight
} from 'lucide-react'

const services = [
  {
    id: 'finance-operations',
    title: 'Finance Operations',
    tagline: 'Reliable, Compliant, Scalable',
    description: 'Robust finance operations are critical for scale and investor confidence. We bring structure, discipline, and control to your day-to-day finance function—so you can make decisions backed by accurate data, manage cash effectively, and stay compliant without surprises.',
    icon: Calculator,
    features: [
      'Setup and Management',
      'Book keeping and Reconciliations',
      'Month end close and reporting',
      'Salary structuring for optimal tax savings within the legal framework',
      'Process and run payroll',
      'Timely filing of GST, TDS, PF/ESIC, and other statutory returns',
      'Compliance calendar management',
      'Audit coordination and documentation support'
    ]
  },
  {
    id: 'revenue-operations',
    title: 'Revenue Operations',
    tagline: 'Structure, Strategy, Success',
    description: 'A strong sales engine powered by a stronger Sales Operations is the foundation of a scalable business. We help redefine sales operations by optimizing team performance, develop pricing strategies, and integrating technology. This enhances revenue predictability and drives efficiency thereby profitability and gives runway visibility and improvement.',
    icon: TrendingUp,
    features: [
      'Sales Compensation Structuring',
      'Incentive Policy Development',
      'Performance Tracking & Analytics',
      'Pipeline Management',
      'Booking, Billing & Collection',
      'Receivables Management',
      'Sales Forecasting & Monitoring',
      'Strategic Pricing',
      'Partner / Distributor Pricing',
      'Profitability Tracking'
    ]
  },
  {
    id: 'startup-cfo',
    title: 'Startup CFO Services',
    tagline: 'Clarity, Integrity, Investor-ready',
    description: 'Startups thrive on speed—but sustainable growth demands financial clarity. With deep experience supporting founders across sectors, we step in as your strategic finance partner. From setting up systems and managing cash flow to preparing for investor conversations, our Startup CFO services enable confident, data-driven decisions from day one.',
    icon: Users,
    features: [
      'Finance Ops: Ownership of all day-to-day finance tasks',
      'Accounting setup, policies, and compliance hygiene',
      'Cash flow, burn rate, and working capital management',
      'Scalable systems: Invoicing, payroll & automation tools',
      'Budgeting, forecasting & financial modeling',
      'MIS packs, board decks & investor presentations',
      'Due diligence preparation and data room management',
      'Support in fundraising (equity/debt) and valuations',
      'Unit economics, CAC/LTV, pricing and margin analysis',
      'KPI dashboards aligned to traction and goals',
      'Internal controls & governance frameworks',
      'GST, TDS, ROC filings, and Companies Act compliance',
      'Audit coordination & risk review',
      'Policy frameworks for spending, approvals, and reporting'
    ]
  },
  {
    id: 'legal-services',
    title: 'Legal Services',
    tagline: 'Startup-Focused. Risk-Aware. Execution-Ready.',
    description: 'We support early-stage and scaling startups with practical legal solutions that align with business goals, manage risk, and ensure investor and regulatory confidence. From founder agreements to funding rounds, we bring structure where it matters most.',
    icon: Scale,
    features: [
      'Founders agreement and equity structuring',
      'Shareholder agreements (SHA)',
      'ESOP documentation',
      'Exit terms, vesting clauses, and rights management',
      'Drafting and reviewing vendor, client contracts',
      'Employment, consulting, and NDAs tailored for startups',
      'Risk allocation and enforceability guidance',
      'Contracts & Commercial Agreements',
    ]
  },
  { 
    id: 'company-secretarial',
    title: 'Company Secretarial',
    tagline: 'Compliant. Structured. Investor-Ready.',
    description: 'Strong governance starts with clean secretarial practices. We help you from structuring your business entity, incorporation of your Company and ensure you stay fully compliant with Companies Act, 2013. From routine filings to board governance and fundraising compliance, we ensure your legal backbone is always in place and due diligence-ready.',
    icon: FileText,
    features: [
      'Advise on the appropriate legal structure',
      'Incorporation of Company / LLP / Partnership',
      'Post incorporation compliance',
      'ROC filings, board resolutions, and secretarial support',
      'Compliance under the Companies Act, 2013',
      'Guidance on board composition, governance frameworks',
      'Event based compliances'
    ]
  }
]

export function ServicesPageContent() {
  const [activeService, setActiveService] = useState(services[0])
  const router = useRouter()
  const searchParams = useSearchParams()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  // Handle URL changes and set active service
  useEffect(() => {
    const serviceId = searchParams.get('service')
    if (serviceId) {
      const service = services.find(s => s.id === serviceId)
      if (service) {
        setActiveService(service)
      }
    }
  }, [searchParams])

  const handleServiceClick = (service: typeof services[0]) => {
    setActiveService(service)
    router.push(`/services?service=${service.id}`, { scroll: false })
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="flex h-screen pt-24">
        {/* Left Column - Service Content */}
        <div className="flex-1 bg-white overflow-hidden">
          <div className="max-w-4xl mx-auto p-8 h-full flex flex-col">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-1 flex flex-col"
            >
              {/* Service Header */}
              <div className="mb-6">
                <h1 className="text-4xl font-bold text-gray-900 mb-3 font-montserrat">{activeService.title}</h1>
                <p className="text-lg text-blue-600 font-medium mb-4 font-roboto">{activeService.tagline}</p>
              </div>

              {/* Service Description */}
              <div className="mb-6">
                <p className="text-base text-gray-700 mb-3 leading-relaxed font-roboto">
                  {activeService.description}
                </p>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-montserrat">What We Offer</h3>
                <div className="grid grid-cols-2 gap-3">
                  {activeService.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-sm text-gray-700 font-roboto">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Column - Services List */}
        <div className="w-80 bg-gray-900 text-white h-full overflow-hidden pt-24">
          <div className="p-4 h-full flex flex-col">
            <h3 className="text-lg font-bold mb-6 text-center uppercase tracking-wide">OUR SERVICES</h3>
            <nav className="space-y-1 flex-1 overflow-y-auto">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => handleServiceClick(service)}
                  className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
                    activeService.id === service.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <service.icon className="w-4 h-4 flex-shrink-0" />
                    <span className="font-medium text-sm">{service.title}</span>
                  </div>
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}
