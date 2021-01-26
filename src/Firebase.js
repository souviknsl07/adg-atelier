import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZsqiefMShSSIpts3AwulWT6zV-jb_O3Y",
  authDomain: "adg-atelier.firebaseapp.com",
  projectId: "adg-atelier",
  storageBucket: "adg-atelier.appspot.com",
  messagingSenderId: "219220254759",
  appId: "1:219220254759:web:eac7a9d8cc994b885aae02",
  measurementId: "G-TBVGW7DRLF",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
