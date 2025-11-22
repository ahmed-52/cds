import React, { useState } from 'react';
import { ArrowUpRight, Search, Filter } from 'lucide-react';
import blogsData from '../data/blogs.json'; // Adjust path as needed

const BlogCard = ({ slug, category, date, title, subtitle, author, readTime, image }) => (
  <a 
    href={`/blogs/${slug}`} 
    className="group flex flex-col h-full border-b border-[#051C2C]/10 md:border-r border-r-[#051C2C]/10 bg-white hover:bg-gray-50 transition-colors duration-500"
  >
    {/* Image container */}
    <div className="aspect-[16/9] w-full overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-700">
       <img src={image} alt={title} className="w-full h-full object-cover" />
       <div className="absolute inset-0 bg-[#155cfc]/10 opacity-0 group-hover:opacity-100 transition-opacity mix-blend-multiply"></div>
    </div>

    <div className="p-8 flex flex-col flex-grow">
      {/* Meta Data */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-xs font-bold uppercase tracking-widest text-[#155cfc]">
          {category}
        </span>
        <span className="text-xs text-slate-400 font-serif">
          {date}
        </span>
      </div>

      <h3 className="text-2xl font-serif text-[#051C2C] mb-3 group-hover:text-[#155cfc] transition-colors leading-tight">
        {title}
      </h3>
      
      <p className="text-slate-600 text-sm font-light leading-relaxed mb-6 flex-grow line-clamp-3">
        {subtitle}
      </p>

      <div className="pt-6 border-t border-[#051C2C]/10 flex items-center justify-between mt-auto">
         <div className="flex flex-col">
            <span className="text-xs font-bold text-[#051C2C] uppercase tracking-widest">{author}</span>
            <span className="text-[10px] text-slate-400 uppercase tracking-widest">{readTime}</span>
         </div>
         <div className="bg-white border border-[#051C2C]/10 p-2 text-[#051C2C] group-hover:bg-[#155cfc] group-hover:text-white group-hover:border-[#155cfc] transition-all">
            <ArrowUpRight size={16} />
         </div>
      </div>
    </div>
  </a>
);

const Blogs = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'Healthcare & Life Sciences', 'Technology & AI', 'Strategy'];
  
  const filteredBlogs = filter === 'All' 
    ? blogsData 
    : blogsData.filter(blog => blog.category === filter);

  return (
    <div className="bg-white min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-[#051C2C] pt-32 pb-20 lg:pt-40 lg:pb-32 px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.1]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="max-w-[1600px] mx-auto relative z-10">
          <div className="flex items-center gap-4 mb-6">
             <div className="h-px w-12 bg-cornell-red"></div>
             <span className="text-xs font-bold uppercase tracking-widest text-gray-300">Thought Leadership</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-white leading-[1.1] mb-8">
            Insights & <br />
            <span className="italic text-gray-400">Perspectives.</span>
          </h1>
          <p className="text-xl text-gray-300 font-light max-w-2xl leading-relaxed">
            Deep dives into market trends, strategic frameworks, and industry transformations, written by our research teams.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="border-b border-[#051C2C]/10 bg-white sticky top-0 z-30 shadow-sm">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between py-4 gap-4">
           
           <div className="flex items-center gap-6 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-colors ${
                    filter === cat ? 'text-[#155cfc]' : 'text-slate-500 hover:text-[#051C2C]'
                  }`}
                >
                  {cat}
                </button>
              ))}
           </div>

           <div className="hidden md:flex items-center gap-2 border border-[#051C2C]/10 rounded-sm px-3 py-1.5 bg-gray-50">
              <Search size={14} className="text-slate-400" />
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="bg-transparent border-none outline-none text-xs w-48 text-[#051C2C] placeholder:text-slate-400"
              />
           </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="max-w-[1600px] mx-auto border-x border-[#051C2C]/10 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-b border-[#051C2C]/10">
           {filteredBlogs.map((blog) => (
             <BlogCard key={blog.id} {...blog} />
           ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 px-6 text-center bg-gray-50 border-t border-[#051C2C]/10">
        <div className="max-w-xl mx-auto">
           <h3 className="text-3xl font-serif text-[#051C2C] mb-4">Stay Informed</h3>
           <p className="text-slate-600 font-light mb-8">
             Get our latest research and insights delivered directly to your inbox.
           </p>
           <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="flex-1 bg-white border border-[#051C2C]/20 p-4 text-sm outline-none focus:border-[#155cfc]"
              />
              <button className="bg-[#051C2C] text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#155cfc] transition-colors">
                Subscribe
              </button>
           </div>
        </div>
      </section>

    </div>
  );
};

export default Blogs;