// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCh9DNBC653gh1QcXCEpAjzX40ynbNYm7A",
  authDomain: "bpride-d0177.firebaseapp.com",
  projectId: "bpride-d0177",
  storageBucket: "bpride-d0177.firebasestorage.app",
  messagingSenderId: "348157981252",
  appId: "1:348157981252:web:51b1c5b27268196dda0211",
  measurementId: "G-9PJG4CXWLN"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
