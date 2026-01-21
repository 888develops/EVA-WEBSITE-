'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const footerLinks = {
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
  ],
  support: [
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
    { name: 'Support', href: 'mailto:support@energyvehiclealliance.com' },
    { name: 'Help Center', href: '#' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Cookie Policy', href: '#' },
  ],
}

export default function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <footer className="bg-[#1a1a1a] text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="relative w-20 h-20">
                <Image
                  src="/logo.png"
                  alt="EVA Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Powering the future of electric mobility. Connecting EV drivers with charging station hosts for a sustainable tomorrow.
            </p>
            <div className="text-gray-400">
              <p className="mb-2">Need help?</p>
              <a
                href="mailto:support@energyvehiclealliance.com"
                className="text-brand-green hover:text-brand-blue transition-colors"
              >
                support@energyvehiclealliance.com
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-brand-green transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith('mailto:') ? (
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-brand-green transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-brand-green transition-colors duration-300"
                    >
                      {link.name}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-brand-green transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} EVA (Energy Vehicle Alliance). All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Built with ❤️ for the EV community
            </p>
          </div>
          <div className="mt-4 text-center">
            <p className="text-gray-500 text-sm">
              PROJECT EVA LTD&reg;
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

