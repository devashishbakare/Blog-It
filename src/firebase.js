import firebase from "firebase/app";
import "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAKYfzDNHj4YNGJsRevc5Dea7LRF9sVLvQ",
  authDomain: "blog-it-670ba.firebaseapp.com",
  projectId: "blog-it-670ba",
  storageBucket: "blog-it-670ba.appspot.com",
  messagingSenderId: "127920942710",
  appId: "1:127920942710:web:021647f5160a21bbc6b957"
};


const app = initializeApp(firebaseConfig);
export const firestore = firebase.firestore();