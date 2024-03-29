import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY ,
    authDomain: `${process.env.REACT_APP_AUTHDOMAIN}`,
    projectId: `${process.env.REACT_APP_PROJETCTID}`,
    storageBucket: `${process.env.REACT_APP_STORAGEBUCKET}`,
    messagingSenderId: `${process.env.REACT_APP_MESSAGINGSENDERID}`,
    appId: `${process.env.REACT_APP_APPID}`
  };

  const app = firebase.initializeApp(firebaseConfig);

  const db = app.firestore();
  const auth = app.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider };