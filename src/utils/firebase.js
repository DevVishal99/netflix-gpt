// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDp8wcxz1WxLmsldH0wG3VheiwKKzdg5Ec",
  authDomain: "netflixgpt-22923.firebaseapp.com",
  projectId: "netflixgpt-22923",
  storageBucket: "netflixgpt-22923.appspot.com",
  messagingSenderId: "122960486085",
  appId: "1:122960486085:web:63e32fadb05325cdf11aac",
  measurementId: "G-GH5F9J8Y53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

