import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import { generateOrganizationStructuredData } from '@/lib/metadata'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Vaishnavan.dev | Developer Portfolio & Blog',
    template: '%s | Vaishnavan.dev',
  },
  description:
    'Developer portfolio and blog by Vaishnavan. Web development, React, Next.js, and programming tutorials.',
  keywords: ['web development', 'React', 'Next.js', 'TypeScript', 'programming', 'tutorials'],
  authors: [{ name: 'Vaishnavan' }],
  creator: 'Vaishnavan',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vaishnavan.dev',
    siteName: 'Vaishnavan.dev',
    title: 'Vaishnavan.dev | Developer Portfolio & Blog',
    description:
      'Developer portfolio and blog by Vaishnavan. Web development, React, Next.js, and programming tutorials.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vaishnavan.dev | Developer Portfolio & Blog',
    description:
      'Developer portfolio and blog by Vaishnavan. Web development, React, Next.js, and programming tutorials.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationData = generateOrganizationStructuredData()

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4764904719103994"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
