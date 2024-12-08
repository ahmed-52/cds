import React from "react";

const SignIn = () => {
  return (
    <div className="bg-cas min-h-screen flex flex-col justify-center items-center">
      {/* Header */}
      <h1 className="text-4xl font-cond text-white mb-12">
        Management Console
      </h1>

      <div className="container mx-auto">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
          {/* Sign In Heading */}
          <div className="text-center">
            <h2 className="text-3xl font-cond text-black mb-3">Sign In</h2>
            <p className="font-shippori text-gray-700">
              Access your account
            </p>
          </div>

          {/* Form */}
          <form className="mt-6 space-y-6">
            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-shippori-mono text-gray-700 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="you@company.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-das focus:border-das"
              />
            </div>

            {/* Password Input */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-shippori-mono text-gray-700 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Your Password"
                className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-das focus:border-das"
              />
            </div>

            {/* Sign In Button */}
            <div>
              <button
                type="button"
                className="w-full py-3 bg-das text-white font-shippori-mono rounded-md hover:bg-hov transition-transform duration-200 transform hover:-translate-y-1"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
