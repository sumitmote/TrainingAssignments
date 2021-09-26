import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDjF77hWXhoXgFbrrXDgvRK9dJePJpbFv0",
  authDomain: "reactecom-517a9.firebaseapp.com",
  projectId: "reactecom-517a9",
  storageBucket: "reactecom-517a9.appspot.com",
  messagingSenderId: "956287372851",
  appId: "1:956287372851:web:370162eefbf4dd8a8bdd46",
  measurementId: "G-20EQBVK41T",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();

export { auth, fs, storage };
