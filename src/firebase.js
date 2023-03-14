import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: "AIzaSyAKYfzDNHj4YNGJsRevc5Dea7LRF9sVLvQ",
  authDomain: "blog-it-670ba.firebaseapp.com",
  projectId: "blog-it-670ba",
  storageBucket: "blog-it-670ba.appspot.com",
  messagingSenderId: "127920942710",
  appId: "1:127920942710:web:021647f5160a21bbc6b957"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
