import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBPWbkPRbe-D8DbQLakkXzqZUUbb6Opob8",
  authDomain: "prueba-9b3fc.firebaseapp.com",
  projectId: "prueba-9b3fc",
  storageBucket: "prueba-9b3fc.appspot.com",
  messagingSenderId: "793330698766",
  appId: "1:793330698766:web:12b851c88d45f386baca5f"

  };
  // Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => app;
export const getFirestore = () => firebase.firestore(app)

