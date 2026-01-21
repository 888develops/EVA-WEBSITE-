'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Zap, Users, MapPin, DollarSign } from 'lucide-react'

const coreFunctions = [
  {
    icon: MapPin,
    title: 'Connect Drivers & Hosts',
    description: 'We create a seamless marketplace where EV drivers can easily find and connect with charging station hosts.',
  },
  {
    icon: Zap,
    title: 'Simplify Charging',
    description: 'Make EV charging as simple as booking a ride. Find, book, and pay for charging sessions in one app.',
  },
  {
    icon: DollarSign,
    title: 'Enable Earnings',
    description: 'Help property owners monetize their charging stations and earn income while supporting the EV community.',
  },
  {
    icon: Users,
    title: 'Build Community',
    description: 'Foster a growing network of EV enthusiasts and charging infrastructure to accelerate electric mobility.',
  },
]

export default function WhatWeDo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="what-we-do" ref={ref} className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl mb-6">
            <span className="text-gradient">What We Do</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
            EVA is a comprehensive platform that revolutionizes how electric vehicle drivers find, book, and pay for charging sessions.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We connect two essential groups: <strong>Drivers</strong> who need convenient access to charging stations, and <strong>Hosts</strong> who want to monetize their charging infrastructure. Through our platform, drivers can discover nearby stations, book sessions in advance, navigate with ease, and pay securely. Meanwhile, hosts can list their chargers, set their own pricing, manage bookings, and earn income automatically.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreFunctions.map((func, index) => {
            const Icon = func.icon
            return (
              <motion.div
                key={func.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="card-hover p-6 rounded-2xl bg-white border border-gray-200 shadow-sm text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 gradient-green-blue rounded-xl mb-6">
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="font-heading font-bold text-xl mb-3 text-[#1a1a1a]">
                  {func.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {func.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

