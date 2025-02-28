// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCq7w7nDR1ybWW37XmtkAlIPQjQgShDgRU",
  authDomain: "molletrade.firebaseapp.com",
  projectId: "molletrade",
  storageBucket: "molletrade.firebasestorage.app",
  messagingSenderId: "335622519491",
  appId: "1:335622519491:web:3c8fc3121e611e5b65c076"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const projectAuth = getAuth(app);
