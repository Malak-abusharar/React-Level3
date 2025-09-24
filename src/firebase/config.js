// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlXUdQb3zyFp2ve-KwjIk71kHkCaJCc1k",
  authDomain: "react-level2-a664e.firebaseapp.com",
  projectId: "react-level2-a664e",
  storageBucket: "react-level2-a664e.firebasestorage.app",
  messagingSenderId: "215741135055",
  appId: "1:215741135055:web:87a1821e78e79cc5871fba",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
