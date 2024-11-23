// src/components/UploadCSV.js
import React, { useState } from "react";
import { db } from "../firebase"; // Adjust the path to your Firebase configuration
import Papa from "papaparse"; // To parse the CSV file
import { collection, addDoc } from "firebase/firestore";

function Upload() {
  const [csvFile, setCsvFile] = useState(null);

  // Handle file change event
  const handleFileChange = (e) => {
    setCsvFile(e.target.files[0]);
  };

  // Handle file upload and parse
  const handleUpload = () => {
    if (!csvFile) {
      alert("Please upload a CSV file.");
      return;
    }

    // Use PapaParse to parse CSV file
    Papa.parse(csvFile, {
      header: true, // Assuming the CSV has headers: firstName, lastName, netid
      skipEmptyLines: true,
      complete: async (result) => {
        const data = result.data;

        try {
          // Reference to Firestore collection 'emailList'
          const emailListCollection = collection(db, "emailList");

          // Insert each row into the 'emailList' collection
          for (const row of data) {
            await addDoc(emailListCollection, {
              firstName: row.firstName,
              lastName: row.lastName,
              netid: row.netid,
            });
          }
          alert("Data successfully uploaded to Firestore!");
        } catch (error) {
          console.error("Error uploading data: ", error);
          alert("Error uploading data. Check the console for more details.");
        }
      },
      error: (error) => {
        console.error("Error parsing CSV file: ", error);
        alert("Error parsing CSV file.");
      },
    });
  };

  return (
    <div className="upload-csv">
      <h2>Upload CSV to Firestore</h2>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload CSV</button>
    </div>
  );
}

export default Upload;
