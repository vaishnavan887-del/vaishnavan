'use client'

import { useState, useMemo } from 'react'
import { Post } from '@/lib/posts'
import BlogCard from '@/components/BlogCard'
import SearchBar from '@/components/SearchBar'
import TagFilter from '@/components/TagFilter'

interface BlogListProps {
  initialPosts: Post[]
  allTags: string[]
}

export default function BlogList({ initialPosts, allTags }: BlogListProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  const filteredPosts = useMemo(() => {
    let filtered = initialPosts

    // Filter by tag
    if (selectedTag) {
      filtered = filtered.filter((post) => post.tags.includes(selectedTag))
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.description.toLowerCase().includes(query) ||
          post.tags.some((tag) => tag.toLowerCase().includes(query))
      )
    }

    return filtered
  }, [initialPosts, selectedTag, searchQuery])

  return (
    <>
      <div className="mb-8 space-y-4">
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
        <TagFilter tags={allTags} selectedTag={selectedTag} onTagSelect={setSelectedTag} />
      </div>

      {filteredPosts.length === 0 ? (
        <div className="py-12 text-center">
          <p className="text-gray-600 dark:text-gray-400">No posts found. Try a different search or tag.</p>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </>
  )
}
