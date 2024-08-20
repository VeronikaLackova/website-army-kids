// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyDLOFLaFtMGN4EGNVZIvM9roXlOW-ZHAoo",
   authDomain: "army-kids-e5cbd.firebaseapp.com",
   projectId: "army-kids-e5cbd",
   storageBucket: "army-kids-e5cbd.appspot.com",
   messagingSenderId: "732088577799",
   appId: "1:732088577799:web:8714d6f8f822028c14dfa2"
 };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)
export const db=getFirestore(app);
export default app;





