'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Shield, Map, CreditCard, Database } from 'lucide-react'

const technologies = [
  {
    icon: Map,
    name: 'Mapbox',
    description: 'Advanced mapping and navigation services for accurate, real-time location data and turn-by-turn directions.',
  },
  {
    icon: CreditCard,
    name: 'Stripe',
    description: 'PCI-compliant payment processing and secure transactions for both drivers and hosts.',
  },
  {
    icon: Database,
    name: 'Supabase',
    description: 'Secure authentication and real-time database infrastructure for reliable platform operations.',
  },
  {
    icon: Shield,
    name: 'Enterprise Security',
    description: 'Industry-standard encryption and security measures to protect user data and transactions.',
  },
]

export default function Technology() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="technology" ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl mb-6">
            <span className="text-gradient">Technology & Partners</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Built on trusted, enterprise-grade technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => {
            const Icon = tech.icon
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="card-hover p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-sm text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 gradient-green-blue rounded-xl mb-6">
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="font-heading font-bold text-xl mb-3 text-[#1a1a1a]">
                  {tech.name}
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {tech.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-8 p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200">
            <div className="text-center">
              <div className="font-heading font-bold text-3xl text-gradient mb-1">PCI-DSS</div>
              <div className="text-sm text-gray-600">Compliant</div>
            </div>
            <div className="text-center">
              <div className="font-heading font-bold text-3xl text-gradient mb-1">256-bit</div>
              <div className="text-sm text-gray-600">Encryption</div>
            </div>
            <div className="text-center">
              <div className="font-heading font-bold text-3xl text-gradient mb-1">99.9%</div>
              <div className="text-sm text-gray-600">Uptime</div>
            </div>
            <div className="text-center">
              <div className="font-heading font-bold text-3xl text-gradient mb-1">24/7</div>
              <div className="text-sm text-gray-600">Support</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

