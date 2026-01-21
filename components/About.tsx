'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl mb-6">
            <span className="text-gradient">Who We Are</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            EVA (Energy Vehicle Alliance) is a comprehensive EV charging platform that revolutionizes how electric vehicle drivers find, book, and pay for charging sessions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-heading font-bold text-3xl mb-4 text-[#1a1a1a]">Our Mission</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              To make electric vehicle charging accessible, convenient, and profitable for everyone. We're building a network that connects drivers with hosts, creating a sustainable ecosystem for the future of mobility.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              We believe that the transition to electric vehicles should be seamless, and that starts with making charging infrastructure readily available wherever drivers need it.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="font-heading font-bold text-3xl mb-4 text-[#1a1a1a]">Our Vision</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              We envision a world where every electric vehicle driver can easily find and access charging stations, and every property owner can contribute to the EV charging network while earning income.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              By connecting drivers and hosts through our platform, we're accelerating the adoption of electric vehicles and building the infrastructure needed for a sustainable future.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

