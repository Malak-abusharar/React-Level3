// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLZNS4i2zN7Oz08ix0NT5-5wk-SNgubj8",
  authDomain: "poject-a90f3.firebaseapp.com",
  projectId: "poject-a90f3",
  storageBucket: "poject-a90f3.firebasestorage.app",
  messagingSenderId: "913293011305",
  appId: "1:913293011305:web:2079c1f335fded8848f5f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
