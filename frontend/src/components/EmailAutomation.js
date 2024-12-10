import React, { useState, useEffect } from 'react';
import { auth } from '../firebase';

const EmailAutomation = () => {
  const [netIDs, setNetIDs] = useState('');
  const [names, setNames] = useState('');
  const [subject, setSubject] = useState('');
  const [messageBody, setMessageBody] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    if (!auth.currentUser) {
      window.location.href = "/login";
    }
  }, []);

  const handleUpload = () => {
    if (!netIDs || !names || !subject || !messageBody) {
      setError('Please fill in all fields.');
      return;
    }
    setSuccess("");
    setError("");

    const data = {
      netIDs: netIDs.split('\n').map(netID => netID.trim()).filter(netID => netID !== ''),
      names: names.split('\n').map(name => name.trim()).filter(name => name !== ''),
      subject: subject.trim(),
      messageBody: messageBody.trim(),
    };

    fetch('http://127.0.0.1:5000/upload', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          setError(data.error);
        } else {
          setSuccess('Emails processed successfully!');
          setNetIDs('');
          setNames('');
          setSubject('');
          setMessageBody('');
        }
      })
      .catch((error) => {
        console.error('Error uploading data:', error);
        setError('Failed to send emails');
      });
  };

  return (
    <div className="flex items-center justify-center h-screen w-full bg-gray-100 overflow-y-auto">
      <div className="w-full p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center font-gs">Automate Email Sending</h2>

        <div className="mb-4">
          <label className="block text-md text-gray-700 mb-2 font-gs">Enter NetIDs (each on a new line)</label>
          <textarea
            rows="4"
            value={netIDs}
            onChange={(e) => setNetIDs(e.target.value)}
            className="w-full p-3 bg-gray-200 text-gray-800 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none font-gs"
            placeholder="e.g., abc123"
          />
        </div>

        <div className="mb-4">
          <label className="block text-md text-gray-700 mb-2 font-gs">Enter Names (each on a new line)</label>
          <textarea
            rows="4"
            value={names}
            onChange={(e) => setNames(e.target.value)}
            className="w-full p-3 bg-gray-200 text-gray-800 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none font-gs"
            placeholder="e.g., John Doe"
          />
        </div>

        <div className="mb-4">
          <label className="block text-md text-gray-700 mb-2 font-gs">Subject</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full p-3 bg-gray-200 text-gray-800 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none font-gs"
            placeholder="Subject of the email"
          />
        </div>

        <div className="mb-4">
          <label className="block text-md text-gray-700 mb-2 font-gs">Message Body</label>
          <textarea
            rows="3"
            value={messageBody}
            onChange={(e) => setMessageBody(e.target.value)}
            className="w-full p-3 bg-gray-200 text-gray-800 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none font-gs"
            placeholder="Your message here..."
          />
        </div>

        {error && <p className="text-red-500 text-center mb-4 font-gs">{error}</p>}
        {success && <p className="text-green-500 text-center mb-4 font-gs">{success}</p>}

        <button
          onClick={handleUpload}
          className="w-full px-4 py-2 bg-[#2562F5] text-white rounded-lg hover:bg-blue-700 focus:outline-none transition-all duration-200 font-gs text-md"
        >
          Send Emails
        </button>
      </div>
    </div>
  );
};

export default EmailAutomation;
