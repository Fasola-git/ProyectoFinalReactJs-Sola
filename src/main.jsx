import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANI2gHWzUWdeay-pAJMfYWJDxTCUJ7jJk",
  authDomain: "proyectofinal-reactjs-a6a1b.firebaseapp.com",
  projectId: "proyectofinal-reactjs-a6a1b",
  storageBucket: "proyectofinal-reactjs-a6a1b.appspot.com",
  messagingSenderId: "551943336006",
  appId: "1:551943336006:web:af1562f8656c8caef85a47",
  measurementId: "G-X7PPSLZ1ZM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
