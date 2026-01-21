import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import WhatWeDo from '@/components/WhatWeDo'
import Services from '@/components/Services'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import Benefits from '@/components/Benefits'
import FAQ from '@/components/FAQ'
import Technology from '@/components/Technology'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <WhatWeDo />
      <Services />
      <Features />
      <HowItWorks />
      <Benefits />
      <FAQ />
      <Technology />
      <CTA />
      <Footer />
    </main>
  )
}

