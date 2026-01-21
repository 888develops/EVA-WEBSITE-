'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Search, Calendar, Navigation, Zap } from 'lucide-react'

const driverSteps = [
  {
    step: 1,
    icon: Search,
    title: 'Find a Charging Station',
    description: 'Use our interactive map to discover nearby charging stations. Filter by plug type, charging speed, price, and availability.',
  },
  {
    step: 2,
    icon: Calendar,
    title: 'Book Your Session',
    description: 'Select your preferred date and time, then book instantly or request approval from the host.',
  },
  {
    step: 3,
    icon: Navigation,
    title: 'Navigate to Station',
    description: 'Get turn-by-turn directions with our integrated Mapbox navigation, optimized for EV travel.',
  },
  {
    step: 4,
    icon: Zap,
    title: 'Charge & Pay',
    description: 'Plug in and charge your vehicle. Payment is processed automatically and securely through Stripe.',
  },
]

const hostSteps = [
  {
    step: 1,
    icon: Search,
    title: 'List Your Charger',
    description: 'Add your charging station with location, connector types, charging speeds, and set your pricing.',
  },
  {
    step: 2,
    icon: Calendar,
    title: 'Manage Bookings',
    description: 'Receive booking requests, approve or set to instant booking, and manage your availability calendar.',
  },
  {
    step: 3,
    icon: Zap,
    title: 'Earn Money',
    description: 'Get paid automatically for each charging session. Track your earnings with detailed analytics.',
  },
  {
    step: 4,
    icon: Navigation,
    title: 'Grow Your Business',
    description: 'Use insights from your dashboard to optimize pricing and maximize your charging station utilization.',
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="how-it-works" ref={ref} className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl mb-6">
            <span className="text-gradient">How It Works</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Simple, straightforward process for both drivers and hosts
          </p>
        </motion.div>

        {/* Driver Process */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-heading font-bold text-3xl md:text-4xl mb-12 text-center text-[#1a1a1a]"
          >
            For Drivers
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {driverSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="relative"
                >
                  <div className="card-hover p-6 rounded-2xl bg-white border border-gray-200 shadow-sm text-center h-full">
                    <div className="inline-flex items-center justify-center w-20 h-20 gradient-green-blue rounded-full mb-6 relative">
                      <Icon className="text-white" size={32} />
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-green rounded-full flex items-center justify-center text-white font-heading font-bold text-sm">
                        {step.step}
                      </div>
                    </div>
                    <h4 className="font-heading font-bold text-xl mb-3 text-[#1a1a1a]">
                      {step.title}
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  {index < driverSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <div className="w-8 h-0.5 gradient-green-blue" />
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Host Process */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-heading font-bold text-3xl md:text-4xl mb-12 text-center text-[#1a1a1a]"
          >
            For Hosts
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {hostSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="relative"
                >
                  <div className="card-hover p-6 rounded-2xl bg-white border border-gray-200 shadow-sm text-center h-full">
                    <div className="inline-flex items-center justify-center w-20 h-20 gradient-green-blue rounded-full mb-6 relative">
                      <Icon className="text-white" size={32} />
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-green rounded-full flex items-center justify-center text-white font-heading font-bold text-sm">
                        {step.step}
                      </div>
                    </div>
                    <h4 className="font-heading font-bold text-xl mb-3 text-[#1a1a1a]">
                      {step.title}
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  {index < hostSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <div className="w-8 h-0.5 gradient-green-blue" />
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

