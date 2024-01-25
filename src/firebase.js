// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgifxEeXFsaq80MKqCvvBFmU3Ds8s5ypw",
  authDomain: "fir-project-7eb1e.firebaseapp.com",
  projectId: "fir-project-7eb1e",
  storageBucket: "fir-project-7eb1e.appspot.com",
  messagingSenderId: "509249603951",
  appId: "1:509249603951:web:bb585c3300881fa442809a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
