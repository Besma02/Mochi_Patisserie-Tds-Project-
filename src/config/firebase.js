
import { initializeApp } from "firebase/app";
import{getFirestore} from "firebase/firestore"
import{getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyAwCjNH4Y93IiW_gyB2zYFsOtkCSHPZJBE",
  authDomain: "mochipatisserie-53e82.firebaseapp.com",
  projectId: "mochipatisserie-53e82",
  storageBucket: "mochipatisserie-53e82.appspot.com",
  messagingSenderId: "890147081254",
  appId: "1:890147081254:web:4d8680505958544488eae7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
export const auth=getAuth(app)