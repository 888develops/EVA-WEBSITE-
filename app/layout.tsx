import type { Metadata } from 'next'
import { Inter, Orbitron } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const orbitron = Orbitron({ 
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'EVA - Energy Vehicle Alliance | Powering the Future of Electric Mobility',
  description: 'EVA connects electric vehicle drivers with charging station hosts. Find, book, and pay for EV charging sessions with ease.',
  keywords: 'EV charging, electric vehicle, charging stations, EV network, electric mobility',
  openGraph: {
    title: 'EVA - Energy Vehicle Alliance',
    description: 'Powering the Future of Electric Mobility',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${orbitron.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  )
}

