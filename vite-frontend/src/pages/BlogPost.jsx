import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Clock, Calendar, ArrowLeft, Share2, Linkedin, Twitter } from 'lucide-react';
import blogsData from '../data/blogs.json';

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Find post by slug
    const foundPost = blogsData.find(b => b.slug === slug);
    setPost(foundPost);
  }, [slug]);

  if (!post) return <div className="h-screen flex items-center justify-center">Loading...</div>;

  return (
    <article className="bg-white min-h-screen">
      
      {/* Custom Styles for injected HTML content with Mobile Responsiveness */}
      <style>{`
        /* Desktop Defaults */
        .blog-content h2 {
          font-family: 'Domine', serif;
          font-size: 2rem;
          color: #051C2C;
          margin-top: 3rem;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }
        .blog-content p {
          font-family: sans-serif;
          font-size: 1.125rem;
          color: #475569;
          font-weight: 300;
          line-height: 1.8;
          margin-bottom: 2rem;
        }
        .blog-content strong {
          color: #051C2C;
          font-weight: 600;
        }
        .blog-content ul {
          margin-bottom: 2rem;
          padding-left: 1.5rem;
        }
        .blog-content li {
          list-style-type: disc;
          color: #475569;
          margin-bottom: 0.75rem;
          padding-left: 0.5rem;
        }
        
        /* Table Handling */
        .blog-content .table-container {
          width: 100%;
          overflow-x: auto;
          margin: 3rem 0;
          border: 1px solid rgba(5, 28, 44, 0.1);
          -webkit-overflow-scrolling: touch; /* Smooth scroll on iOS */
        }
        .blog-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.9rem;
          min-width: 600px; /* Forces scroll on small screens */
        }
        .blog-table th {
          background-color: #051C2C;
          color: white;
          text-align: left;
          padding: 1rem;
          text-transform: uppercase;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          white-space: nowrap;
        }
        .blog-table td {
          padding: 1rem;
          border-bottom: 1px solid #e2e8f0;
          color: #334155;
        }
        .blog-table tr:last-child td {
          border-bottom: none;
        }

        /* Mobile Adjustments */
        @media (max-width: 768px) {
          .blog-content h2 {
            font-size: 1.5rem;
            margin-top: 2rem;
            margin-bottom: 1rem;
          }
          .blog-content p {
            font-size: 1rem;
            line-height: 1.7;
            margin-bottom: 1.5rem;
          }
          .blog-content ul {
            padding-left: 1rem;
          }
        }
      `}</style>

      {/* --- HEADER --- */}
      <header className="bg-[#051C2C] pt-28 pb-16 md:pt-32 md:pb-24 px-6 lg:px-12 relative overflow-hidden">
         <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
         
         <div className="max-w-4xl mx-auto relative z-10 text-center">
            <a href="/blogs" className="inline-flex items-center text-gray-400 hover:text-white mb-6 md:mb-8 text-xs font-bold uppercase tracking-widest transition-colors">
               <ArrowLeft size={14} className="mr-2" /> Back to Insights
            </a>
            
            <div className="flex items-center justify-center gap-2 mb-6">
               <span className="px-3 py-1 bg-[#155cfc] text-white text-[10px] font-bold uppercase tracking-widest rounded-sm">
                  {post.category}
               </span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-6">
               {post.title}
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-8 md:mb-10 max-w-2xl mx-auto">
               {post.subtitle}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-xs md:text-sm text-gray-400 font-light">
               <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-[#155cfc]" /> {post.date}
               </div>
               <div className="flex items-center gap-2">
                  <Clock size={16} className="text-[#155cfc]" /> {post.readTime}
               </div>
            </div>
         </div>
      </header>

      {/* --- CONTENT GRID --- */}
      <div className="max-w-[1600px] mx-auto px-5 md:px-12 xl:px-16 py-12 md:py-20">
         <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
            
            {/* LEFT SIDEBAR (Author & Summary) */}
            {/* Mobile: Order 1 (Top). Desktop: Order 1 (Left) */}
            <aside className="lg:col-span-3 order-1">
               <div className="sticky top-32 space-y-10">
                  
                  {/* Author Block */}
                  <div className="lg:border-t border-[#051C2C]/10 lg:pt-6">
                     <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 hidden lg:block">Written By</p>
                     <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden shrink-0">
                           <div className="w-full h-full bg-[#051C2C] flex items-center justify-center text-white font-serif text-xl">
                              {post.author.charAt(0)}
                           </div>
                        </div>
                        <div>
                           <h4 className="font-serif text-[#051C2C] text-lg leading-tight">{post.author}</h4>
                           <p className="text-xs text-slate-500 uppercase tracking-wide mt-1">{post.role}</p>
                        </div>
                     </div>
                  </div>

                  {/* Executive Summary Box - Visible on Mobile to give context immediately */}
                  <div className="bg-[#F8F9FA] p-6 border-l-2 border-[#155cfc]">
                     <h4 className="font-serif text-[#051C2C] text-lg mb-4">Key Takeaways</h4>
                     <ul className="space-y-4">
                        {post.content.executiveSummary.map((item, index) => (
                           <li key={index} className="text-sm text-slate-600 font-light leading-relaxed">
                              • {item}
                           </li>
                        ))}
                     </ul>
                  </div>

                  {/* Share Links */}
                  {/* <div className="hidden lg:block">
                     <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Share</p>
                     <div className="flex gap-4">
                        <button className="p-2 border border-gray-200 text-slate-500 hover:text-[#0077b5] hover:border-[#0077b5] transition-colors"><Linkedin size={18} /></button>
                        <button className="p-2 border border-gray-200 text-slate-500 hover:text-black hover:border-black transition-colors"><Twitter size={18} /></button>
                        <button className="p-2 border border-gray-200 text-slate-500 hover:text-[#155cfc] hover:border-[#155cfc] transition-colors"><Share2 size={18} /></button>
                     </div>
                  </div> */}
               </div>
            </aside>

            {/* MAIN CONTENT */}
            {/* Mobile: Order 2. Desktop: Order 2 */}
            <main className="lg:col-span-7 order-2">
               {/* Divider - Hidden on Mobile to save space */}
               <div className="hidden lg:block h-px w-full bg-[#051C2C]/10 mb-12"></div>
               
               {/* Injected HTML Content */}
               <div 
                  className="blog-content"
                  dangerouslySetInnerHTML={{ __html: post.content.bodyHtml }}
               />

               {/* Mobile Share (Bottom of article) */}
               {/* <div className="lg:hidden mt-12 pt-8 border-t border-gray-100">
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Share this article</p>
                  <div className="flex gap-4">
                     <button className="p-3 border border-gray-200 text-slate-500 rounded-sm"><Linkedin size={20} /></button>
                     <button className="p-3 border border-gray-200 text-slate-500 rounded-sm"><Twitter size={20} /></button>
                     <button className="p-3 border border-gray-200 text-slate-500 rounded-sm"><Share2 size={20} /></button>
                  </div>
               </div> */}

               {/* Post Footer */}
               <div className="mt-12 lg:mt-20 pt-10 border-t border-[#051C2C]/10">
                  <p className="text-slate-500 italic text-sm">
                     Disclaimer: This article is for informational purposes only and does not constitute financial or medical advice.
                  </p>
               </div>
            </main>

            {/* RIGHT GUTTER (Empty for editorial spacing on desktop) */}
            <div className="hidden lg:block lg:col-span-2 order-3"></div>
         </div>
      </div>

    </article>
  );
};

export default BlogPost;