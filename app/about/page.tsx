import { generateSiteMetadata } from '@/lib/metadata'
import { Metadata } from 'next'

export const metadata: Metadata = generateSiteMetadata({
  title: 'About',
  description: 'Learn about Vaishnavan, a developer from Sri Lanka building web applications and sharing knowledge.',
})

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-4xl font-bold text-gray-900 dark:text-white">About Me</h1>

      <div className="prose prose-lg max-w-none dark:prose-invert">
        <p className="text-xl text-gray-700 dark:text-gray-300">
          Hi, I'm Vaishnavan, a developer based in Sri Lanka. I'm passionate about building web applications
          and sharing knowledge with the developer community.
        </p>

        <h2 className="mt-12 text-2xl font-bold text-gray-900 dark:text-white">What I Do</h2>
        <p className="text-gray-700 dark:text-gray-300">
          I specialize in modern web development, working primarily with React, Next.js, and TypeScript. My
          focus is on creating fast, accessible, and user-friendly applications. I believe in writing clean,
          maintainable code and following best practices.
        </p>

        <h2 className="mt-12 text-2xl font-bold text-gray-900 dark:text-white">Experience</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Over the years, I've worked on various projects ranging from small personal websites to larger
          applications. I've experience with:
        </p>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
          <li>Frontend development with React and Next.js</li>
          <li>Backend development with Node.js</li>
          <li>TypeScript for type-safe code</li>
          <li>Modern CSS with Tailwind CSS</li>
          <li>SEO optimization and performance tuning</li>
          <li>Deployment and DevOps practices</li>
        </ul>

        <h2 className="mt-12 text-2xl font-bold text-gray-900 dark:text-white">Values</h2>
        <p className="text-gray-700 dark:text-gray-300">
          I believe in continuous learning and sharing knowledge. This website is my way of contributing to the
          developer community by:
        </p>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
          <li>Writing helpful, practical tutorials</li>
          <li>Sharing real-world experiences and solutions</li>
          <li>Creating useful tools for developers</li>
          <li>Providing honest, accurate information</li>
        </ul>

        <h2 className="mt-12 text-2xl font-bold text-gray-900 dark:text-white">Get in Touch</h2>
        <p className="text-gray-700 dark:text-gray-300">
          If you'd like to connect, discuss a project, or just say hello, feel free to{' '}
          <a href="/contact" className="text-blue-600 hover:underline dark:text-blue-400">
            reach out
          </a>
          . I'm always open to interesting conversations and opportunities.
        </p>
      </div>
    </div>
  )
}
