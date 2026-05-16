'use client'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Link from 'next/link'

type LegalMarkdownProps = {
  content: string
}

export default function LegalMarkdown({ content }: LegalMarkdownProps) {
  return (
    <div className="legal-prose">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a: ({ href, children }) => {
            if (href?.startsWith('/')) {
              return (
                <Link href={href} className="text-brand-blue hover:text-brand-green underline">
                  {children}
                </Link>
              )
            }
            return (
              <a
                href={href}
                className="text-brand-blue hover:text-brand-green underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {children}
              </a>
            )
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
