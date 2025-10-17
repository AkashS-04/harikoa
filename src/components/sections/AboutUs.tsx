'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function AboutUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-20 bg-gradient-soft">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-secondary-900 mb-8 font-montserrat">
              About Us
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-lg text-secondary-600">
                <strong className="text-primary-600">HariKoa</strong>, a Maori term for <em>Happiness or Joy</em>.
              </p>
              
              <p className="text-lg text-secondary-600">
                We at HariKoa are here to bring structure to your numbers, strength to your strategy, and peace of mind to your journey—so you can build a business that&apos;s both fulfilling and joyful.
              </p>
              
              <p className="text-lg text-secondary-600">
                HariKoa is comprised of team of entrepreneurs with a cumulative experience of over <strong className="text-primary-600">70 years of experience</strong> across <strong className="text-primary-600">Finance, Technology and Sales</strong>.
              </p>
              
              <p className="text-lg text-secondary-600">
                The team behind HariKoa has worked across large Corporates like <strong>Infosys, Deloitte, Tata and Xerox</strong> before starting their own entrepreneurial journey.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="pt-6"
              >
                <button 
                  onClick={() => {
                    document.getElementById('services-section')?.scrollIntoView({ 
                      behavior: 'smooth' 
                    })
                  }}
                  className="inline-flex items-center space-x-2 bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-300 group"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary-600 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-2xl">H</span>
                  </div>
                  <h3 className="text-2xl font-bold text-secondary-900 mb-2">HariKoa</h3>
                  <p className="text-secondary-600">Financial Solutions & Business Growth</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
