import React, { useState, useEffect } from "react";
import { auth, db } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("messages");
  const [messages, setMessages] = useState([]);
  const [clients, setClients] = useState([]);
  const [newClient, setNewClient] = useState({
    name: "",
    email: "",
    company: "",
    notes: "",
  });
  const [editingNotes, setEditingNotes] = useState(null); // Track client being edited
  const [editedNotes, setEditedNotes] = useState(""); // Store updated notes
  const navigate = useNavigate();

  // Fetch messages and clients from Firestore
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "contactMessages"));
        const fetchedMessages = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMessages(fetchedMessages);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    const fetchClients = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "clients"));
        const fetchedClients = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setClients(fetchedClients);
      } catch (error) {
        console.error("Error fetching clients:", error);
      }
    };

    fetchMessages();
    fetchClients();
  }, []);

  // Handle Sign Out
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  // Add a new client to Firestore
  const handleAddClient = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "clients"), newClient);
      setClients([...clients, { id: docRef.id, ...newClient }]); // Update local state
      setNewClient({ name: "", email: "", company: "", notes: "" }); // Reset form
    } catch (error) {
      console.error("Error adding client:", error);
    }
  };

  // Handle editing notes
  const handleEditNotes = (clientId, notes) => {
    setEditingNotes(clientId);
    setEditedNotes(notes); // Set initial value to the current notes
  };

  // Save updated notes to Firestore
  const handleSaveNotes = async (clientId) => {
    try {
      const clientDocRef = doc(db, "clients", clientId);
      await updateDoc(clientDocRef, { notes: editedNotes });
      setClients((prevClients) =>
        prevClients.map((client) =>
          client.id === clientId ? { ...client, notes: editedNotes } : client
        )
      );
      setEditingNotes(null); // Exit editing mode
    } catch (error) {
      console.error("Error updating notes:", error);
    }
  };

  // Delete a client from Firestore
  const handleDeleteClient = async (clientId) => {
    try {
      const clientDocRef = doc(db, "clients", clientId);
      await deleteDoc(clientDocRef);
      setClients((prevClients) =>
        prevClients.filter((client) => client.id !== clientId)
      );
    } catch (error) {
      console.error("Error deleting client:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <button
          onClick={handleSignOut}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mt-4">
        <button
          className={`px-6 py-2 ${
            activeTab === "messages"
              ? "bg-gray-800 text-white"
              : "bg-gray-300 text-gray-800"
          } rounded-l`}
          onClick={() => setActiveTab("messages")}
        >
          Messages
        </button>
        <button
          className={`px-6 py-2 ${
            activeTab === "crm"
              ? "bg-gray-800 text-white"
              : "bg-gray-300 text-gray-800"
          } rounded-r`}
          onClick={() => setActiveTab("crm")}
        >
          CRM
        </button>
      </div>

      {/* Content */}
      <div className="container mx-auto py-8">
        {activeTab === "messages" ? (
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              Contact Messages
            </h2>
            {messages.length > 0 ? (
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <table className="min-w-full table-auto border-collapse">
                  <thead className="bg-gray-200 text-gray-700">
                    <tr>
                      <th className="px-6 py-3 text-left">Name</th>
                      <th className="px-6 py-3 text-left">Email</th>
                      <th className="px-6 py-3 text-left">Message</th>
                      <th className="px-6 py-3 text-left">Timestamp</th>
                    </tr>
                  </thead>
                  <tbody>
                    {messages.map((msg) => (
                      <tr className="border-b-2 border-gray-200" key={msg.id}>
                        <td className="px-6 py-4">{msg.name}</td>
                        <td className="px-6 py-4">{msg.email}</td>
                        <td className="px-6 py-4">{msg.message}</td>
                        <td className="px-6 py-4">
                          {new Date(msg.timestamp).toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p>No messages found.</p>
            )}
          </div>
        ) : (
<div>
  <h2 className="text-3xl font-semibold text-gray-800 mb-6">
    Client Relationship Management
  </h2>
  <form
    onSubmit={handleAddClient}
    className="bg-white p-6 rounded-lg shadow-md mb-8"
  >
    <div className="grid grid-cols-2 gap-4">
      <input
        type="text"
        placeholder="Name"
        className="p-2 border rounded"
        value={newClient.name}
        onChange={(e) =>
          setNewClient({ ...newClient, name: e.target.value })
        }
        required
      />
      <input
        type="email"
        placeholder="Email"
        className="p-2 border rounded"
        value={newClient.email}
        onChange={(e) =>
          setNewClient({ ...newClient, email: e.target.value })
        }
        required
      />
      <input
        type="text"
        placeholder="Company"
        className="p-2 border rounded"
        value={newClient.company}
        onChange={(e) =>
          setNewClient({ ...newClient, company: e.target.value })
        }
        required
      />
      <input
        type="text"
        placeholder="Notes"
        className="p-2 border rounded"
        value={newClient.notes}
        onChange={(e) =>
          setNewClient({ ...newClient, notes: e.target.value })
        }
      />
    </div>
    <button
      type="submit"
      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      Add Client
    </button>
  </form>

  {clients.length > 0 ? (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <table className="min-w-full table-auto border-collapse">
        <thead className="bg-gray-200 text-gray-700">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">
              Company
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">
              Notes
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {clients.map((client) => (
            <tr key={client.id}>
              <td className="px-6 py-4 text-gray-800">{client.name}</td>
              <td className="px-6 py-4 text-gray-500">{client.email}</td>
              <td className="px-6 py-4 text-gray-800">{client.company}</td>
              <td className="px-6 py-4 text-gray-500">
                {editingNotes === client.id ? (
                  <input
                    type="text"
                    value={editedNotes}
                    onChange={(e) => setEditedNotes(e.target.value)}
                    className="p-2 border rounded w-full h-20"
                  />
                ) : (
                  client.notes
                )}
              </td>
              <td className="px-6 py-4">
                {editingNotes === client.id ? (
                  <button
                    onClick={() => handleSaveNotes(client.id)}
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 mr-2 "
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => handleEditNotes(client.id, client.notes)}
                    className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 mr-2 mb-3"
                  >
                    Edit
                  </button>
                )}
                <button
                  onClick={() => handleDeleteClient(client.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <p className="text-gray-600 text-center mt-8">No clients found.</p>
  )}
</div>

        )}
      </div>
    </div>
  );
};

export default Dashboard;
