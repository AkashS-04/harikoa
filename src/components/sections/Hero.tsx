'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Play, Sparkles } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-soft">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-primary-200 rounded-full px-4 py-2 mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-medium text-primary-700">Innovation in Technology</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-secondary-900 mb-6 text-balance"
          >
            Transforming Ideas Into{' '}
            <span className="text-gradient">Digital Reality</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-secondary-600 mb-8 max-w-3xl mx-auto text-balance"
          >
            We empower businesses to thrive in the digital age through innovative 
            technology solutions, cloud infrastructure, and cutting-edge software development.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12"
          >
            <Link href="/contact" className="btn-primary text-lg px-8 py-4 group">
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <button className="btn-ghost text-lg px-8 py-4 group">
              <Play className="w-5 h-5 mr-2" />
              Watch Our Story
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-sm text-secondary-600">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-sm text-secondary-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">5+</div>
              <div className="text-sm text-secondary-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">99%</div>
              <div className="text-sm text-secondary-600">Success Rate</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-secondary-300 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-secondary-400 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
}
