import { Metadata } from 'next'
import { Post } from './posts'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vaishnavan.dev'
const siteName = 'Vaishnavan.dev'
const defaultDescription =
  'Developer portfolio and blog by Vaishnavan. Web development, React, Next.js, and programming tutorials.'

export function generateSiteMetadata({
  title,
  description = defaultDescription,
  path = '',
  image,
  type = 'website',
  publishedTime,
  modifiedTime,
  tags,
}: {
  title: string
  description?: string
  path?: string
  image?: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  tags?: string[]
}): Metadata {
  const url = `${siteUrl}${path}`
  const ogImage = image || `${siteUrl}/og-image.jpg`

  return {
    title: title.includes(siteName) ? title : `${title} | ${siteName}`,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type,
      publishedTime,
      modifiedTime,
      tags,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export function generatePostStructuredData(post: Post) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: post.coverImage || `${siteUrl}/og-image.jpg`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: 'Vaishnavan',
      url: siteUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: siteName,
      url: siteUrl,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}/blog/${post.slug}`,
    },
  }
}

export function generateOrganizationStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteName,
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    sameAs: [
      'https://github.com/vaishnavan887-del',
    ],
  }
}

export function generateBreadcrumbStructuredData(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
