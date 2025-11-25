import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join our team at Harikoa. We provide immense opportunities to employees across various industry verticals.',
}

export default function CareersPage() {
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
              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full flex items-center justify-center">
                <div className="w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 relative">
                  {/* Central figure */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-primary-600 rounded-full"></div>
                  {/* Surrounding figures */}
                  <div className="absolute top-2 sm:top-3 md:top-4 left-1/2 transform -translate-x-1/2 w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-gray-600 rounded-full"></div>
                  <div className="absolute top-4 sm:top-6 md:top-8 right-4 sm:right-6 md:right-8 w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-gray-600 rounded-full"></div>
                  <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 right-6 sm:right-8 md:right-12 w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-gray-600 rounded-full"></div>
                  <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-1/2 transform -translate-x-1/2 w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-gray-600 rounded-full"></div>
                  <div className="absolute top-4 sm:top-6 md:top-8 left-4 sm:left-6 md:left-8 w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-gray-600 rounded-full"></div>
                  <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-6 sm:left-8 md:left-12 w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-gray-600 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Application Form */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-soft p-6 sm:p-8 order-1 lg:order-2">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary-900 mb-4 sm:mb-6 font-montserrat">
                Apply Now
              </h2>
              
              <form className="space-y-4 sm:space-y-5 md:space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-secondary-700 mb-1.5 sm:mb-2 font-roboto">
                    NAME
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-secondary-700 mb-1.5 sm:mb-2 font-roboto">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Enter your email address"
                  />
                </div>

                {/* Mobile */}
                <div>
                  <label htmlFor="mobile" className="block text-xs sm:text-sm font-medium text-secondary-700 mb-1.5 sm:mb-2 font-roboto">
                    MOBILE
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Enter your mobile number"
                  />
                </div>

                {/* Resume Upload */}
                <div>
                  <label htmlFor="resume" className="block text-xs sm:text-sm font-medium text-secondary-700 mb-1.5 sm:mb-2 font-roboto">
                    UPLOAD RESUME
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 file:mr-2 sm:file:mr-4 file:py-1.5 sm:file:py-2 file:px-2 sm:file:px-4 file:rounded-full file:border-0 file:text-xs sm:file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100"
                    />
                  </div>
                </div>

                {/* reCAPTCHA */}
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="recaptcha"
                    name="recaptcha"
                    className="h-4 w-4 sm:h-5 sm:w-5 text-primary-600 focus:ring-primary-500 border-secondary-300 rounded"
                  />
                  <label htmlFor="recaptcha" className="text-xs sm:text-sm text-secondary-600 font-roboto">
                    I&apos;m not a robot
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white py-2.5 sm:py-3 px-6 rounded-lg text-sm sm:text-base font-semibold hover:bg-primary-700 transition-colors duration-200 font-roboto"
                >
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}