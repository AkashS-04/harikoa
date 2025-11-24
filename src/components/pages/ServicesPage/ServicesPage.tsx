'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { services } from './servicesData'

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
                <p className="text-lg text-primary-950 font-medium mb-4 font-roboto">{activeService.tagline}</p>
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
                      <div className="w-1.5 h-1.5 bg-primary-950 rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-sm text-gray-700 font-roboto">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Column - Services List */}
        <div className="w-80 bg-primary-950 text-white h-full overflow-hidden pt-24">
          <div className="p-4 h-full flex flex-col">
            <h3 className="text-lg font-bold mb-6 text-center uppercase tracking-wide text-white">SERVICES</h3>
            <nav className="space-y-1 flex-1 overflow-y-auto">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => handleServiceClick(service)}
                  className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
                    activeService.id === service.id
                      ? 'bg-primary-600 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-primary-800'
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

