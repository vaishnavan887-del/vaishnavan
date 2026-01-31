const createMDX = require('@next/mdx')
const remarkGfm = require('remark-gfm')
const rehypeHighlight = require('rehype-highlight')
const rehypeSlug = require('rehype-slug')
const rehypeAutolinkHeadings = require('rehype-autolink-headings')

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
  images: {
    domains: [],
  },
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'wrap',
          properties: {
            className: ['anchor'],
          },
        },
      ],
      rehypeHighlight,
    ],
  },
})

module.exports = withMDX(nextConfig)
