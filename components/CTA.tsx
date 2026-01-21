'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Download, Mail, MessageCircle } from 'lucide-react'

export default function CTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" ref={ref} className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-green-blue-animated opacity-10" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl mb-6">
            <span className="text-gradient">Coming Soon</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
            The EVA app is currently in development. Stay tuned for updates and be among the first to experience the future of electric vehicle charging.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Download App Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-xl mb-8 border border-gray-200"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 gradient-green-blue rounded-xl flex items-center justify-center">
                <Download className="text-white" size={32} />
              </div>
            </div>
            <h3 className="font-heading font-bold text-2xl md:text-3xl mb-4 text-center text-[#1a1a1a]">
              EVA App Coming Soon
            </h3>
            <p className="text-gray-700 text-center mb-8">
              We're working hard to bring you the best EV charging experience. The app will be available on iOS and Android soon.
            </p>
            <div className="flex justify-center">
              <div className="px-8 py-4 bg-gray-100 text-gray-500 font-semibold rounded-xl flex items-center justify-center gap-2">
                <span>Available Soon</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid md:grid-cols-2 gap-6"
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 gradient-green-blue rounded-xl flex items-center justify-center">
                  <Mail className="text-white" size={24} />
                </div>
              </div>
              <h4 className="font-heading font-bold text-xl mb-2 text-center text-[#1a1a1a]">
                Email Us
              </h4>
              <p className="text-gray-700 text-center mb-4">
                Have questions? We're here to help.
              </p>
              <a
                href="mailto:support@energyvehiclealliance.com"
                className="block text-center text-brand-blue hover:text-brand-green transition-colors font-medium"
              >
                support@energyvehiclealliance.com
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 gradient-green-blue rounded-xl flex items-center justify-center">
                  <MessageCircle className="text-white" size={24} />
                </div>
              </div>
              <h4 className="font-heading font-bold text-xl mb-2 text-center text-[#1a1a1a]">
                Get Support
              </h4>
              <p className="text-gray-700 text-center mb-4">
                Need assistance? Reach out to our support team.
              </p>
              <a
                href="mailto:support@energyvehiclealliance.com"
                className="block text-center text-brand-blue hover:text-brand-green transition-colors font-medium"
              >
                support@energyvehiclealliance.com
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

