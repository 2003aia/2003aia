// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCY97k9_vqjLKp0QFwcG8IyfpQkIX-sm5Q",
  authDomain: "test-e04b0.firebaseapp.com",
  databaseURL: "https://test-e04b0-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "test-e04b0",
  storageBucket: "test-e04b0.appspot.com",
  messagingSenderId: "820592733770",
  appId: "1:820592733770:web:efc8f20e9ffaeaf7ea40b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
