// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkWYp9qB5xWACFenS4VSt0hrsh7jw2Z7I",
  authDomain: "netfix-gpt-vishal.firebaseapp.com",
  projectId: "netfix-gpt-vishal",
  storageBucket: "netfix-gpt-vishal.appspot.com",
  messagingSenderId: "387569933449",
  appId: "1:387569933449:web:88658d1b06e5110c60fa58",
  measurementId: "G-ZSLMTWER4Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

