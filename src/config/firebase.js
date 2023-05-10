
import { initializeApp } from "firebase/app";
import{getFirestore} from "firebase/firestore"
import{getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyD3L7R1j5sSg0yuGN8YX0KfzmNwmPOSda4",
  authDomain: "mochipatisserie-54b5c.firebaseapp.com",
  projectId: "mochipatisserie-54b5c",
  storageBucket: "mochipatisserie-54b5c.appspot.com",
  messagingSenderId: "756423266123",
  appId: "1:756423266123:web:8035f920dc9652fdbfe2ce"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
export const auth=getAuth(app)