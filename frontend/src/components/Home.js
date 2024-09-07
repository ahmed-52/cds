import React, { useState } from "react";
import { SparklesPreview } from "./ui/SparklesUi";
import { TextGenerate } from "./TextGenerate";
import { ClubOverview } from "./ClubOverview";
import Recru from './Recru';
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const Home = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState({ text: '', type: '' }); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "newsletterEmails"), {
        email: email,
      });
      setEmail(""); 
      setMessage({ text: "Subscribed successfully!", type: "success" }); 
    } catch (error) {
      console.error("Error adding document: ", error);
      setMessage({ text: "Error subscribing, please try again.", type: "error" });
    }
  };

  return (
    <div className='bg-[#333333]'>

      <SparklesPreview />

      <section className='w-full bg-[#333333]'>
        <div className='max-w-[1200px] mx-auto pt-4 pb-12'>
          <h1 className='text-[20px] md:text-2xl text-white font-medium font-apercu-mono text-center mb-4 px-4'>

          We are excited to announce the formation of Cornell Data Strategy, a student organization dedicated to merging data science and business consulting. Our mission is to deliver actionable insights and forecasts that empower local businesses and the Cornell community to make informed, data-driven decisions. By combining in-depth analysis with practical strategies, we aim to address real-world challenges effectively.
          </h1>
          <TextGenerate />
        </div>
      </section>

      <Recru />

      <section className='bg-[#6462F4] py-12'>
        <h1 className='md:text-7xl text-4xl text-white font-medium font-apercu-mono mt-4 mb-12 text-center'>
          What we do?
        </h1>
        <ClubOverview />
      </section>

      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md sm:text-center">
            <h2 className="mb-4 text-3xl tracking-tight font-apercu-mono font-normal text-gray-900 sm:text-4xl">
              Sign up for our newsletter
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-gray-500 md:mb-12 sm:text-xl font-normal">
            Stay informed about Cornell Data Strategy's latest projects, events, and opportunities. Join our newsletter to get updates on club initiatives, data-driven insights, and more.
            </p>
            <form onSubmit={handleSubmit}>
              {/* Display success or error message */}
              {message.text && (
                <p
                  className={`mb-3 text-center font-apercu-mono ${
                    message.type === 'success' ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {message.text}
                </p>
              )}

              <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                <div className="relative w-full">
                  <label htmlFor="email" className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Email address
                  </label>
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                  <input
                    className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Enter your email"
                    type="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="py-3 px-5 w-full text-sm bg-[#6462F4] hover:bg-[#4341a0] font-medium text-center text-white font-apercu-mono rounded-lg border cursor-pointer"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
