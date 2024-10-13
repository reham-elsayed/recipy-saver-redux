
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyBRrTWRbw91oKFHHV8AW0xx50dO0s4-7po",
  authDomain: "newprojectauthrecipy.firebaseapp.com",
  projectId: "newprojectauthrecipy",
  storageBucket: "newprojectauthrecipy.appspot.com",
  messagingSenderId: "280878145026",
  appId: "1:280878145026:web:8397cbd63aa5396784911b"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
  const auth = getAuth(firebaseApp);
  export const db = getFirestore(firebaseApp);

  console.log(auth)
  export default auth;