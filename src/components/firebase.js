// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore/lite";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAGegBpQXBLClQ23UBNTRdYxctGO_rVCvI",
  authDomain: "code-compass-4dc03.firebaseapp.com",
  projectId: "code-compass-4dc03",
  storageBucket: "code-compass-4dc03.appspot.com",
  messagingSenderId: "254347470550",
  appId: "1:254347470550:web:5f4c85a70e7de0d179cb77",
  measurementId: "G-BP835RWKQM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
export const db = firebaseApp.firestore();
export const auth = firebase.auth();







export const getUsers = () => {
  return db.collection("users").get();
};

export const updateUser = (userId, data) => {
  return db.collection("users").doc(userId).update(data);
};

export const deleteUser = (userId) => {
  return db.collection("users").doc(userId).delete();
};



