import React, { useState } from 'react';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [year] = useState(new Date().getFullYear());


  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call with delay, always show error message
    setTimeout(() => {
      setError('Incorrect email or password. Please try again.');
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Panel - Blue background with branding */}
      <div className="hidden md:flex md:w-1/2 bg-[#0f1521] flex-col justify-center items-center p-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600 opacity-10">
          {/* Decorative pattern */}
          <svg className="absolute right-0 bottom-0 w-2/3 h-auto opacity-20" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FFFFFF" d="M44.9,-76.2C59.6,-69.8,73.6,-60.5,81.9,-47.3C90.2,-34,92.9,-17,89.8,-1.8C86.7,13.4,77.8,26.9,68.9,39.9C60,52.9,51.1,65.5,39,72.8C26.9,80.1,13.4,82.2,-0.3,82.8C-14.1,83.4,-28.2,82.6,-40.1,76.1C-52,69.6,-61.8,57.5,-68.9,44.4C-76,31.2,-80.5,15.6,-81.7,-0.7C-82.9,-17,-80.8,-34,-72.8,-47.7C-64.8,-61.5,-50.9,-72,-36.5,-77.8C-22.1,-83.6,-7.4,-84.7,7,-84.1C21.3,-83.6,42.6,-86.3,58.3,-79.2Z" transform="translate(100 100)" />
          </svg>
        </div>
        
        <div className="relative z-10 max-w-md text-center">
          <img src="/logo.svg" alt="Cornell Data Strategy Logo" className="h-16 mx-auto mb-8" />
          <h1 className="text-white text-4xl font-bold mb-6">Welcome Back</h1>
          <p className="text-blue-100 text-lg mb-8">
            Access your dashboard to view analytics, reports, and data insights
          </p>
          <div className="mt-8 py-6 border-t border-blue-800/30">
            <p className="text-blue-200 text-sm">
              All rights reserved. &copy; {year} Cornell Data Strategy
            </p>
          </div>
        </div>
      </div>
      
      {/* Right Panel - Sign In Form */}
      <div className="flex flex-col justify-center p-8 md:p-14 md:w-1/2 bg-gray-900">
        {/* Mobile logo - only visible on mobile */}
        <div className="md:hidden flex justify-center mb-8">
          <img src="/logo.svg" alt="Cornell Data Strategy Logo" className="h-12" />
        </div>
        
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="text-3xl font-bold text-white mb-2">Sign in</h2>
          <p className="text-gray-400 mb-8">Enter your credentials to access your account</p>
          
          <div className="mb-6">
            <a href="/" className="text-blue-400 hover:text-blue-300 text-sm flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to home
            </a>
          </div>
          
          {error && (
            <div className="mb-6 rounded-md bg-red-900/20 border border-red-800/50 p-4 text-red-300" role="alert">
              <div className="flex">
                <svg className="h-5 w-5 text-red-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span>{error}</span>
              </div>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="name@example.com"
              />
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-1">
                <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                  Password
                </label>
                <a href="/signin" className="text-sm text-blue-400 hover:text-blue-300">
                  Forgot password?
                </a>
              </div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••"
              />
            </div>
            
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 border-gray-600 rounded focus:ring-blue-500 focus:ring-offset-gray-900"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                Remember me
              </label>
            </div>
            
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-blue-500 transition-colors disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Signing in...
                  </>
                ) : (
                  'Sign in'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;