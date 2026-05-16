import type { Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LegalMarkdown from '@/components/LegalMarkdown'

export const metadata: Metadata = {
  title: 'Terms and Conditions | EVA - Energy Vehicle Alliance',
  description: 'Terms and Conditions for using the EVA platform, mobile app and website.',
}

export default function TermsAndConditionsPage() {
  const content = fs.readFileSync(
    path.join(process.cwd(), 'content/legal/terms-and-conditions.md'),
    'utf8'
  )

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <article className="pt-24 sm:pt-28 pb-16 sm:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <LegalMarkdown content={content} />
        </div>
      </article>
      <Footer />
    </main>
  )
}
