'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const partners = [
  { name: 'Microsoft', logo: 'M' },
  { name: 'Amazon Web Services', logo: 'AWS' },
  { name: 'Google Cloud', logo: 'GCP' },
  { name: 'Salesforce', logo: 'SF' },
  { name: 'Oracle', logo: 'O' },
  { name: 'IBM', logo: 'IBM' },
  { name: 'Adobe', logo: 'A' },
  { name: 'SAP', logo: 'SAP' }
]

export function Partners() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section-padding bg-secondary-50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Trusted by <span className="text-gradient">Industry Leaders</span>
          </h2>
          <p className="text-xl text-secondary-600 text-balance">
            We partner with leading technology companies to deliver the best solutions 
            and maintain the highest standards of quality and innovation.
          </p>
        </motion.div>

        {/* Partners Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-xl p-6 h-24 flex items-center justify-center shadow-soft hover:shadow-medium transition-all duration-300 group-hover:-translate-y-1">
                <div className="text-2xl font-bold text-secondary-400 group-hover:text-primary-600 transition-colors duration-300">
                  {partner.logo}
                </div>
              </div>
              <div className="text-center mt-3">
                <div className="text-sm font-medium text-secondary-600 group-hover:text-secondary-900 transition-colors duration-300">
                  {partner.name}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-white rounded-2xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">8+</div>
              <div className="text-lg font-semibold text-secondary-900 mb-2">Technology Partners</div>
              <div className="text-secondary-600">Leading cloud and software providers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-lg font-semibold text-secondary-900 mb-2">Certified Experts</div>
              <div className="text-secondary-600">Industry-recognized certifications</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-lg font-semibold text-secondary-900 mb-2">Support Available</div>
              <div className="text-secondary-600">Round-the-clock technical assistance</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
