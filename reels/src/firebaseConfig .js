
import { initializeApp } from "firebase/app";
import { getStorage,} from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyAnCuPwcGgCZ6Xo2bBJE0ojdD4AKex2DVc",
    authDomain: "reels-autj.firebaseapp.com",
    projectId: "reels-autj",
    storageBucket: "reels-autj.appspot.com",
    messagingSenderId: "247595493591",
    appId: "1:247595493591:web:511a73f0128fd4c283a892",
    measurementId: "G-BV7BSDG1JF"
    };
    // module.exports = firebaseConfig
   export const app = initializeApp(firebaseConfig);

   export default firebaseConfig
   export const storage = getStorage(app);
