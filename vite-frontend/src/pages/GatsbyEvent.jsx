import React, { useState, useEffect } from 'react';

const GatsbyEvent = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [splineLoaded, setSplineLoaded] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Load the Spline viewer script
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.10.19/build/spline-viewer.js';
    script.onload = () => {
      console.log('Spline viewer script loaded');
      setSplineLoaded(true);
    };
    script.onerror = () => {
      console.error('Failed to load Spline viewer script');
    };
    
    // Only add script if not already present
    if (!document.querySelector('script[src*="@splinetool/viewer@1.10.19"]')) {
      document.head.appendChild(script);
    } else {
      setSplineLoaded(true);
    }
    
    return () => {
      // Cleanup: remove script when component unmounts
      const existingScript = document.querySelector('script[src*="@splinetool/viewer@1.10.19"]');
      if (existingScript && existingScript.parentNode) {
        existingScript.parentNode.removeChild(existingScript);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrollTop = window.pageYOffset;
      const progress = Math.min(scrollTop / documentHeight, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate background color based on scroll
  const getBackgroundColor = () => {
    const r = Math.floor(5 + (scrollProgress * 200)); // 5 to 205
    const g = Math.floor(4 + (scrollProgress * 100)); // 4 to 104
    const b = Math.floor(4 + (scrollProgress * 50));  // 4 to 54
    return `rgb(${r}, ${g}, ${b})`;
  };

  return (
    <div 
      className="global-background"
      style={{ 
        background: `linear-gradient(to bottom, #050404 0%, ${getBackgroundColor()} 100%)`
      }}
    >
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Montserrat:wght@300;400;500;600;700&family=Great+Vibes&display=swap');
        
        :root {
          --black: #050404;
          --gold-primary: #CBA45A;
          --gold-soft: #B99745;
          --white-warm: #F6F2E8;
          --gold-glow: rgba(255,210,140,0.25);
          --panel-bg: rgba(0,0,0,0.25);
        }
        
        .global-background {
          position: relative;
          min-height: 100vh;
        }
        
        .section-title {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 700;
          color: var(--gold-primary);
          text-shadow: 0 0 12px var(--gold-glow);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          text-align: center;
        }
        
        .section-subtitle {
          font-family: 'Cormorant Garamond', serif;
          font-variant: small-caps;
          color: var(--gold-primary);
          letter-spacing: 0.1em;
        }
        
        .body-text {
          font-family: 'Cormorant Garamond', serif;
          color: var(--white-warm);
          font-weight: 400;
          letter-spacing: 0.02em;
        }
        
        .deco-panel {
          background: transparent;
          position: relative;
        }
        
        .deco-divider {
          height: 1px;
          background: linear-gradient(to right, transparent, var(--gold-primary) 20%, var(--gold-primary) 80%, transparent);
          margin: 24px 0;
        }
        
        .deco-divider-double {
          height: 2px;
          background: 
            linear-gradient(to right, transparent, var(--gold-primary) 15%, var(--gold-primary) 50%, var(--gold-primary) 85%, transparent),
            linear-gradient(to right, transparent, var(--gold-primary) 15%, var(--gold-primary) 50%, var(--gold-primary) 85%, transparent);
          background-size: 100% 1px;
          background-position: top, bottom;
          background-repeat: no-repeat;
          margin: 24px 0;
        }
        
        .fading-line {
          height: 1px;
          background: linear-gradient(to right, transparent, var(--gold-primary) 30%, var(--gold-primary) 70%, transparent);
          margin: 16px 0;
        }
        
        .timeline-spine {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, var(--gold-primary), rgba(203, 164, 90, 0.8), var(--gold-primary));
          box-shadow: 0 0 8px rgba(203, 164, 90, 0.4);
        }
        
        .timeline-node {
          position: absolute;
          left: 0;
          width: 12px;
          height: 12px;
          background: var(--gold-primary);
          transform: translateX(-50%) rotate(45deg);
          box-shadow: 0 0 12px rgba(203, 164, 90, 0.6);
        }
        
        .menu-plaque {
          background: transparent;
          position: relative;
        }
        
        .mini-deco-card {
          background: transparent;
        }
        
        .cta-button {
          display: inline-block;
          padding: 12px 32px;
          border: 1.2px solid var(--gold-primary);
          background: transparent;
          color: var(--gold-primary);
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          transition: all 0.3s ease;
          cursor: pointer;
          text-decoration: none;
        }
        
        .cta-button:hover {
          box-shadow: 0 0 20px rgba(203, 164, 90, 0.4);
          background: rgba(203, 164, 90, 0.1);
        }
      `}</style>

      {/* Hero Section */}
      <div className="relative w-full" style={{ height: '100vh', zIndex: 2 }}>
        {splineLoaded ? (
          isMobile ? (
            // @ts-expect-error Spline viewer is a custom element not recognized by TypeScript
            <spline-viewer 
              url="https://prod.spline.design/x6d4J-NPhzoA-sKp/scene.splinecode" 
              style={{ width: '100%', height: '100%', background: '#000000' }}
              className="w-full h-full"
            />
          ) : (
            // @ts-expect-error Spline viewer is a custom element not recognized by TypeScript
            <spline-viewer 
              url="https://prod.spline.design/xpuiLeKRLjt5giCW/scene.splinecode" 
              style={{ width: '100%', height: '100%', background: '#000000' }}
              className="w-full h-full"
            />
          )
        ) : (
          <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: '#000000' }}>
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
              <p className="text-white font-medium">Loading...</p>
            </div>
          </div>
        )}
      </div>

      {/* About the Host Section */}
      <section className="relative py-32 z-10" style={{ padding: '120px 0' }}>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <h2 className="section-title text-5xl md:text-7xl mb-12">
            About the Host
          </h2>
          <div className="deco-divider max-w-2xl mx-auto mb-16"></div>
          
          <div className="text-center">
            <div className="fading-line max-w-4xl mx-auto mb-12"></div>
            <p className="body-text text-lg md:text-xl leading-relaxed mb-10 max-w-4xl mx-auto">
              Cornell Data Strategy is a student-led analytics and consulting organization committed to transforming data into meaningful impact. Our teams partner with real-world clients, student groups, and campus initiatives to solve complex challenges through data-driven insights, thoughtful design, and innovative technology.
            </p>
            <a href="/" className="cta-button">
              Visit Our Homepage
            </a>
            <div className="fading-line max-w-4xl mx-auto mt-12"></div>
          </div>
        </div>
      </section>

      {/* Evening Timeline Section */}
      <section className="relative py-32 z-10" style={{ padding: '60px 0 120px 0' }}>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <h2 className="section-title text-5xl md:text-7xl mb-12">
            Evening Timeline
          </h2>
          <div className="deco-divider max-w-2xl mx-auto mb-20"></div>
          
          <div className="relative pl-12 md:pl-16">
            <div className="timeline-spine"></div>
            
            <div className="space-y-16">
              {[
                { time: '7:00 PM', title: 'Doors Open', desc: 'Welcome to the Great Gatsby Social' },
                { time: '7:00 PM', title: 'Poker Begins', desc: 'Join the poker tables and start playing' },
                { time: '7:30 PM – 8:30 PM', title: 'Live Jazz Music', desc: 'Enjoy smooth rhythms from our live jazz group' },
                { time: '7:30 PM', title: 'Food Service Opens', desc: 'Indulge in our curated selection of small bites and treats' },
                { time: '8:30 PM', title: 'Poker Ends', desc: 'Final hands and chip collection' },
                { time: '8:45 PM', title: 'Winners Announced', desc: 'Join us for the grand prize announcements' },
                { time: '9:00 PM', title: 'Event Concludes', desc: 'Thank you for joining us at the Great Gatsby Social' }
              ].map((item, idx) => (
                <div key={idx} className="relative flex flex-col md:flex-row items-start gap-6 md:gap-8 pl-8">
                  <div className="timeline-node" style={{ top: '0.5rem' }}></div>
                  
                  <div className="flex-shrink-0 w-40">
                    <p className="section-subtitle text-lg md:text-xl font-semibold">
                      {item.time}
                    </p>
                  </div>
                  
                  <div className="flex-1">
                    <h3 
                      className="text-2xl md:text-3xl font-bold mb-3"
                      style={{ 
                        fontFamily: "'Cormorant Garamond', serif",
                        color: 'var(--gold-primary)',
                        textShadow: '0 0 12px var(--gold-glow)',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase'
                      }}
                    >
                      {item.title}
                    </h3>
                    <p className="body-text text-base md:text-lg leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tonight's Menu Section */}
      <section className="relative py-32 z-10" style={{ padding: '60px 0 120px 0' }}>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="section-title text-5xl md:text-7xl mb-12">
            Tonight's Menu
          </h2>
          <div className="deco-divider max-w-2xl mx-auto mb-20"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { title: 'Mocktail Bar', items: ['Pineapple Smash Mocktail', 'Elderflower Lemonade Mocktail'] },
              { title: 'Small Bites', items: ['Mushroom Arancini', 'Chicken Skewers', 'Mini Beef Wellington', 'Spanakopita', 'Wild Mushroom Tart'] },
              { title: 'Sweet Treats', items: ['Petite Cheesecakes', 'Dessert Bars'] }
            ].map((category, idx) => (
              <div key={idx} className="menu-plaque p-10 text-center">
                <h3 
                  className="text-2xl md:text-3xl font-bold mb-6"
                  style={{ 
                    fontFamily: "'Cormorant Garamond', serif",
                    color: 'var(--gold-primary)',
                    textShadow: '0 0 12px var(--gold-glow)',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase'
                  }}
                >
                  {category.title}
                </h3>
                
                <div className="fading-line mb-6"></div>
                
                <ul className="space-y-4 text-lg">
                  {category.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="body-text" style={{ letterSpacing: '0.03em' }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Raffle / Poker & Chips System Section */}
      <section className="relative py-32 z-10" style={{ padding: '60px 0 120px 0' }}>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <h2 className="section-title text-5xl md:text-7xl mb-12">
            Poker & Chips System
          </h2>
          <div className="deco-divider max-w-2xl mx-auto mb-20"></div>
          
          <div className="p-12 md:p-16">
            <div className="fading-line mb-12"></div>
            
            {/* Ticket Price */}
            <div className="text-center mb-16">
              <p 
                className="text-3xl md:text-4xl font-bold mb-8"
                style={{ 
                  fontFamily: "'Cormorant Garamond', serif",
                  color: 'var(--gold-primary)',
                  textShadow: '0 0 12px var(--gold-glow)',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase'
                }}
              >
                Ticket Price: 300 Chips
              </p>
              <div className="fading-line max-w-md mx-auto"></div>
            </div>
            
            <div className="space-y-12">
              {/* How It Works */}
              <div>
                <div className="fading-line mb-6"></div>
                <h3 
                  className="text-2xl md:text-3xl font-bold mb-6"
                  style={{ 
                    fontFamily: "'Cormorant Garamond', serif",
                    color: 'var(--gold-primary)',
                    textShadow: '0 0 12px var(--gold-glow)',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase'
                  }}
                >
                  How It Works
                </h3>
                <p className="body-text text-lg leading-relaxed mb-6">
                  Upon entry, you will be given <strong style={{ color: 'var(--gold-primary)' }}>2 raffle tickets</strong>. One ticket can be traded to get <strong style={{ color: 'var(--gold-primary)' }}>500 chips</strong> (one poker buy-in). You can either choose to keep your tickets or use one to buy-in to a poker game.
                </p>
                <p className="body-text text-lg leading-relaxed">
                  <strong style={{ color: 'var(--gold-primary)' }}>Every 30 minutes</strong>, we will be giving out one raffle ticket to each person, so make sure to get yours!
                </p>
              </div>
            </div>
            
            <div className="fading-line mt-12"></div>
          </div>
        </div>
      </section>

      {/* Raffle Prizes Section */}
      <section className="relative py-32 z-10" style={{ padding: '0 0 120px 0' }}>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="section-title text-5xl md:text-7xl mb-20">
            Raffle Prizes
          </h2>
          
          <div className="relative">
            {/* Vertical columns only on desktop */}
            <div 
              className="hidden md:block absolute left-1/3 top-0 bottom-0 w-0.5"
              style={{ 
                background: 'linear-gradient(to bottom, transparent, var(--gold-primary), transparent)',
                transform: 'translateX(-50%)'
              }}
            ></div>
            <div 
              className="hidden md:block absolute right-1/3 top-0 bottom-0 w-0.5"
              style={{ 
                background: 'linear-gradient(to bottom, transparent, var(--gold-primary), transparent)',
                transform: 'translateX(50%)'
              }}
            ></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { title: 'Poker Set', desc: '500 Piece Set' },
                { title: 'NYC Skyline', desc: 'Lego Set' },
                { title: 'Gatsby Surprise', desc: 'Mystery Prize' }
              ].map((prize, idx) => (
                <div key={idx} className="text-center relative">
                  <div className="fading-line mb-8"></div>
                  
                  <h3 
                    className="text-2xl md:text-3xl font-bold mb-4"
                    style={{ 
                      fontFamily: "'Cormorant Garamond', serif",
                      color: '#000000',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase'
                    }}
                  >
                    {prize.title}
                  </h3>
                  <p 
                    className="text-lg"
                    style={{ 
                      fontFamily: "'Cormorant Garamond', serif",
                      color: '#000000',
                      letterSpacing: '0.05em'
                    }}
                  >
                    {prize.desc}
                  </p>
                  
                  <div className="fading-line mt-8"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <GatsbyQuiz />
    </div>
  );
};


const GatsbyQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isWrong, setIsWrong] = useState(false);

  const questions = [
    {
      question: "What color is the light at the end of Daisy's dock?",
      options: ["Gold", "Green", "Red", "Blue"],
      answer: 1
    },
    {
      question: "What does Gatsby call everyone?",
      options: ["Old Sport", "Chap", "Pal", "Brother"],
      answer: 0
    },
    {
      question: "Who narrates The Great Gatsby?",
      options: ["Jay Gatsby", "Tom Buchanan", "Nick Carraway", "Daisy Buchanan"],
      answer: 2
    },
    {
      question: "In which era does the story take place?",
      options: ["The Gilded Age", "The Roaring Twenties", "The Great Depression", "The Victorian Era"],
      answer: 1
    },
    {
      question: "Who is the author of The Great Gatsby?",
      options: ["Ernest Hemingway", "William Faulkner", "F. Scott Fitzgerald", "John Steinbeck"],
      answer: 2
    },
    {
      question: "What is the area where the Wilsons live called?",
      options: ["The Valley of Ashes", "East Egg", "West Egg", "Queens"],
      answer: 0
    },
    {
      question: "What symbolism is associated with the 'Eyes of Dr. T.J. Eckleburg'?",
      options: ["Wealth", "God staring down", "Love", "Jealousy"],
      answer: 1
    }
  ];

  const handleOptionClick = (index) => {
    setSelectedOption(index);
    setIsWrong(false);
    
    if (index === questions[currentQuestion].answer) {
      // Correct answer
      setTimeout(() => {
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(curr => curr + 1);
          setSelectedOption(null);
        } else {
          setCompleted(true);
        }
      }, 600);
    } else {
      // Wrong answer animation
      setIsWrong(true);
    }
  };

  if (completed) {
    return (
      <section className="relative py-20 z-10 px-6">
        <div className="max-w-md mx-auto p-1" style={{ background: 'linear-gradient(45deg, #CBA45A, #F6F2E8, #CBA45A)' }}>
          <div className="bg-black p-8 md:p-12 text-center border border-[#CBA45A] h-full flex flex-col items-center justify-center">
            
            {/* Green Check Animation */}
            <div className="mb-8 relative">
              <div className="w-24 h-24 rounded-full border-4 border-[#00ff88] flex items-center justify-center shadow-[0_0_20px_rgba(0,255,136,0.4)]">
                <svg className="w-12 h-12 text-[#00ff88]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#00ff88]" 
                style={{ fontFamily: "'Cinzel Decorative', serif", letterSpacing: '0.1em' }}>
              ACCESS GRANTED
            </h2>
            
            <div className="h-px w-full bg-[#CBA45A] mb-6 opacity-50"></div>
            
            <p className="text-[#F6F2E8] text-xl mb-2 font-serif">
              You have passed the test.
            </p>
            <p className="text-[#CBA45A] text-lg font-bold uppercase tracking-widest animate-pulse">
              Show this screen to staff<br/>to redeem your ticket.
            </p>

            <div className="mt-8 text-xs text-gray-500 uppercase tracking-[0.2em]">
              Cornell Data Strategy
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-32 z-10 px-6" id="quiz">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4" 
              style={{ fontFamily: "'Cormorant Garamond', serif", color: '#CBA45A' }}>
            The Gatsby Trivia
          </h2>
          <p className="text-[#F6F2E8] italic font-serif">Question {currentQuestion + 1} of {questions.length}</p>
        </div>

        {/* Quiz Card */}
        <div className="relative p-1" style={{ background: 'linear-gradient(180deg, rgba(203, 164, 90, 0.3) 0%, rgba(0,0,0,0) 100%)' }}>
          <div className="bg-black/80 backdrop-blur-sm border border-[#CBA45A]/30 p-8 md:p-12">
            
            <h3 className="text-2xl md:text-3xl text-center mb-10 text-[#F6F2E8]" 
                style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              {questions[currentQuestion].question}
            </h3>

            <div className="grid grid-cols-1 gap-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionClick(index)}
                  className={`
                    relative p-4 border transition-all duration-300 text-lg font-serif tracking-wide
                    ${selectedOption === index 
                      ? (index === questions[currentQuestion].answer 
                          ? 'bg-[#CBA45A] text-black border-[#CBA45A]' 
                          : 'bg-red-900/30 text-red-200 border-red-500 shake')
                      : 'bg-transparent text-[#CBA45A] border-[#CBA45A]/40 hover:bg-[#CBA45A]/10 hover:border-[#CBA45A]'}
                  `}
                >
                  {option}
                  
                  {/* Art Deco Corners for buttons */}
                  <div className="absolute top-0 left-0 w-1 h-1 border-t border-l border-current opacity-50"></div>
                  <div className="absolute top-0 right-0 w-1 h-1 border-t border-r border-current opacity-50"></div>
                  <div className="absolute bottom-0 left-0 w-1 h-1 border-b border-l border-current opacity-50"></div>
                  <div className="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-current opacity-50"></div>
                </button>
              ))}
            </div>

            {isWrong && (
              <p className="text-red-400 text-center mt-6 font-serif italic animate-bounce">
                Incorrect, Old Sport. Try again.
              </p>
            )}

          </div>
          
          {/* Decorative corners for main card */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#CBA45A]"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#CBA45A]"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#CBA45A]"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#CBA45A]"></div>
        </div>
      </div>
      
      <style>{`
        .shake {
          animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
        }
        @keyframes shake {
          10%, 90% { transform: translate3d(-1px, 0, 0); }
          20%, 80% { transform: translate3d(2px, 0, 0); }
          30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
          40%, 60% { transform: translate3d(4px, 0, 0); }
        }
      `}</style>
    </section>
  );
};

export default GatsbyEvent;
