'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle } from 'lucide-react'

interface ServiceDetailsProps {
  title: string
  description: string
  services: string[]
}

export function ServiceDetails({ title, description, services }: ServiceDetailsProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              {title} <span className="text-gradient">Services</span>
            </h2>
            <p className="text-xl text-secondary-600 text-balance">
              {description}
            </p>
          </motion.div>

          {/* Services List */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="flex items-start space-x-4 p-6 bg-gradient-soft rounded-xl border border-primary-100"
              >
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <p className="text-lg font-medium text-secondary-900">{service}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
