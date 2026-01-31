import Link from 'next/link'
import { Post } from '@/lib/posts'
import { formatDate } from '@/lib/utils'

interface BlogCardProps {
  post: Post
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
      <div className="mb-3 flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span>•</span>
        <span>{post.readingTime} min read</span>
      </div>
      <Link href={`/blog/${post.slug}`}>
        <h2 className="mb-2 text-xl font-semibold text-gray-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
          {post.title}
        </h2>
      </Link>
      <p className="mb-4 text-gray-600 dark:text-gray-400">{post.description}</p>
      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <Link
            key={tag}
            href={`/blog?tag=${tag}`}
            className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
          >
            {tag}
          </Link>
        ))}
      </div>
    </article>
  )
}
