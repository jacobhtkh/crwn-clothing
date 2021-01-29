import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA5U8zBx07UdsIRv3M3l7nLKZ6cPw-nD4U",
  authDomain: "crwn-db-428cf.firebaseapp.com",
  projectId: "crwn-db-428cf",
  storageBucket: "crwn-db-428cf.appspot.com",
  messagingSenderId: "1052078717193",
  appId: "1:1052078717193:web:a6799f49fa22e3b9973bd8",
  measurementId: "G-BNH60QKH12",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
