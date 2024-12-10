// src/components/SidebarDemo.js
"use client";
import React, { useState, useEffect } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/Sidebar";
import { IconArrowLeft, IconBrandTabler, IconMessage } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";
import { useLocation, useNavigate } from "react-router-dom";
import EmailAutomation from "./EmailAutomation";
import { db, auth } from '../firebase'; // Import the Firestore instance and Firebase auth
import { collection, getDocs } from 'firebase/firestore';
import { signOut } from "firebase/auth";

export function SidebarDemo() {
  const location = useLocation(); // Get the current URL path
  const navigate = useNavigate(); // Use navigate for routing

  // Function to handle logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login"); // Redirect to login page after logout
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const links = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Email Automation",
      href: "/email-automation",
      icon: (
        <IconMessage className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];

  const [open, setOpen] = useState(false);

  // Function to render the correct component based on the URL path
  const renderContent = () => {
    switch (location.pathname) {
      case "/dashboard":
        return <Dashboard2 />;
      case "/email-automation":
        return <EmailAutomation />;
      default:
        return <Dashboard2 />;
    }
  };

  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-[100vh]"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 h-full w-full">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2 w-full">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          {/* Logout button at the bottom */}
          <div className="mt-4 mb-4 px-4">
            <button
              onClick={handleLogout}
              className="flex items-center justify-start gap-2 py-2 w-full text-gray-900 dark:text-gray-200 hover:bg-red-300 rounded-md"
            >
              <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
              {open && <span>Logout</span>} {/* Conditionally render "Logout" text */}
            </button>
          </div>
        </SidebarBody>
      </Sidebar>
      {renderContent()} {/* Call the function to render the correct content */}
    </div>
  );
}

export const Logo = () => {
  return (
    <a
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <img src="logo.svg" alt="Logo" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        DST
      </motion.span>
    </a>
  );
};

export const LogoIcon = () => {
  return (
    <a
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <img src="logo.svg" alt="Logo Icon" />
    </a>
  );
};

const Dashboard2 = () => {
  const [emailList, setEmailList] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch email list data from Firestore
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'emailList'));
        const data = querySnapshot.docs.map(doc => doc.data());
        setEmailList(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className=" flex justify-center items-end py-12">Loading...</div>;
  }

  return (
    <div className="flex flex-1 p-4">
      <div className="overflow-x-auto w-full">
        <h1 className="text-2xl font-semibold text-gray-800 text-center py-2 dark:text-gray-200 font-gs-mono">Interested Members</h1>
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="text-left">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">First Name</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Last Name</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">NetID</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {emailList.length > 0 ? (
              emailList.map((item, index) => (
                <tr key={index} className="odd:bg-gray-50">
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{item.firstName}</td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">{item.lastName}</td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">{item.netid}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">
                  No data available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard2;
