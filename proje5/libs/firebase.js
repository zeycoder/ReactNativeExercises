import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

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

const db = getFirestore(app);
const auth = getAuth(app);
// let app;
// if(firebase.apps.lenght===0){
//   app = firebase.initializeApp(firebaseConfig);
// }else{
//   app = firebase.app()
// }
const app = initializeApp(firebaseConfig);

//const auth = getAuth(app);
// const db = firebase.data()

// const db = getFirestore(app);
// const auth = getAuth(app);


async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}

export default app;