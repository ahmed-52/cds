import React from 'react';

const WhoWeAre = () => {
  return (
    <main className='max-w-[1600px] mx-auto bg-white'>
      
      {/* SECTION 1: IDENTITY */}
      <section className="grid lg:grid-cols-2 border-b border-[#051C2C]/10">
        {/* Text Side */}
        <div className="p-8 lg:p-20 flex flex-col justify-center border-r border-[#051C2C]/10">
          <div className="flex items-center gap-4 mb-8">
             <div className="h-px w-8 bg-[#051C2C]"></div>
             <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Identity</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-serif text-[#051C2C] mb-8 leading-tight">
            Who we are
          </h1>
          <p className="text-lg text-slate-600 font-light leading-relaxed">
            At Cornell Data Strategy, we're a diverse collective of analytical problem-solvers who transform complex data into actionable business strategies. We bring together technical expertise and business acumen to uncover the narratives hidden within numbers. United by curiosity and collaborative spirit, we forge partnerships that deliver work that matters—not just executing projects, but fundamentally changing how organizations leverage their data.
          </p>
        </div>

        {/* Image Side */}
        <div id='who-we-are' className="relative h-full min-h-[400px]">
          <img 
            src="/images/groupphoto.png" 
            alt="Cornell Data Strategy Team" 
            className="absolute inset-0 w-full h-full object-cover transition-all duration-700" 
          />
        </div>
      </section>

      {/* SECTION 2: CULTURE (Grid Layout) */}
      <section className="border-b border-[#051C2C]/10">
        <div className="p-8 lg:p-12 text-center border-b border-[#051C2C]/10">
           <h2 className="text-3xl md:text-4xl font-serif text-[#051C2C]">Non-stop Collaborative Culture</h2>
        </div>
        
        {/* Strict 4-column Grid with borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {[
            "/images/adilucio.jpg",
            "/images/collab.jpg",
            "/images/jimmy.jpg",
            "/images/paul.jpg"
          ].map((src, idx) => (
            <div key={idx} className="aspect-[4/5] relative group overflow-hidden border-r border-b lg:border-b-0 border-[#051C2C]/10 last:border-r-0">
               <img 
                 src={src} 
                 alt={`Culture ${idx}`} 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
               />
               <div className="absolute inset-0 bg-[#051C2C]/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: JOURNEY */}

    </main>
  );
}

export default WhoWeAre;