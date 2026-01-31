import { generateSiteMetadata } from '@/lib/metadata'
import { Metadata } from 'next'

export const metadata: Metadata = generateSiteMetadata({
  title: 'Developer Tools',
  description: 'Free online developer tools: JSON Formatter, Base64 Encoder/Decoder, UUID Generator, and more.',
})

export default function ToolsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
