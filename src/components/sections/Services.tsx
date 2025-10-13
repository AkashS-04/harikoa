'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { 
  Cloud, 
  Brain, 
  Database, 
  Shield, 
  Smartphone, 
  ArrowRight,
  Zap
} from 'lucide-react'

const services = [
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable, secure, and cost-effective cloud infrastructure that grows with your business.',
    features: ['AWS/Azure/GCP', 'Migration Services', 'Cost Optimization', '24/7 Support'],
    href: '/services/cloud-solutions',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Intelligent solutions that automate processes and provide valuable insights from your data.',
    features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Custom AI Models'],
    href: '/services/ai-ml',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Database,
    title: 'Data Analytics',
    description: 'Transform raw data into actionable insights that drive informed business decisions.',
    features: ['Data Visualization', 'Real-time Dashboards', 'Predictive Modeling', 'Data Governance'],
    href: '/services/data-analytics',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
    features: ['Security Audits', 'Penetration Testing', 'Compliance Management', 'Incident Response'],
    href: '/services/cybersecurity',
    color: 'from-red-500 to-orange-500'
  },
  {
    icon: Smartphone,
    title: 'Digital Transformation',
    description: 'Modernize your business processes with cutting-edge digital solutions and automation.',
    features: ['Process Automation', 'Legacy Modernization', 'Digital Strategy', 'Change Management'],
    href: '/services/digital-transformation',
    color: 'from-indigo-500 to-blue-500'
  },
  {
    icon: Zap,
    title: 'Custom Development',
    description: 'Tailored software solutions built specifically for your unique business requirements.',
    features: ['Web Applications', 'Mobile Apps', 'API Development', 'System Integration'],
    href: '/services/custom-development',
    color: 'from-yellow-500 to-orange-500'
  }
]

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-secondary-600 text-balance">
            Comprehensive technology solutions designed to accelerate your business growth 
            and digital transformation journey.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Link href={service.href} className="block">
                <div className="card-hover p-8 h-full">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-semibold text-secondary-900 mb-4 group-hover:text-primary-600 transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-secondary-600 mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-secondary-500">
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="flex items-center text-primary-600 font-medium group-hover:text-primary-700 transition-colors duration-200">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Link href="/services" className="btn-primary text-lg px-8 py-4">
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
