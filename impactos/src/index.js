import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaqFtQR0CMxNy0PZCDNKhBI5BrDr4MHVo",
  authDomain: "impactos-sc.firebaseapp.com",
  projectId: "impactos-sc",
  storageBucket: "impactos-sc.appspot.com",
  messagingSenderId: "122199468543",
  appId: "1:122199468543:web:03e775281ea5bf0a225fca"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

