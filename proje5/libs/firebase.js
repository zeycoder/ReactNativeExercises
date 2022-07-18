import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCZCoT0LN9HWcpA3D4xPPxhKKSslHWuHF8",
  authDomain: "asdf-94285.firebaseapp.com",
  databaseURL: "https://asdf-94285-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "asdf-94285",
  storageBucket: "asdf-94285.appspot.com",
  messagingSenderId: "884591487055",
  appId: "1:884591487055:web:2c6c26917d067bbea1623a",
  measurementId: "G-DT563QNQNK"
};

const auth = getAuth(app);
const app = initializeApp(firebaseConfig);

export default app;