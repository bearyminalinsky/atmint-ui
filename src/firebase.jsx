// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "store-tutorial-a79fa.firebaseapp.com",
  projectId: "store-tutorial-a79fa",
  storageBucket: "store-tutorial-a79fa.appspot.com",
  messagingSenderId: "652776974786",
  appId: "1:652776974786:web:780c1ed4e62e0eafab4e5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();