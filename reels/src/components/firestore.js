// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKryLehpNfzCTGp2Fr5xhUI9tVGePbpkI",
  authDomain: "profiledata-60ccc.firebaseapp.com",
  projectId: "profiledata-60ccc",
  storageBucket: "profiledata-60ccc.appspot.com",
  messagingSenderId: "161377057933",
  appId: "1:161377057933:web:51bc40589c25c5104276c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
