import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import Firestore
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD3QTCp-KoBOU6B-10ekUeyzN6lMssqMl4",
  authDomain: "cornelldatastrategy.firebaseapp.com",
  projectId: "cornelldatastrategy",
  storageBucket: "cornelldatastrategy.appspot.com",
  messagingSenderId: "368470522559",
  appId: "1:368470522559:web:f98a54c9f08339b453640a",
  measurementId: "G-F20PB9MJS0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);