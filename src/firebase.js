
// Import the functions you need from the SDKs you need


import firebase from "firebase/compat/app";
import "firebase/compat/firestore";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA49myvdhWIYWStXL8oBRulL7GY-RT9Azg",
  authDomain: "hooks-blog-application.firebaseapp.com",
  projectId: "hooks-blog-application",
  storageBucket: "hooks-blog-application.appspot.com",
  messagingSenderId: "274570188479",
  appId: "1:274570188479:web:1cc849e9233149f6e5d80a"
};

// Initialize Firebase



firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

