'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Navigation } from 'lucide-react'

export function Map() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Find Us <span className="text-gradient">Here</span>
          </h2>
          <p className="text-xl text-secondary-600 text-balance">
            Visit our headquarters in the heart of San Francisco&apos;s tech district.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-soft rounded-2xl overflow-hidden"
        >
          {/* Map Placeholder */}
          <div className="h-96 bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center relative">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-2">
                HariKoa Headquarters
              </h3>
              <p className="text-secondary-600 mb-4">
                123 Tech Street, San Francisco, CA 94105
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors duration-200"
              >
                <Navigation className="w-5 h-5 mr-2" />
                Get Directions
              </a>
            </div>
          </div>

          {/* Office Info */}
          <div className="p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h4 className="text-lg font-semibold text-secondary-900 mb-2">Address</h4>
                <p className="text-secondary-600">
                  123 Tech Street<br />
                  San Francisco, CA 94105<br />
                  United States
                </p>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold text-secondary-900 mb-2">Business Hours</h4>
                <p className="text-secondary-600">
                  Monday - Friday<br />
                  9:00 AM - 6:00 PM PST<br />
                  Saturday: 10:00 AM - 2:00 PM
                </p>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold text-secondary-900 mb-2">Contact</h4>
                <p className="text-secondary-600">
                  Phone: +1 (555) 123-4567<br />
                  Email: hello@harikoa.com<br />
                  Emergency: +1 (555) 123-4568
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
