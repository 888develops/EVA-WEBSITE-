'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Search, Calendar, Navigation, CreditCard, Clock, Map,
  PlusCircle, DollarSign, BarChart3, Wallet, Calendar as CalendarIcon, MessageSquare
} from 'lucide-react'

const driverServices = [
  {
    icon: Search,
    title: 'Find Charging Stations',
    description: 'Discover nearby charging stations with our interactive map and advanced search filters.',
  },
  {
    icon: Calendar,
    title: 'Book Charging Sessions',
    description: 'Reserve your charging slot in advance with our seamless booking system.',
  },
  {
    icon: Navigation,
    title: 'Navigate to Stations',
    description: 'Get turn-by-turn directions optimized for EV travel with integrated navigation.',
  },
  {
    icon: CreditCard,
    title: 'Secure Payments',
    description: 'Pay safely and securely with our Stripe-powered payment processing.',
  },
  {
    icon: Clock,
    title: 'Real-Time Availability',
    description: 'See which stations are available right now with live status updates.',
  },
  {
    icon: Map,
    title: 'Comprehensive Information',
    description: 'Access detailed charger specs, pricing, reviews, and host information.',
  },
]

const hostServices = [
  {
    icon: PlusCircle,
    title: 'List Charging Stations',
    description: 'Easily add your charging stations to the platform with our simple listing process.',
  },
  {
    icon: DollarSign,
    title: 'Set Pricing',
    description: 'Control your pricing per kWh for each connector type and maximize your earnings.',
  },
  {
    icon: CalendarIcon,
    title: 'Manage Bookings',
    description: 'Handle all bookings from one dashboard with flexible approval options.',
  },
  {
    icon: BarChart3,
    title: 'Track Earnings',
    description: 'Monitor your performance with detailed analytics and earnings reports.',
  },
  {
    icon: Wallet,
    title: 'Secure Payouts',
    description: 'Receive payments automatically through Stripe Connect to your bank account.',
  },
  {
    icon: MessageSquare,
    title: 'Communication Tools',
    description: 'Stay connected with drivers through our in-app messaging system.',
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" ref={ref} className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl mb-6">
            <span className="text-gradient">Our Services</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions for both EV drivers and charging station hosts
          </p>
        </motion.div>

        {/* For Drivers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="font-heading font-bold text-3xl md:text-4xl mb-8 text-center text-[#1a1a1a]">
            For Drivers
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {driverServices.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="card-hover p-6 rounded-2xl bg-white border border-gray-200 shadow-sm"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 gradient-green-blue rounded-xl mb-4">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h4 className="font-heading font-bold text-xl mb-3 text-[#1a1a1a]">
                    {service.title}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* For Hosts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="font-heading font-bold text-3xl md:text-4xl mb-8 text-center text-[#1a1a1a]">
            For Hosts
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hostServices.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="card-hover p-6 rounded-2xl bg-white border border-gray-200 shadow-sm"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 gradient-green-blue rounded-xl mb-4">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h4 className="font-heading font-bold text-xl mb-3 text-[#1a1a1a]">
                    {service.title}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

