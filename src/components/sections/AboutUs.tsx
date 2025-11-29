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
    <section ref={ref} className="py-12 sm:py-16 md:py-20 bg-gradient-soft">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 font-montserrat px-4">
              <span className="text-primary-950">About </span>
              <span className="bg-gradient-to-r from-primary-950 via-accent-950 to-primary-950 bg-clip-text text-transparent">Us</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4 sm:space-y-5 md:space-y-6 order-2 lg:order-1 px-4 sm:px-0"
            >
              <p className="text-sm sm:text-base md:text-lg text-secondary-600 leading-relaxed">
                <strong className="text-primary-600">Harikoa</strong> — a Māori word meaning <em className="underline">happiness</em> or <em className="underline">joy</em> — reflects what we stand for: the joy of doing business right.
              </p>
              
              <p className="text-sm sm:text-base md:text-lg text-secondary-600 leading-relaxed">
                At <strong className="text-primary-600">Harikoa Consulting</strong>, we turn financial data into direction — helping you improve margins, manage risk, and scale with confidence to build a business that&apos;s both profitable and joyful.
              </p>
              
              <p className="text-sm sm:text-base md:text-lg text-secondary-600 leading-relaxed">
                Our team brings together over <strong className="text-primary-600">70 years of collective experience</strong> across Finance, Technology, Company Secretarial and Revenue Operations.
              </p>
              
              <p className="text-sm sm:text-base md:text-lg text-secondary-600 leading-relaxed">
                Our team has worked with industry leaders like <strong className="text-primary-600">Infosys, Deloitte, Tata, and the Hinduja Group</strong>, before embarking on our own entrepreneurial journey — to help businesses grow with structure, integrity, and clarity.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="pt-4 sm:pt-6"
              >
                <button 
                  onClick={() => {
                    document.getElementById('services-section')?.scrollIntoView({ 
                      behavior: 'smooth' 
                    })
                  }}
                  className="inline-flex items-center space-x-2 bg-primary-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-sm sm:text-base font-semibold hover:bg-primary-700 transition-colors duration-300 group w-full sm:w-auto justify-center"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative order-1 lg:order-2 px-4 sm:px-0"
            >
              <div className="bg-gradient-to-br from-primary-100 to-accent-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 h-64 sm:h-80 md:h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="flex items-center justify-center">
                    <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-950 font-montserrat">har</span>
                    <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent-950 font-montserrat">i</span>
                    <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-950 font-montserrat">koa</span>
                  </div>
                  <div className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-800 mx-auto mt-1 sm:mt-2"></div>
                  <p className="text-sm sm:text-base md:text-lg font-bold text-accent-950 font-montserrat mb-2 sm:mb-3 mt-1 sm:mt-2">consulting</p>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-secondary-600 font-roboto ml-1 sm:ml-2">Financial Solutions & Business Growth</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
