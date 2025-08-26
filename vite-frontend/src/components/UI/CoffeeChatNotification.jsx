import React, { useState, useEffect } from 'react';

const CoffeeChatNotification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [pulseVisible, setPulseVisible] = useState(true);

  useEffect(() => {
    // Show notification after a short delay with slide-up animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    // Pulse animation for the coffee icon
    const pulseTimer = setInterval(() => {
      setPulseVisible(prev => !prev);
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearInterval(pulseTimer);
    };
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 400);
  };

  if (!isVisible) return null;

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 transform transition-all duration-500 ease-out ${
      isClosing 
        ? 'translate-y-full opacity-0' 
        : 'translate-y-0 opacity-100'
    }`}>
      {/* Gradient background with blur effect */}
      <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 backdrop-blur-sm">
        {/* Animated background pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
        
        {/* Main content */}
        <div className="relative px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <div className="flex items-center space-x-4">
              {/* Animated coffee icon */}
              <div className="flex-shrink-0 relative">
                <div className={`w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 ${
                  pulseVisible ? 'scale-100 bg-white/30' : 'scale-100'
                }`}>
                  <div className="text-white text-lg">☕</div>
                </div>
                {/* Ping animation */}
                <div className="absolute inset-0 w-10 h-10 bg-white/20 rounded-full animate-ping"></div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-white font-bold text-lg sm:text-xl animate-fade-in">
                  Coffee Chats Have Started! 
                 
                </h3>
                <p className="text-blue-100 text-sm sm:text-base mt-1">
                  Keep your eye on our{'  '}<span/>
                  <a 
                    href="/membership#coffeechats" 
                    className="text-white font-semibold underline hover:text-blue-200 transition-colors duration-200 hover:scale-105 inline-block transform"
                  >
                    membership page
                  </a>
                  {' '}
                </p>
              </div>
            </div>

            {/* Close button */}
            <button
              onClick={handleClose}
              className="flex-shrink-0 ml-4 p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200 transform hover:scale-110"
              aria-label="Close notification"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Bottom accent line with animation */}
        <div className="h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent">
          {/* <div className="h-full bg-gradient-to-r from-blue-400 to-blue-300 animate-pulse"></div> */}
        </div>
      </div>
      <style jsx>{`
        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(1px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up-bounce {
          0% {
            transform: translateY(10%);
            opacity: 0;
          }
          60% {
            transform: translateY(-1px);
            opacity: 0.8;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-slide-up-bounce {
          animation: slide-up-bounce 0.8s ease-out;
        }

        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default CoffeeChatNotification;