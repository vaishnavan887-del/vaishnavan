import { generateSiteMetadata } from '@/lib/metadata'
import { Metadata } from 'next'

export const metadata: Metadata = generateSiteMetadata({
  title: 'Contact',
  description: 'Get in touch with Vaishnavan. Send a message or connect on social media.',
})

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
