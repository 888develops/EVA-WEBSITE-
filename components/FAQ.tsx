'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqCategories = [
  {
    category: 'General Questions',
    questions: [
      {
        q: 'What is EVA?',
        a: 'EVA (Energy Vehicle Alliance) is a comprehensive platform that connects electric vehicle drivers with charging station hosts. We make it easy for drivers to find, book, and pay for charging sessions, while enabling hosts to monetize their charging stations and earn money.',
      },
      {
        q: 'How does EVA work?',
        a: 'EVA works as a marketplace connecting two types of users: Drivers who need to charge their EVs, and Hosts who have charging stations available. Drivers can search for nearby chargers, book sessions, and pay securely through the app. Hosts can list their chargers, set pricing, manage bookings, and receive payments.',
      },
      {
        q: 'Is EVA available in my area?',
        a: 'EVA is continuously expanding its network of charging stations. You can download the app and check if there are charging stations available in your area. We\'re always adding new hosts and locations.',
      },
      {
        q: 'How much does it cost to use EVA?',
        a: 'Using the EVA app is free for both drivers and hosts. Drivers only pay for the charging sessions they book, and hosts receive payments for their charging services. EVA may charge a small service fee on transactions, which is clearly displayed before booking.',
      },
      {
        q: 'Is EVA safe to use?',
        a: 'Yes, EVA prioritizes safety and security. All payments are processed securely through Stripe, a PCI-compliant payment processor trusted by millions of businesses worldwide. We verify user accounts and provide secure communication channels between drivers and hosts.',
      },
    ],
  },
  {
    category: 'For Drivers',
    questions: [
      {
        q: 'How do I find a charging station?',
        a: 'Simply open the EVA app and use the interactive map to see all available charging stations near you. You can search by location, filter by plug type, charging speed, price, and distance. The app uses your location to show the nearest stations.',
      },
      {
        q: 'What plug types does EVA support?',
        a: 'EVA supports all major EV plug types including: Type 1 (J1772), Type 2 (Mennekes), CCS (Combined Charging System), CHAdeMO, and Tesla Connector. Each charger listing shows which plug types are available at that station.',
      },
      {
        q: 'How do I book a charging session?',
        a: 'Find a charging station on the map, tap on it to see details, select your preferred date and time, and tap "Book Now". For instant booking stations, your booking is confirmed immediately. For stations requiring approval, the host will review and confirm your request.',
      },
      {
        q: 'How do I pay for a charging session?',
        a: 'Payments are processed securely through the app using Stripe. You can add your payment method in the app settings. When you book a session, payment is processed automatically upon confirmation. You\'ll receive a receipt via email.',
      },
      {
        q: 'What payment methods are accepted?',
        a: 'EVA accepts all major credit and debit cards through our secure Stripe payment processing. We support Visa, Mastercard, American Express, and other major card networks.',
      },
      {
        q: 'Can I cancel a booking?',
        a: 'Yes, you can cancel bookings through the app. Cancellation policies vary by host - some offer full refunds for cancellations made before the booking time, while others may have different terms. The cancellation policy is clearly displayed when you book.',
      },
      {
        q: 'What happens if a charger is unavailable when I arrive?',
        a: 'If a charger is unavailable due to a host issue, you should contact the host through the app\'s messaging system. If the issue cannot be resolved, you may be eligible for a refund. Contact EVA support for assistance with unresolved issues.',
      },
      {
        q: 'Does EVA provide navigation to charging stations?',
        a: 'Yes! EVA includes integrated turn-by-turn navigation powered by Mapbox. Once you book a session, you can navigate directly to the charging station with voice-guided directions optimized for EV travel.',
      },
      {
        q: 'How do I know if a charger is available?',
        a: 'The EVA app shows real-time availability status for each charging station. Available stations are clearly marked, and you can see which stations are currently in use. The availability calendar also shows future availability.',
      },
      {
        q: 'Can I see reviews of charging stations?',
        a: 'Yes, you can view reviews and ratings from other drivers for each charging station. This helps you make informed decisions when choosing where to charge.',
      },
    ],
  },
  {
    category: 'For Hosts',
    questions: [
      {
        q: 'How do I become a host on EVA?',
        a: 'To become a host, download the EVA app and create a host account. You\'ll need to provide information about your charging station(s), including location, connector types, charging speeds, and set your pricing. Once approved, your chargers will be listed on the platform.',
      },
      {
        q: 'How much can I earn as a host?',
        a: 'Your earnings depend on your pricing, location, and how often your chargers are used. You set your own pricing per kWh for each connector type. EVA provides analytics to help you track your earnings and optimize your pricing.',
      },
      {
        q: 'How do I set my pricing?',
        a: 'When listing your charger, you can set the price per kWh for each connector type. You can adjust your pricing at any time through the host dashboard. Consider your location, charging speed, and local market rates when setting prices.',
      },
      {
        q: 'How do I receive payments?',
        a: 'Payments are processed automatically through Stripe Connect. You\'ll need to connect your bank account to receive payouts. Payouts are typically processed according to Stripe\'s schedule, and you can track all payments in your earnings dashboard.',
      },
      {
        q: 'Can I choose who can book my charger?',
        a: 'Yes, you can choose between instant booking (anyone can book immediately) or manual approval (you review and approve each booking request). You can also set availability calendars to control when your chargers are available.',
      },
      {
        q: 'What if a driver doesn\'t show up for their booking?',
        a: 'If a driver doesn\'t show up, you can mark the booking as a no-show through the app. Depending on your cancellation policy, you may still receive payment. You can also report issues to EVA support.',
      },
      {
        q: 'How do I manage my charger availability?',
        a: 'Use the availability calendar in your host dashboard to set when your chargers are available. You can block out specific dates, set recurring availability patterns, and quickly toggle availability on or off.',
      },
      {
        q: 'Can I list multiple charging stations?',
        a: 'Yes! You can list multiple charging stations from your host account. Each station can have its own pricing, availability, and settings. Manage all your stations from one dashboard.',
      },
      {
        q: 'What information do I need to provide when listing a charger?',
        a: 'You\'ll need to provide: charger location (address and coordinates), connector types available (Type 1, Type 2, CCS, CHAdeMO, Tesla), charging speeds and power output for each connector, pricing per kWh for each connector, photos of your charging station, and operating hours and availability.',
      },
      {
        q: 'How do I communicate with drivers?',
        a: 'EVA provides an in-app messaging system where you can communicate directly with drivers. You\'ll receive notifications for new messages, booking requests, and other important updates.',
      },
    ],
  },
  {
    category: 'Technical Questions',
    questions: [
      {
        q: 'What devices is the EVA app available on?',
        a: 'EVA is currently available as a mobile app for iOS devices. We\'re working on expanding to Android and other platforms.',
      },
      {
        q: 'Does EVA work offline?',
        a: 'EVA requires an internet connection to search for chargers, make bookings, and process payments. However, once you have navigation directions, you can continue using them with limited connectivity.',
      },
      {
        q: 'How accurate is the charger location data?',
        a: 'EVA uses precise GPS coordinates and mapping technology to ensure accurate charger locations. We also integrate with OpenChargeMap for comprehensive charger data. If you notice any inaccuracies, please report them through the app.',
      },
      {
        q: 'What mapping service does EVA use?',
        a: 'EVA uses Mapbox for mapping and navigation services, providing accurate, real-time maps and turn-by-turn navigation optimized for electric vehicles.',
      },
      {
        q: 'How does EVA ensure data security?',
        a: 'EVA uses industry-standard security measures including encrypted data transmission, secure authentication through Supabase, and PCI-compliant payment processing through Stripe. We never store your full payment card details on our servers.',
      },
    ],
  },
  {
    category: 'Payment Questions',
    questions: [
      {
        q: 'Is my payment information secure?',
        a: 'Absolutely. EVA uses Stripe, a PCI-DSS compliant payment processor trusted by millions of businesses worldwide. Your full card details are never stored on EVA\'s servers - they\'re securely handled by Stripe.',
      },
      {
        q: 'When am I charged for a booking?',
        a: 'Payment is processed automatically when your booking is confirmed. For instant bookings, this happens immediately. For bookings requiring approval, payment is processed once the host accepts your request.',
      },
      {
        q: 'What fees does EVA charge?',
        a: 'EVA may charge a small service fee on transactions, which is clearly displayed before you complete your booking. All fees are transparent and shown upfront - there are no hidden charges.',
      },
      {
        q: 'Can I get a refund?',
        a: 'Refund eligibility depends on the host\'s cancellation policy and the circumstances. If you cancel within the allowed timeframe, you\'ll receive a refund according to the policy. For issues with the charging station, contact EVA support for assistance.',
      },
      {
        q: 'How do hosts receive their earnings?',
        a: 'Hosts receive payments through Stripe Connect, which deposits funds directly to their connected bank account. Payout schedules follow Stripe\'s standard processing times, typically 2-7 business days.',
      },
      {
        q: 'Are there any setup fees for hosts?',
        a: 'No, there are no setup fees to become a host on EVA. You can list your charging station for free and only pay transaction fees when you receive bookings.',
      },
    ],
  },
]

export default function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [openIndex, setOpenIndex] = useState<{ category: number; question: number } | null>(null)

  const toggleQuestion = (categoryIndex: number, questionIndex: number) => {
    if (openIndex?.category === categoryIndex && openIndex?.question === questionIndex) {
      setOpenIndex(null)
    } else {
      setOpenIndex({ category: categoryIndex, question: questionIndex })
    }
  }

  return (
    <section id="faq" ref={ref} className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl mb-6">
            <span className="text-gradient">Frequently Asked Questions</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about EVA
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h3 className="font-heading font-bold text-2xl md:text-3xl mb-6 text-[#1a1a1a]">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.questions.map((item, questionIndex) => {
                  const isOpen = openIndex?.category === categoryIndex && openIndex?.question === questionIndex
                  return (
                    <motion.div
                      key={questionIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.4, delay: categoryIndex * 0.1 + questionIndex * 0.05 }}
                      className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
                    >
                      <button
                        onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                        className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                      >
                        <span className="font-semibold text-[#1a1a1a] pr-4">{item.q}</span>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex-shrink-0"
                        >
                          <ChevronDown className="text-brand-blue" size={24} />
                        </motion.div>
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                              {item.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

