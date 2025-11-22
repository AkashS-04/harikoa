'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Phone, Mail } from 'lucide-react'

export function CTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section-padding bg-gradient-hero text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Header */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Build a Business That&apos;s Fulfilling, Structured, and Scalable
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 text-balance">
            Let&apos;s start your journey with Harikoa today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <Link 
              href="/contact" 
              className="bg-white text-primary-600 hover:bg-white/90 text-lg px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl group"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-3 text-white/90">
              <Phone className="w-5 h-5" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-white/90">
              <Mail className="w-5 h-5" />
              <span>hello@harikoa.com</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
