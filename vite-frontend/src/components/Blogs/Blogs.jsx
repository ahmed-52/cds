import React from 'react'
import blogs from '../../data/blogs.json'
import BlogCard from './BlogCard'

const Blogs = () => {
  return (
    <div className="max-w-[1100px] mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-4">Blogs</h1>
      <p className="text-gray-300 mb-8">Latest updates, insights, and member stories from our club.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogs.map((b) => (
          <BlogCard key={b.id} blog={b} />
        ))}
      </div>
    </div>
  )
}

export default Blogs
