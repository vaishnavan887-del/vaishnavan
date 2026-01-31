import { getAllPosts, getAllTags } from '@/lib/posts'
import BlogList from '@/components/BlogList'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Developer blog posts about web development, React, Next.js, and programming tutorials.',
}

export default function BlogPage() {
  const allPosts = getAllPosts()
  const allTags = getAllTags()

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">Blog</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Articles about web development, programming, and technology
        </p>
      </div>

      <BlogList initialPosts={allPosts} allTags={allTags} />
    </div>
  )
}
