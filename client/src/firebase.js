// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "jonard-estate.firebaseapp.com",
  projectId: "jonard-estate",
  storageBucket: "jonard-estate.appspot.com",
  messagingSenderId: "801869205092",
  appId: "1:801869205092:web:f3c853295cf9b511731971"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);