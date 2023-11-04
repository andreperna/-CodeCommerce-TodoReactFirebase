// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCXa3hy6ci_cDORe58NjNTJo-V9bjbKok",
  authDomain: "codecommerce-todoreactfirebas.firebaseapp.com",
  projectId: "codecommerce-todoreactfirebas",
  storageBucket: "codecommerce-todoreactfirebas.appspot.com",
  messagingSenderId: "233558116041",
  appId: "1:233558116041:web:8fdd5825e489ff5c4f2f18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)