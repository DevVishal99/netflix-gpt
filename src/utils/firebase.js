// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDscAN-yXgTXzS9lhUx3kj4PkT4mAa0riI",
  authDomain: "netflix-gpt-2-vishal.firebaseapp.com",
  projectId: "netflix-gpt-2-vishal",
  storageBucket: "netflix-gpt-2-vishal.appspot.com",
  messagingSenderId: "312158723753",
  appId: "1:312158723753:web:17264cd57d9dea3256d3b8",
  measurementId: "G-FGLT1GR30Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

