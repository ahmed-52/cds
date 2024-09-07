import React from "react";

const SignIn = () => {
  return (
    <div className="bg-[#333333]">
      <div className="flex items-center justify-start pt-12 flex-col min-h-screen bg-[#333333] dark:bg-gray-900">
      <h1 className="text-4xl font-semibold text-white text-center m-0 pt-5 pb-[100px] mb-5">
      Management Console
              </h1>
        <div className="container mx-auto">
          <div className="max-w-md mx-auto my-5">
            <div className="text-center">
              <h1 className="mb-3 text-3xl font-semibold text-white ">
                Sign in
              </h1>

              <p className="text-white font-apercu-mono">
                Sign in to access your account
              </p>
            </div>

            <div className="m-7">
              <form action="">
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm text-white font-apercu">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="you@company.com"
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500 font-apercu-mono"
                  />
                </div>

                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <label
                      htmlFor="password"
                      className="text-sm text-white font-apercu">
                      Password
                    </label>

                    {/* <a
                      href="#!"
                      className="text-sm text-gray-400 focus:outline-none focus:text-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-300 font-apercu-mono">
                      Forgot password?
                    </a> */}
                  </div>

                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Your Password"
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500 font-apercu-mono"
                  />
                </div>

                <div className="mb-6">
                  <button
                    type="button"
                    className="w-full px-3 py-4 text-white bg-[#6462F4] rounded-md focus:bg-indigo-600 focus:outline-none font-apercu-mono">
                    Sign in
                  </button>
                </div>
                {/* <p className="text-sm text-center text-gray-400 font-apercu-mono">
                  Don't have an account yet?{" "}
                  <a
                    href="#!"
                    className="text-indigo-400 focus:outline-none focus:underline focus:text-indigo-500 dark:focus:border-indigo-800">
                    Sign up
                  </a>
                  .
                </p> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
