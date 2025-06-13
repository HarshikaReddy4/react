// src/firebase.ts

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA_q2QriYUAHDcDg9gnu5VXl2nS1xZVSvE",
  authDomain: "jpmc-28367.firebaseapp.com",
  projectId: "jpmc-28367",
  storageBucket: "jpmc-28367.firebasestorage.app",
  messagingSenderId: "958976182311",
  appId: "1:958976182311:web:b663b66c37416e1b756602",
  measurementId: "G-Q63T7PZBF3"
};

const app = initializeApp(firebaseConfig);

// 🔥 Firestore for storing volunteer form data
export const db = getFirestore(app);

// 📊 Optional: export analytics (only for browser environments)
export const analytics = getAnalytics(app);
