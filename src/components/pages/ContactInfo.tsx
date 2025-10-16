'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Phone, MapPin, Clock, Users, Award } from 'lucide-react'

const companyInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'info@harikoa.com',
    description: 'General inquiries and support'
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+91-XXXX-XXX-XXX',
    description: 'Direct line to our team'
  },
  {
    icon: MapPin,
    title: 'Address',
    value: '(Add office address)',
    description: 'Visit our headquarters'
  },
  {
    icon: Clock,
    title: 'Business Hours',
    value: 'Monday-Friday, 9:00 AM–6:00 PM',
    description: 'We\'re here to help during business hours'
  }
]

const stats = [
  { icon: Users, value: '50+', label: 'Team Members' },
  { icon: Award, value: '500+', label: 'Projects Completed' }
]

export function ContactInfo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Get in <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-xl text-secondary-600 mb-8 text-balance">
              We&apos;re here to help you succeed. Whether you have a question about our services, 
              need a custom solution, or want to discuss your next project, we&apos;re ready to listen.
            </p>

            <div className="space-y-6">
              {companyInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary-900 mb-1">
                      {info.title}
                    </h3>
                    <div className="text-primary-600 font-medium mb-1">
                      {info.value}
                    </div>
                    <p className="text-secondary-600 text-sm">
                      {info.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="text-center p-6 bg-gradient-soft rounded-xl"
                >
                  <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-secondary-600">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gradient-hero rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-white/90 mb-6">
                Schedule a free consultation to discuss your project requirements 
                and discover how we can help you achieve your goals.
              </p>
              <a
                href="#contact-form"
                className="inline-flex items-center bg-white text-primary-600 hover:bg-white/90 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Schedule Consultation
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
