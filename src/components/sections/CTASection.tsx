'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-primary-600 to-accent-600 text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Build a Business That&apos;s Fulfilling, Structured, and Scalable
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12">
            Let&apos;s start your journey with HariKoa today.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center"
          >
            <Link 
              href="/contact" 
              className="bg-white text-primary-600 hover:bg-white/90 text-lg px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl group"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
