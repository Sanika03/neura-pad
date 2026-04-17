import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC__J8J_vqEAVl4gi2PK5s200z9KWVs02Q",
  authDomain: "neura-pad.firebaseapp.com",
  projectId: "neura-pad",
  storageBucket: "neura-pad.firebasestorage.app",
  messagingSenderId: "799267104382",
  appId: "1:799267104382:web:f65bfaf1142b9247e39a2f",
  measurementId: "G-23Q8EJKJE6"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };
