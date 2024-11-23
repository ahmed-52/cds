import React from 'react';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/login'); // Use navigate for redirection
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#333333]">
      <h1 className="text-4xl font-semibold text-white">Welcome to the Dashboard</h1>
      <button onClick={handleSignOut} className="p-3 bg-red-400">Sign out</button>
      <a href='/email-automation'>Email automation</a>
        
    </div>

  );
};

export default Dashboard;
