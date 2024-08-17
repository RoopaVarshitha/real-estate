// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-2530.firebaseapp.com",
  projectId: "real-estate-2530",
  storageBucket: "real-estate-2530.appspot.com",
  messagingSenderId: "1061347657403",
  appId: "1:1061347657403:web:757a3dc8ad373e5ffc0b9e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);