import React from 'react'

const BlogCard = ({ blog }) => {
  return (
    <a href={`/blogs/${blog.slug}`} className="block border border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition-shadow bg-[#0f1724]">
      <div className="w-full h-48 overflow-hidden">
        <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <div className="text-sm text-gray-400">{blog.date} · {blog.author}</div>
        <h3 className="text-xl font-semibold mt-2">{blog.title}</h3>
        <p className="text-gray-300 mt-2">{blog.excerpt}</p>
        <div className="mt-3 text-sm text-blue-400">Read more →</div>
      </div>
    </a>
  )
}

export default BlogCard
