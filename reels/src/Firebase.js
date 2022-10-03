// import firebase from 'firebase/app';
import firebaseConfig from './firebaseConfig '


import { getFirestore } from "firebase/firestore";


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


let app = initializeApp(firebaseConfig);


export let auth = getAuth(app)
export let db = getFirestore(app);
