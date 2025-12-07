'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, AlertCircle, Upload, X, Clock, Briefcase, TrendingUp, Users } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { uploadFile } from '@uploadcare/upload-client'
import { checkRateLimit, getRateLimitStatus, RATE_LIMIT_CONFIGS } from '@/utils/rateLimiter'

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    resume: null as File | null,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [uploadProgress, setUploadProgress] = useState(0)
  const [resumeFileName, setResumeFileName] = useState('')
  const [isUploading, setIsUploading] = useState(false)
  const [rateLimitStatus, setRateLimitStatus] = useState<{
    remaining: number
    resetTime: number | null
    used: number
  }>({
    remaining: RATE_LIMIT_CONFIGS.CAREERS_FORM.maxSubmissions,
    resetTime: null,
    used: 0
  })

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Validate file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
      if (!allowedTypes.includes(file.type)) {
        setErrorMessage('Invalid file type. Please upload a PDF, DOC, or DOCX file.')
        setSubmitStatus('error')
        return
      }

      // Validate file size (10MB max)
      const maxSize = 10 * 1024 * 1024 // 10MB in bytes
      if (file.size > maxSize) {
        setErrorMessage('File size exceeds 10MB. Please upload a smaller file.')
        setSubmitStatus('error')
        return
      }

      setFormData({ ...formData, resume: file })
      setResumeFileName(file.name)
      setErrorMessage('')
      setSubmitStatus('idle')
    }
  }

  // Initialize and update rate limit status (client-side only)
  useEffect(() => {
    // Initialize on mount (client-side only)
    setRateLimitStatus(getRateLimitStatus(RATE_LIMIT_CONFIGS.CAREERS_FORM))
    
    // Update periodically
    const interval = setInterval(() => {
      setRateLimitStatus(getRateLimitStatus(RATE_LIMIT_CONFIGS.CAREERS_FORM))
    }, 60000) // Update every minute

    return () => clearInterval(interval)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      // Check rate limit before proceeding
      const rateLimitCheck = checkRateLimit(RATE_LIMIT_CONFIGS.CAREERS_FORM)
      if (!rateLimitCheck.allowed) {
        setRateLimitStatus(getRateLimitStatus(RATE_LIMIT_CONFIGS.CAREERS_FORM))
        throw new Error(rateLimitCheck.message)
      }

      // Update rate limit status
      setRateLimitStatus(getRateLimitStatus(RATE_LIMIT_CONFIGS.CAREERS_FORM))

      // Validate environment variables
      const uploadcareKey = process.env.NEXT_PUBLIC_UPLOADCARE_PUBLIC_KEY
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_CAREERS
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

      if (!uploadcareKey || !serviceId || !templateId || !publicKey) {
        throw new Error('Configuration is missing. Please check your environment variables.')
      }

      if (!formData.resume) {
        throw new Error('Please upload a resume file.')
      }

      // Step 1: Upload file to Uploadcare
      setIsUploading(true)
      setUploadProgress(0)

      const uploadResult = await uploadFile(formData.resume, {
        publicKey: uploadcareKey,
        onProgress: (progress) => {
          // Handle both ComputableProgressInfo and UnknownProgressInfo
          if ('progress' in progress && typeof progress.progress === 'number') {
            setUploadProgress(Math.round(progress.progress * 100))
          } else if ('isComputable' in progress && !progress.isComputable) {
            // For unknown progress, show indeterminate progress
            setUploadProgress(50)
          }
        },
      })

      setIsUploading(false)
      setUploadProgress(0)

      // Get the file URL from Uploadcare
      // Your CDN domain is: 3qvmxae3b3.ucarecd.net (from Uploadcare dashboard)
      // Uploadcare sometimes returns ucarecdn.com in cdnUrl, but we need to use your actual CDN domain
      const correctCdnDomain = process.env.NEXT_PUBLIC_UPLOADCARE_CDN_DOMAIN || '3qvmxae3b3.ucarecd.net'
      let fileUrl: string
      
      // Log the upload result for debugging
      console.log('Uploadcare upload result:', {
        uuid: uploadResult.uuid,
        cdnUrl: uploadResult.cdnUrl,
        name: uploadResult.name,
        fullResult: uploadResult
      })
      
      // Always construct URL using your correct CDN domain
      // Extract UUID from cdnUrl if available, or use uploadResult.uuid
      if (uploadResult.uuid) {
        // Construct URL with your correct CDN domain
        // Format: https://{your-cdn-domain}/{uuid}/
        fileUrl = `https://${correctCdnDomain}/${uploadResult.uuid}/`
        
        // If cdnUrl was provided but uses wrong domain, log it for reference
        if (uploadResult.cdnUrl && uploadResult.cdnUrl.includes('ucarecdn.com')) {
          console.warn('cdnUrl used wrong domain (ucarecdn.com), replaced with correct domain:', correctCdnDomain)
        }
      } else if (uploadResult.cdnUrl) {
        // Fallback: extract UUID from cdnUrl and reconstruct with correct domain
        const uuidMatch = uploadResult.cdnUrl.match(/\/([a-f0-9-]{36})\/?/i)
        if (uuidMatch && uuidMatch[1]) {
          fileUrl = `https://${correctCdnDomain}/${uuidMatch[1]}/`
        } else {
          throw new Error('Could not extract file UUID from upload result.')
        }
      } else {
        throw new Error('Upload failed: No file UUID or CDN URL received from Uploadcare.')
      }
      
      // Ensure the URL is properly formatted
      if (!fileUrl.startsWith('http')) {
        throw new Error(`Invalid file URL format: ${fileUrl}`)
      }
      
      console.log('Final resume file URL (using correct CDN domain):', fileUrl)

      // Step 2: Send form data + file URL via EmailJS
      // Note: The recipient email is set in your EmailJS template settings
      // You can also use {{to_email}} in your template if you want to make it dynamic
      const templateParams = {
        name: formData.name,
        email: formData.email,
        mobile: formData.mobile,
        resume_url: fileUrl,
        // Optional: Uncomment and set if you want to use dynamic recipient in template
        // to_email: process.env.NEXT_PUBLIC_CAREERS_EMAIL || 'careers@harikoa.in',
      }

      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      )

      setIsSubmitting(false)
      setSubmitStatus('success')
      
      // Update rate limit status after successful submission
      setRateLimitStatus(getRateLimitStatus(RATE_LIMIT_CONFIGS.CAREERS_FORM))
    } catch (error) {
      console.error('Submission Error:', error)
      setIsSubmitting(false)
      setIsUploading(false)
      setUploadProgress(0)
      setSubmitStatus('error')
      setErrorMessage(
        error instanceof Error 
          ? error.message 
          : 'Failed to submit application. Please try again or contact us directly at careers@harikoa.in'
      )
      // Update rate limit status on error
      setRateLimitStatus(getRateLimitStatus(RATE_LIMIT_CONFIGS.CAREERS_FORM))
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50 pt-20 sm:pt-24">
      <div className="container-custom py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary-900 mb-4 sm:mb-6 font-montserrat">
              Careers
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-secondary-700 leading-relaxed max-w-3xl mx-auto font-roboto px-2">
              At <span className="text-primary-600 font-semibold">Harikoa</span>, we bring together a team with over 70 years of combined experience in <span className="text-primary-600 font-semibold">financial services</span>, having worked with industry leaders like Infosys, Deloitte, Tata and the Hinduja Group. As a new firm with deep expertise, we offer exciting opportunities to join a dynamic team that&apos;s building the future of financial solutions. We are looking for bright minds who want to be part of our growth journey.
            </p>
          </div>

          {/* Content with Image and Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">
            {/* Team Illustration */}
            <div className="flex justify-center lg:justify-end order-2 lg:order-1">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64">
                {/* Background gradient circle */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl sm:rounded-3xl shadow-lg"></div>
                
                {/* Professional icons illustration */}
                <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6">
                  <div className="relative w-full h-full">
                    {/* Central Briefcase icon */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <Briefcase className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 text-primary-600" strokeWidth={1.5} />
                    </div>
                    
                    {/* Top TrendingUp icon */}
                    <div className="absolute top-2 sm:top-3 md:top-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <TrendingUp className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-primary-500" strokeWidth={1.5} />
                    </div>
                    
                    {/* Bottom left decorative element */}
                    <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 bg-primary-400 rounded-full opacity-60"></div>
                    </div>
                    
                    {/* Bottom right decorative element */}
                    <div className="absolute bottom-4 sm:bottom-6 right-6 sm:right-8">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-accent-400 rounded-full opacity-60"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Application Form */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-soft p-6 sm:p-8 order-1 lg:order-2">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary-900 mb-4 sm:mb-6 font-montserrat">
                Apply Now
              </h2>
              
              {submitStatus === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8 sm:py-10"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-secondary-900 mb-3 sm:mb-4 font-montserrat">
                    Application Submitted!
                  </h3>
                  <p className="text-sm sm:text-base text-secondary-600 font-roboto mb-4">
                    Thank you for your interest. We&apos;ll review your application and get back to you soon.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitStatus('idle')
                      setFormData({ name: '', email: '', mobile: '', resume: null })
                      setResumeFileName('')
                    }}
                    className="btn-primary text-sm sm:text-base px-6 sm:px-8 py-2 sm:py-3"
                  >
                    Submit Another Application
                  </button>
                </motion.div>
              ) : submitStatus === 'error' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8 sm:py-10"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <AlertCircle className="w-6 h-6 sm:w-8 sm:h-8 text-red-600" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-secondary-900 mb-3 sm:mb-4 font-montserrat">
                    Submission Failed
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
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-secondary-700 mb-1.5 sm:mb-2 font-roboto">
                      NAME *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-secondary-700 mb-1.5 sm:mb-2 font-roboto">
                      EMAIL *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Enter your email address"
                    />
                  </div>

                  {/* Mobile */}
                  <div>
                    <label htmlFor="mobile" className="block text-xs sm:text-sm font-medium text-secondary-700 mb-1.5 sm:mb-2 font-roboto">
                      MOBILE *
                    </label>
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      required
                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Enter your mobile number"
                    />
                  </div>

                  {/* Resume Upload */}
                  <div>
                    <label htmlFor="resume" className="block text-xs sm:text-sm font-medium text-secondary-700 mb-1.5 sm:mb-2 font-roboto">
                      UPLOAD RESUME * (PDF, DOC, DOCX - Max 10MB)
                    </label>
                    {resumeFileName ? (
                      <div className="flex items-center justify-between p-3 bg-primary-50 rounded-lg border border-primary-200">
                        <div className="flex items-center space-x-2">
                          <Upload className="w-4 h-4 text-primary-600" />
                          <span className="text-sm text-secondary-700 font-roboto">{resumeFileName}</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            setFormData({ ...formData, resume: null })
                            setResumeFileName('')
                          }}
                          className="text-primary-600 hover:text-primary-700"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <div className="relative">
                        <input
                          type="file"
                          id="resume"
                          name="resume"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          required
                          className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 file:mr-2 sm:file:mr-4 file:py-1.5 sm:file:py-2 file:px-2 sm:file:px-4 file:rounded-full file:border-0 file:text-xs sm:file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100"
                        />
                      </div>
                    )}
                    {isUploading && (
                      <div className="mt-2">
                        <div className="w-full bg-secondary-200 rounded-full h-2">
                          <div
                            className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${uploadProgress}%` }}
                          ></div>
                        </div>
                        <p className="text-xs text-secondary-600 mt-1 font-roboto">Uploading: {uploadProgress}%</p>
                      </div>
                    )}
                  </div>

                  {/* Rate Limit Indicator */}
                  {rateLimitStatus.remaining < 2 && rateLimitStatus.remaining > 0 && (
                    <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-amber-600 bg-amber-50 p-2 sm:p-3 rounded-lg border border-amber-200">
                      <Clock className="w-4 h-4" />
                      <span className="font-roboto">
                        {rateLimitStatus.remaining} submission{rateLimitStatus.remaining !== 1 ? 's' : ''} remaining this hour
                      </span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting || isUploading || rateLimitStatus.remaining === 0}
                    className="w-full bg-primary-600 text-white py-2.5 sm:py-3 px-6 rounded-lg text-sm sm:text-base font-semibold hover:bg-primary-700 transition-colors duration-200 font-roboto disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting || isUploading ? (
                      <div className="flex items-center justify-center">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        <span>{isUploading ? 'Uploading Resume...' : 'Submitting...'}</span>
                      </div>
                    ) : rateLimitStatus.remaining === 0 ? (
                      <div className="flex items-center justify-center">
                        <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                        <span>Rate Limit Reached</span>
                      </div>
                    ) : (
                      'SUBMIT'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
