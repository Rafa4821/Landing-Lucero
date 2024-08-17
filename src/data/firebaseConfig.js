// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB77jopvKJZWyNW5GP3VYH92mbgu6IqeEY",
  authDomain: "proyecto-react-lucero.firebaseapp.com",
  projectId: "proyecto-react-lucero",
  storageBucket: "proyecto-react-lucero.appspot.com",
  messagingSenderId: "780737492093",
  appId: "1:780737492093:web:687a01b48957b33c7bed14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };