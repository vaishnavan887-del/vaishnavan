import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'
import BlogCard from '@/components/BlogCard'
import { generateSiteMetadata } from '@/lib/metadata'
import { Metadata } from 'next'

export const metadata: Metadata = generateSiteMetadata({
  title: 'Vaishnavan.dev | Developer Portfolio & Blog',
  description:
    'Developer portfolio and blog by Vaishnavan. Web development, React, Next.js, and programming tutorials.',
})

export default function HomePage() {
  const latestPosts = getAllPosts().slice(0, 6)

  return (
    <>
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="mb-6 text-5xl font-bold text-gray-900 dark:text-white md:text-6xl">
            Hi, I'm Vaishnavan
          </h1>
          <p className="mb-8 text-xl text-gray-600 dark:text-gray-400 md:text-2xl">
            A developer from Sri Lanka building web applications and sharing knowledge
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/blog"
              className="rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700"
            >
              Read Blog
            </Link>
            <Link
              href="/about"
              className="rounded-lg border border-gray-300 bg-white px-6 py-3 text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-16 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-white">
            What I Do
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
              <div className="mb-4 text-4xl">💻</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">Web Development</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Building modern web applications with React, Next.js, and TypeScript. Focus on performance,
                accessibility, and user experience.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
              <div className="mb-4 text-4xl">📝</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">Technical Writing</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Sharing knowledge through blog posts and tutorials. Helping developers learn and grow in their
                careers.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
              <div className="mb-4 text-4xl">🛠️</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">Developer Tools</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Creating useful tools and utilities for developers. Making common tasks easier and more efficient.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Latest Posts</h2>
          <Link
            href="/blog"
            className="text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            View All →
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {latestPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-gray-50 py-16 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">Why Trust This Site</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="mb-4 text-4xl font-bold text-blue-600 dark:text-blue-400">100%</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">Original Content</h3>
              <p className="text-gray-600 dark:text-gray-400">
                All articles are original, written from experience and research
              </p>
            </div>
            <div>
              <div className="mb-4 text-4xl font-bold text-blue-600 dark:text-blue-400">Regular</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">Updated Content</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Articles are regularly updated to reflect current best practices
              </p>
            </div>
            <div>
              <div className="mb-4 text-4xl font-bold text-blue-600 dark:text-blue-400">Free</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">Always Free</h3>
              <p className="text-gray-600 dark:text-gray-400">
                All content and tools are free to use, no paywalls or restrictions
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
