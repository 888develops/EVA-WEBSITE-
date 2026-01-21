'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Map, Filter, Zap, DollarSign, Calendar, Navigation2,
  Shield, Bell, Info, Plus, Settings, BarChart, Wallet as WalletIcon,
  Clock, MessageCircle
} from 'lucide-react'

const driverFeatures = [
  {
    icon: Map,
    title: 'Smart Charger Discovery',
    description: 'Interactive map showing all available charging stations in real-time with advanced search functionality.',
    details: [
      'Location-based suggestions',
      'Filter by plug type (Type 1, Type 2, CCS, CHAdeMO, Tesla)',
      'Filter by charging speed (Slow 3-7kW, Fast 7-22kW, Rapid 50-350kW)',
      'Filter by price range and maximum distance',
      'Show only available stations',
      'Sort by nearest, cheapest, fastest, or highest rated',
      'Real-time availability status',
      'Detailed charger information including address, pricing, and connector types',
    ],
  },
  {
    icon: Calendar,
    title: 'Seamless Booking System',
    description: 'One-tap booking for instant stations or request booking for stations requiring host approval.',
    details: [
      'Select date and time for your charging session',
      'View booking confirmations instantly',
      'Manage all your bookings in one place',
      'View booking history and receipts',
      'Cancel bookings according to host policies',
    ],
  },
  {
    icon: Navigation2,
    title: 'Turn-by-Turn Navigation',
    description: 'Integrated Mapbox navigation to guide you to charging stations with EV-optimized routing.',
    details: [
      'Real-time traffic updates and route optimization',
      'Voice-guided turn-by-turn directions',
      'Alternative route options',
      'Estimated arrival time and distance',
      'Battery range considerations for long trips',
    ],
  },
  {
    icon: Shield,
    title: 'Secure Payment Processing',
    description: 'Stripe-powered secure payment system with transparent pricing and automatic processing.',
    details: [
      'Multiple payment methods accepted',
      'All fees displayed upfront',
      'Automatic payment processing at booking confirmation',
      'Receipt generation for all transactions',
      'Payment history and transaction records',
      'Secure PCI-compliant payment handling',
    ],
  },
  {
    icon: Bell,
    title: 'Real-Time Availability',
    description: 'Live status updates for charging stations with instant notifications.',
    details: [
      'See which stations are currently in use',
      'Availability calendar for future bookings',
      'Instant notifications when your booking is confirmed',
      'Alerts for booking changes or cancellations',
    ],
  },
  {
    icon: Info,
    title: 'Comprehensive Charger Information',
    description: 'Detailed charger specifications, pricing, reviews, and host information.',
    details: [
      'Power output and connector types',
      'Pricing per kWh clearly displayed',
      'Host information and ratings',
      'Reviews and ratings from other drivers',
      'Photos of charging stations',
      'Operating hours and availability',
      'Multiple connector support per station',
    ],
  },
]

const hostFeatures = [
  {
    icon: Plus,
    title: 'Easy Charger Listing',
    description: 'Simple step-by-step process to add your charging station with all necessary details.',
    details: [
      'Set your charger location with map integration',
      'Add multiple connectors per station',
      'Specify charging speeds and power output for each connector',
      'Set your own pricing per kWh for each connector type',
      'Add photos and detailed descriptions',
      'Set operating hours and availability',
    ],
  },
  {
    icon: Settings,
    title: 'Flexible Booking Management',
    description: 'Choose between instant booking or manual approval with comprehensive management tools.',
    details: [
      'Receive booking requests and notifications',
      'Accept or decline booking requests',
      'View all bookings (active, upcoming, past)',
      'Manage availability calendar',
      'Set maximum booking duration',
      'Configure cancellation policies',
    ],
  },
  {
    icon: BarChart,
    title: 'Earnings & Analytics Dashboard',
    description: 'Track your earnings and performance with detailed analytics and reports.',
    details: [
      'Daily, weekly, monthly, and total earnings',
      'Detailed earnings breakdown by charger',
      'Transaction history and payment records',
      'Analytics on booking frequency and trends',
      'Performance metrics for each charging station',
      'Earnings trends and growth charts',
      'Export earnings reports',
    ],
  },
  {
    icon: WalletIcon,
    title: 'Payment & Payouts',
    description: 'Secure payment processing through Stripe Connect with automatic payouts.',
    details: [
      'Automatic payouts to your bank account',
      'Transparent fee structure',
      'Payment history and records',
      'Payout schedule information',
      'Bank account management',
    ],
  },
  {
    icon: Clock,
    title: 'Availability Management',
    description: 'Set availability calendar for each charger with flexible scheduling options.',
    details: [
      'Block out dates when chargers are unavailable',
      'Recurring availability patterns',
      'Quick availability toggles',
      'Overstay notifications',
      'Maximum duration settings',
    ],
  },
  {
    icon: MessageCircle,
    title: 'Communication Tools',
    description: 'In-app messaging with drivers and customizable notification preferences.',
    details: [
      'Direct messaging with drivers',
      'Booking notifications and alerts',
      'Payment received notifications',
      'Cancellation alerts',
      'Customizable notification preferences',
    ],
  },
]

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="features" ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl mb-6">
            <span className="text-gradient">Platform Features</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Comprehensive features designed for both drivers and hosts
          </p>
        </motion.div>

        {/* Driver Features */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-heading font-bold text-3xl md:text-4xl mb-12 text-center text-[#1a1a1a]"
          >
            For Drivers
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-8">
            {driverFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="card-hover p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-sm"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 gradient-green-blue rounded-xl mb-6">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h4 className="font-heading font-bold text-2xl mb-3 text-[#1a1a1a]">
                    {feature.title}
                  </h4>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start text-gray-600">
                        <Zap className="w-5 h-5 text-brand-green mr-2 mt-0.5 flex-shrink-0" size={16} />
                        <span className="text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Host Features */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-heading font-bold text-3xl md:text-4xl mb-12 text-center text-[#1a1a1a]"
          >
            For Hosts
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-8">
            {hostFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="card-hover p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-sm"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 gradient-green-blue rounded-xl mb-6">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h4 className="font-heading font-bold text-2xl mb-3 text-[#1a1a1a]">
                    {feature.title}
                  </h4>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start text-gray-600">
                        <Zap className="w-5 h-5 text-brand-green mr-2 mt-0.5 flex-shrink-0" size={16} />
                        <span className="text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

