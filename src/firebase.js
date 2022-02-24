import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCXqrWQv_6_nySYBZ7pyIEbksDLFIHhKxw",
  authDomain: "chats-react.firebaseapp.com",
  projectId: "chats-react",
  storageBucket: "chats-react.appspot.com",
  messagingSenderId: "257605133011",
  appId: "1:257605133011:web:023f5a598fb39aa06b6a26",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
