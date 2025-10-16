'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Us',
    value: 'hello@harikoa.com',
    description: 'Send us an email and we\'ll respond within 24 hours'
  },
  {
    icon: Phone,
    title: 'Call Us',
    value: '+1 (555) 123-4567',
    description: 'Speak directly with our team during business hours'
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    value: 'San Francisco, CA',
    description: 'Come meet us at our headquarters'
  },
  {
    icon: Clock,
    title: 'Business Hours',
    value: 'Mon - Fri, 9AM - 6PM',
    description: 'We\'re available Monday through Friday'
  }
]

export function ContactHero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="pt-24 pb-16 bg-gradient-soft">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-primary-200 rounded-full px-4 py-2 mb-8"
          >
            <span className="text-sm font-medium text-primary-700">Get In Touch</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-secondary-900 mb-6 text-balance"
          >
            Get in <span className="text-gradient">Touch</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-secondary-600 mb-12 max-w-3xl mx-auto text-balance"
          >
            We&apos;d love to hear from you. Whether you need structured finance operations, 
            strategic advisory, or legal support — let&apos;s talk.
          </motion.p>

          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <method.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                  {method.title}
                </h3>
                <div className="text-primary-600 font-medium mb-2">
                  {method.value}
                </div>
                <p className="text-sm text-secondary-600">
                  {method.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
