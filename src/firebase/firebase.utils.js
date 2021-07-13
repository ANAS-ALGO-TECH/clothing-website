// Importing from /app because we want to use only that one
import firebase from "firebase/app";
// Importing it for database
import "firebase/firestore";
// Inmporting it for authentication
import "firebase/auth";


const config = {
    apiKey: "AIzaSyBZK2qiDlN1Z4vTwwvq7nfhY8hmoXE47o8",
    authDomain: "clothing-website-a63d0.firebaseapp.com",
    projectId: "clothing-website-a63d0",
    storageBucket: "clothing-website-a63d0.appspot.com",
    messagingSenderId: "90013939188",
    appId: "1:90013939188:web:abd3fa0e24d2fca0bdb5a1",
    measurementId: "G-00CS577W0K"
  };

  firebase.initializeApp(config);


//   Now for Google authentication
export const auth = firebase.auth();
// Now for firestore (Database)
export const firestore = firebase.firestore();


// Now to setUp our Google authentication Utilities
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);


// We also export firebase as if we want to use a whole library anywhere
export default firebase;