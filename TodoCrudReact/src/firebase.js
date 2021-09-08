import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCx95ORRbCMJpELyIXDDfUrAkuQody7xes",
  authDomain: "todocrud-7c457.firebaseapp.com",
  databaseURL: "https://todocrud-7c457-default-rtdb.firebaseio.com",
  projectId: "todocrud-7c457",
  storageBucket: "todocrud-7c457.appspot.com",
  messagingSenderId: "622386363358",
  appId: "1:622386363358:web:d2be7a6cc1eec4fba97b4f",
  measurementId: "G-5XWKNLH2KS",
};
// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();
