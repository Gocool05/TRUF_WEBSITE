import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import { getDatabase } from "firebase/database";
import {getFirestore} from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBsaE8QREcAtqvoYVgPi6D0ED8vwVOYonM",
  authDomain: "turfz-4a9a8.firebaseapp.com",
  projectId: "turfz-4a9a8",
  storageBucket: "turfz-4a9a8.appspot.com",
  messagingSenderId: "700332421189",
  appId: "1:700332421189:web:37b30371ed33ea412ef32c",
  measurementId: "G-F6WZZEX3VV"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider(app);
export const db = getFirestore(app)
export const database = getDatabase(app);