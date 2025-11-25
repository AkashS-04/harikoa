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
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50 pt-20 sm:pt-24">
      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-5rem)]">
        {/* Left Column - Service Content */}
        <div className="flex-1 bg-white lg:bg-transparent overflow-y-auto">
          <div className="max-w-4xl mx-auto p-6 sm:p-8 lg:p-12">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              ref={ref}
            >
              {/* Service Header */}
              <div className="mb-6 sm:mb-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 mb-3 sm:mb-4 font-montserrat leading-tight">
                  {activeService.title}
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-primary-950 font-semibold mb-4 sm:mb-6 font-roboto">
                  {activeService.tagline}
                </p>
              </div>

              {/* Service Description */}
              <div className="mb-8 sm:mb-10">
                <p className="text-base sm:text-lg text-secondary-700 leading-relaxed font-roboto">
                  {activeService.description}
                </p>
              </div>

              {/* Features */}
              <div className="mb-8 sm:mb-12">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-secondary-900 mb-6 sm:mb-8 font-montserrat">
                  What We Offer
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {activeService.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start space-x-3 bg-white rounded-lg p-4 sm:p-5 shadow-sm border border-primary-100 hover:shadow-md transition-shadow duration-300"
                    >
                      <div className="w-2 h-2 bg-primary-600 rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-sm sm:text-base text-secondary-700 font-roboto leading-relaxed">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Column - Services List */}
        <div className="w-full lg:w-80 xl:w-96 bg-primary-950 text-white lg:sticky lg:top-20 lg:h-[calc(100vh-5rem)] flex-shrink-0">
          <div className="p-4 sm:p-6 h-full flex flex-col">
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 text-center uppercase tracking-wide text-white font-montserrat px-2">
              SERVICES
            </h3>
            <nav className="space-y-1.5 sm:space-y-2 flex-1 overflow-y-auto pr-2">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => handleServiceClick(service)}
                  className={`w-full text-left p-3 sm:p-4 rounded-lg transition-all duration-200 ${
                    activeService.id === service.id
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'text-gray-300 hover:text-white hover:bg-primary-800/50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <service.icon className={`w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 ${
                      activeService.id === service.id ? 'text-white' : 'text-gray-400'
                    }`} />
                    <span className="font-medium text-sm sm:text-base font-roboto leading-tight">
                      {service.title}
                    </span>
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

