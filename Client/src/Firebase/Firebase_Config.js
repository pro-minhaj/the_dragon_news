// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEh2D-RPYaPueAJGKarkAZkJU06IRVxBw",
  authDomain: "the-dragon-news-ce8ca.firebaseapp.com",
  projectId: "the-dragon-news-ce8ca",
  storageBucket: "the-dragon-news-ce8ca.appspot.com",
  messagingSenderId: "891768268223",
  appId: "1:891768268223:web:deb81203a17f5a70fc2d0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;