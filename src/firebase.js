import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from 'firebase/auth';
// const API_KEY = String(import.meta.env.VITE_API_KEY);

const firebaseConfig = {
  apiKey: "AIzaSyAKSw6C4W34q5IaTgKdOsm6bZPkL91TFaw",
  authDomain: "myprojectauth-c4c4b.firebaseapp.com",
  projectId: "myprojectauth-c4c4b",
  storageBucket: "myprojectauth-c4c4b.appspot.com",
  messagingSenderId: "835262699154",
  appId: "1:835262699154:web:e76ea6621631366e90b84b"
};

export const app = initializeApp(firebaseConfig);
export const googleAuthProvider = new GoogleAuthProvider();