import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8">
      <h1 className="mb-4 text-6xl font-bold text-gray-900 dark:text-white">404</h1>
      <h2 className="mb-4 text-3xl font-semibold text-gray-900 dark:text-white">Page Not Found</h2>
      <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700"
      >
        Go Home
      </Link>
    </div>
  )
}
