const CoffeeChat = () => {
  const handleCoffeeChatClick = () => {
    window.open('https://calendly.com/d/cswv-bvx-6v7/cornell-data-strategy-fall-25-coffee-chats?fbclid=PAZXh0bgNhZW0CMTEAAadOYM2Z5pH-F1y7_Y7H8BqVD1g8Zutwon6-vsH9Kj_JmZdS4L1MjABH3IxfZg_aem_dS6Mr_KUSlDJKcdPCDkedQ', '_blank');
  };

  return (
    <section id="coffeechats" className="m-5 mb-8 p-5 bg-gradient-to-r from-blue-50 to-white border-l-4 border-blue-600 rounded-lg shadow-sm">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* Left Content */}
        <div className="lg:w-2/3">
          <div className="flex items-center gap-3 mb-4">
            <div className="text-3xl animate-bounce">☕</div>
            <h2 className="font-Domine text-textcl text-[35px] font-bold">Coffee Chats</h2>
          </div>
          
          <p className="para2 text-lg text-textcl mb-6 leading-relaxed">
            Want to learn more about Cornell Data Strategy before applying? Join us for informal coffee chats! 
            These are casual conversations where you can ask questions about our projects, culture, recruitment process, 
            and what it's like to be part of our team.
          </p>

          <div className="bg-white p-4 rounded-lg border border-blue-200 mb-6">
            <h3 className="font-semibold text-textcl mb-3">What to expect:</h3>
            <ul className="space-y-2 text-textcl">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                Informal 15-20 minute conversations
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                Meet current members and learn about their experiences
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                Ask questions about projects, skills, and opportunities
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                Get insider tips for the application process
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-2 mb-6">
            <div className="w-3 h-3 bg-green-600 rounded-full animate-pulse"></div>
            <span className="font-semibold text-textcl">Coffee chats are now live!</span>
          </div>
        </div>

        {/* Right Content - CTA */}
        <div className="lg:w-1/3 text-center lg:text-left">
          <div className="bg-blue-600 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-3">Ready to Chat?</h3>
            <p className="text-blue-100 mb-4 text-sm">
              Schedule a time that works for you and get all your questions answered!
            </p>
            
            <button 
              onClick={handleCoffeeChatClick}
              className="bg-white text-blue-600 font-bold hover:bg-blue-50 px-6 py-3 rounded-lg font-Domine flex items-center gap-3 mx-auto lg:mx-0 group transition-all duration-300 hover:shadow-lg"
            >
              Schedule Coffee Chat
              <svg 
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Additional visual element */}
          <div className="mt-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-sm text-gray-600">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Multiple time slots available
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="mt-8 h-[6px] bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 w-full rounded-full"></div>
    </section>
  );
};

export default CoffeeChat;