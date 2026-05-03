import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PromptDiff — Git for AI Prompts with Performance Tracking',
  description: 'Version control for AI prompts with A/B testing. Track which prompt changes improve output quality and response times. Built for AI teams at startups and agencies.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="a7219b08-083e-4af6-b1b1-f2ea5f9d90d9"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
