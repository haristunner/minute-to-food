// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAy1_im2O-e3nRQbB9mMnyUB1jIAkOqTx8",
  authDomain: "minute-to-food.firebaseapp.com",
  projectId: "minute-to-food",
  storageBucket: "minute-to-food.appspot.com",
  messagingSenderId: "75802758256",
  appId: "1:75802758256:web:31f5c952958b63820e78b5",
  measurementId: "G-5LNTDJDQC6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
