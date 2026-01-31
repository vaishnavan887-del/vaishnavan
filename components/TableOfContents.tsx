'use client'

import { useEffect, useState } from 'react'

interface Heading {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  content: string
}

export default function TableOfContents({ content }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<Heading[]>([])
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    // Extract headings from content (simplified - in production, parse MDX properly)
    const headingRegex = /^(#{1,6})\s+(.+)$/gm
    const matches = Array.from(content.matchAll(headingRegex))
    const extractedHeadings: Heading[] = matches.map((match) => {
      const level = match[1].length
      const text = match[2]
      const id = text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
      return { id, text, level }
    })
    setHeadings(extractedHeadings)
  }, [content])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0% -35% 0%' }
    )

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id)
      if (element) observer.observe(element)
    })

    return () => {
      headings.forEach((heading) => {
        const element = document.getElementById(heading.id)
        if (element) observer.unobserve(element)
      })
    }
  }, [headings])

  if (headings.length === 0) return null

  return (
    <nav className="sticky top-24 rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900">
      <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-900 dark:text-white">
        Table of Contents
      </h2>
      <ul className="space-y-2">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              aria-label={`Jump to section: ${heading.text}`}
              className={`block text-sm transition-colors ${
                heading.level === 1
                  ? 'font-semibold text-gray-900 dark:text-white'
                  : heading.level === 2
                    ? 'ml-4 font-medium text-gray-700 dark:text-gray-300'
                    : 'ml-8 text-gray-600 dark:text-gray-400'
              } ${
                activeId === heading.id
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
