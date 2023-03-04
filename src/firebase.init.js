// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4bjwp7xVnbSlIqV-uwOINAnVQGmTpZEc",
  authDomain: "simply-firebase-authentication.firebaseapp.com",
  projectId: "simply-firebase-authentication",
  storageBucket: "simply-firebase-authentication.appspot.com",
  messagingSenderId: "493402859829",
  appId: "1:493402859829:web:12d53153b49220c353447c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;