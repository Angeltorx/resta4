import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCQ881pRJecZCYFeA4KiCgh7f-B0Ki2ckY",
  authDomain: "ucamp-proyect-restaurant-4.firebaseapp.com",
  projectId: "ucamp-proyect-restaurant-4",
  storageBucket: "ucamp-proyect-restaurant-4.appspot.com",
  messagingSenderId: "171660897532",
  appId: "1:171660897532:web:d661151a407993690a3b79",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
