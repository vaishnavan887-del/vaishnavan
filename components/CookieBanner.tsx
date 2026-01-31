'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setShowBanner(false)
    // Load analytics scripts here if needed
    if (typeof window !== 'undefined' && (window as any).gtag) {
      // Google Analytics would be loaded here
    }
  }

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white p-4 shadow-lg dark:bg-gray-900 md:left-auto md:right-4 md:bottom-4 md:max-w-md md:rounded-lg" style={{ willChange: 'transform' }}>
      <div className="flex flex-col space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Cookie Consent
          </h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            We use cookies to enhance your browsing experience, analyze site traffic, and serve
            personalized content. By clicking "Accept", you consent to our use of cookies.{' '}
            <Link
              href="/cookie-policy"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              Learn more
            </Link>
          </p>
        </div>
        <div className="flex space-x-4">
          <button
            onClick={handleAccept}
            className="flex-1 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Accept
          </button>
          <button
            onClick={handleDecline}
            className="flex-1 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  )
}
