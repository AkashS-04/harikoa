'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Send, CheckCircle, AlertCircle, Clock } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { services } from './contactFormData'
import { checkRateLimit, getRateLimitStatus, RATE_LIMIT_CONFIGS } from '@/utils/rateLimiter'

export function ContactForm() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [rateLimitStatus, setRateLimitStatus] = useState<{
    remaining: number
    resetTime: number | null
    used: number
  }>({
    remaining: RATE_LIMIT_CONFIGS.CONTACT_FORM.maxSubmissions,
    resetTime: null,
    used: 0
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      // Check rate limit before proceeding
      const rateLimitCheck = checkRateLimit(RATE_LIMIT_CONFIGS.CONTACT_FORM)
      if (!rateLimitCheck.allowed) {
        setRateLimitStatus(getRateLimitStatus(RATE_LIMIT_CONFIGS.CONTACT_FORM))
        throw new Error(rateLimitCheck.message)
      }

      // Update rate limit status
      setRateLimitStatus(getRateLimitStatus(RATE_LIMIT_CONFIGS.CONTACT_FORM))

      // Validate environment variables
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_CONTACT
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing. Please check your environment variables.')
      }

      // Prepare template parameters
      // Note: The recipient email is set in your EmailJS template settings
      // You can also use {{to_email}} in your template if you want to make it dynamic
      const templateParams = {
        name: formData.name,
        email: formData.email,
        company: formData.company || 'Not provided',
        phone: formData.phone || 'Not provided',
        service: formData.service || 'Not specified',
        subject: formData.subject,
        message: formData.message,
        // Optional: Uncomment and set if you want to use dynamic recipient in template
        // to_email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'info@harikoa.com',
      }

      // Send email via EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      )

      setIsSubmitting(false)
      setSubmitStatus('success')
      
      // Update rate limit status after successful submission
      setRateLimitStatus(getRateLimitStatus(RATE_LIMIT_CONFIGS.CONTACT_FORM))
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          service: '',
          subject: '',
          message: ''
        })
      }, 3000)
    } catch (error) {
      console.error('EmailJS Error:', error)
      setIsSubmitting(false)
      setSubmitStatus('error')
      setErrorMessage(
        error instanceof Error 
          ? error.message 
          : 'Failed to send message. Please try again or contact us directly at info@harikoa.com'
      )
      // Update rate limit status on error
      setRateLimitStatus(getRateLimitStatus(RATE_LIMIT_CONFIGS.CONTACT_FORM))
    }
  }

  // Initialize and update rate limit status (client-side only)
  useEffect(() => {
    // Initialize on mount (client-side only)
    setRateLimitStatus(getRateLimitStatus(RATE_LIMIT_CONFIGS.CONTACT_FORM))
    
    // Update periodically
    const interval = setInterval(() => {
      setRateLimitStatus(getRateLimitStatus(RATE_LIMIT_CONFIGS.CONTACT_FORM))
    }, 60000) // Update every minute

    return () => clearInterval(interval)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section ref={ref} id="contact-form" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-soft">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-4 sm:px-6"
        >
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-4 sm:mb-6 font-montserrat">
              Send Us a <span className="text-gradient">Message</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-secondary-600 text-balance font-roboto">
              Fill out the form below and we&apos;ll get back to you soon.
            </p>
          </div>

          <div className="bg-white rounded-xl sm:rounded-2xl shadow-large p-6 sm:p-8 md:p-10 lg:p-12">
            {submitStatus === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 sm:py-10 md:py-12"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-secondary-900 mb-3 sm:mb-4 font-montserrat">
                  Message Sent Successfully!
                </h3>
                <p className="text-sm sm:text-base text-secondary-600 font-roboto">
                  Thank you for reaching out. We&apos;ll get back to you soon.
                </p>
              </motion.div>
            ) : submitStatus === 'error' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 sm:py-10 md:py-12"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <AlertCircle className="w-6 h-6 sm:w-8 sm:h-8 text-red-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-secondary-900 mb-3 sm:mb-4 font-montserrat">
                  Failed to Send Message
                </h3>
                <p className="text-sm sm:text-base text-secondary-600 font-roboto mb-4">
                  {errorMessage}
                </p>
                <button
                  onClick={() => setSubmitStatus('idle')}
                  className="btn-primary text-sm sm:text-base px-6 sm:px-8 py-2 sm:py-3"
                >
                  Try Again
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-secondary-900 mb-1.5 sm:mb-2 font-roboto">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-secondary-900 mb-1.5 sm:mb-2 font-roboto">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                  <div>
                    <label htmlFor="company" className="block text-xs sm:text-sm font-medium text-secondary-900 mb-1.5 sm:mb-2 font-roboto">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-secondary-900 mb-1.5 sm:mb-2 font-roboto">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label htmlFor="service" className="block text-xs sm:text-sm font-medium text-secondary-900 mb-1.5 sm:mb-2 font-roboto">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-xs sm:text-sm font-medium text-secondary-900 mb-1.5 sm:mb-2 font-roboto">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Brief description of your inquiry"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-secondary-900 mb-1.5 sm:mb-2 font-roboto">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 resize-none"
                    placeholder="Tell us about your project, requirements, or any questions you have&hellip;"
                  />
                </div>

                {/* Rate Limit Indicator */}
                {rateLimitStatus.remaining < 3 && rateLimitStatus.remaining > 0 && (
                  <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-amber-600 bg-amber-50 p-2 sm:p-3 rounded-lg border border-amber-200">
                    <Clock className="w-4 h-4" />
                    <span className="font-roboto">
                      {rateLimitStatus.remaining} submission{rateLimitStatus.remaining !== 1 ? 's' : ''} remaining this hour
                    </span>
                  </div>
                )}

                {/* Submit Button */}
                <div className="text-center pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting || rateLimitStatus.remaining === 0}
                    className="btn-primary text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4 disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        <span>Sending...</span>
                      </div>
                    ) : rateLimitStatus.remaining === 0 ? (
                      <div className="flex items-center justify-center">
                        <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                        <span>Rate Limit Reached</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                        <span>Send Message</span>
                      </div>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

