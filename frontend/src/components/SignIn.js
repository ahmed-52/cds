import React, { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard"); // Redirect to the dashboard on successful login
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="bg-cas min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-cond text-white mb-12">
        Sign In for Authorized Personnel
      </h1>

      <div className="container mx-auto">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
          <div className="text-center">
            <h2 className="text-3xl font-cond text-black mb-3">Sign In</h2>
            <p className="font-gs text-gray-700">Access your account</p>
          </div>

          <form onSubmit={handleSignIn} className="mt-6 space-y-6">
            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-gs-mono text-gray-700 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="netid@cornell.edu"
                className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-das focus:border-das"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-gs-mono text-gray-700 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Your Password"
                className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-das focus:border-das"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-3 bg-das text-white font-gs-mono rounded-md hover:bg-hov transition-transform duration-200 transform hover:-translate-y-1"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
        <a href="/" className="flex justify-center items-center mt-10 text-white underline ">Back Home</a>
      </div>
    </div>
  );
};

export default SignIn;
