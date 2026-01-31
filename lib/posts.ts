import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { slugify } from './utils'

export interface Post {
  slug: string
  title: string
  date: string
  description: string
  tags: string[]
  coverImage?: string
  content: string
  readingTime: number
  excerpt: string
}

const postsDirectory = path.join(process.cwd(), 'content/posts')

export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter((name) => name.endsWith('.mdx'))
    .map((fileName) => {
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      const slug = data.slug || slugify(fileName.replace(/\.mdx$/, ''))
      const readingTimeResult = readingTime(content)

      return {
        slug,
        title: data.title || 'Untitled',
        date: data.date || new Date().toISOString(),
        description: data.description || '',
        tags: Array.isArray(data.tags) ? data.tags : [],
        coverImage: data.coverImage,
        content,
        readingTime: Math.ceil(readingTimeResult.minutes),
        excerpt: data.excerpt || content.substring(0, 200).replace(/#/g, '').trim() + '...',
      }
    })

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getPostBySlug(slug: string): Post | null {
  const allPosts = getAllPosts()
  return allPosts.find((post) => post.slug === slug) || null
}

export function getPostsByTag(tag: string): Post[] {
  const allPosts = getAllPosts()
  return allPosts.filter((post) => post.tags.includes(tag))
}

export function getAllTags(): string[] {
  const allPosts = getAllPosts()
  const tags = new Set<string>()
  allPosts.forEach((post) => {
    post.tags.forEach((tag) => tags.add(tag))
  })
  return Array.from(tags).sort()
}

export function getRelatedPosts(currentSlug: string, limit: number = 3): Post[] {
  const currentPost = getPostBySlug(currentSlug)
  if (!currentPost) return []

  const allPosts = getAllPosts()
  const related = allPosts
    .filter((post) => post.slug !== currentSlug)
    .map((post) => {
      const commonTags = post.tags.filter((tag) => currentPost.tags.includes(tag))
      return { post, score: commonTags.length }
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.post)

  // If not enough related posts, fill with recent posts
  if (related.length < limit) {
    const recent = allPosts
      .filter((post) => post.slug !== currentSlug && !related.find((r) => r.slug === post.slug))
      .slice(0, limit - related.length)
    related.push(...recent)
  }

  return related
}
