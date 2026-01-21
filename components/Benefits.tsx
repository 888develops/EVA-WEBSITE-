'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Clock, DollarSign, MapPin, Shield, TrendingUp, Users } from 'lucide-react'

const driverBenefits = [
  {
    icon: MapPin,
    title: 'Convenience',
    description: 'Find charging stations wherever you are, whenever you need them.',
  },
  {
    icon: Clock,
    title: 'Time Saving',
    description: 'Book in advance and avoid waiting. Real-time availability ensures you get a spot.',
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description: 'See all costs upfront with no hidden fees. Compare prices to find the best deal.',
  },
  {
    icon: Shield,
    title: 'Secure & Safe',
    description: 'PCI-compliant payments and verified hosts give you peace of mind.',
  },
]

const hostBenefits = [
  {
    icon: DollarSign,
    title: 'Earn Passive Income',
    description: 'Monetize your charging station and earn money while helping the EV community.',
  },
  {
    icon: TrendingUp,
    title: 'Flexible Control',
    description: 'Set your own pricing, availability, and booking preferences.',
  },
  {
    icon: Users,
    title: 'Growing Market',
    description: 'Join the expanding EV network and tap into a rapidly growing user base.',
  },
  {
    icon: Shield,
    title: 'Secure Payments',
    description: 'Get paid automatically through Stripe Connect with reliable, secure processing.',
  },
]

export default function Benefits() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="benefits" ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl mb-6">
            <span className="text-gradient">Key Benefits</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Why choose EVA for your electric vehicle charging needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Driver Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-heading font-bold text-3xl mb-8 text-[#1a1a1a] text-center md:text-left">
              For Drivers
            </h3>
            <div className="space-y-6">
              {driverBenefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="card-hover p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 gradient-green-blue rounded-xl flex items-center justify-center">
                          <Icon className="text-white" size={24} />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-xl mb-2 text-[#1a1a1a]">
                          {benefit.title}
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Host Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="font-heading font-bold text-3xl mb-8 text-[#1a1a1a] text-center md:text-left">
              For Hosts
            </h3>
            <div className="space-y-6">
              {hostBenefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    className="card-hover p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 gradient-green-blue rounded-xl flex items-center justify-center">
                          <Icon className="text-white" size={24} />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-xl mb-2 text-[#1a1a1a]">
                          {benefit.title}
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

