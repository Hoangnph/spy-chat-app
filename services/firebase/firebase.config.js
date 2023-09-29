import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBdYMctJrMxtcM4xvmDS9X6bi_UQz1bDTo",
  authDomain: "chatinapp-926fc.firebaseapp.com",
  projectId: "chatinapp-926fc",
  storageBucket: "chatinapp-926fc.appspot.com",
  messagingSenderId: "923955678114",
  appId: "1:923955678114:web:f577153f4ccc32790b80fb"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firebaseAuth = getAuth(app);
const firebaseStoreDB = getFirestore(app);

export { app, firebaseAuth, firebaseStoreDB };
