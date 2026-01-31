import { getAllPosts } from '@/lib/posts'
import { NextResponse } from 'next/server'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vaishnavan.dev'

export async function GET() {
  const posts = getAllPosts().slice(0, 20) // Latest 20 posts

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Vaishnavan.dev</title>
    <link>${siteUrl}</link>
    <description>Developer portfolio and blog by Vaishnavan. Web development, React, Next.js, and programming tutorials.</description>
    <language>en-us</language>
    <managingEditor>vaishnavan268@gmail.com (Vaishnavan)</managingEditor>
    <webMaster>vaishnavan268@gmail.com (Vaishnavan)</webMaster>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
    ${posts
      .map(
        (post) => `    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${siteUrl}/blog/${post.slug}</link>
      <guid>${siteUrl}/blog/${post.slug}</guid>
      <description><![CDATA[${post.description}]]></description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <author>vaishnavan268@gmail.com (Vaishnavan)</author>
    </item>`
      )
      .join('\n')}
  </channel>
</rss>`

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  })
}
