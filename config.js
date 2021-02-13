import firebase from "firebase"  ;
 
const firebaseConfig = {
    apiKey: "AIzaSyB8ATAxo8L0zV0aFB44_ADnsdmvSZsmvvY",
    authDomain: "like-unlike-a24be.firebaseapp.com",
    databaseURL: "https://like-unlike-a24be-default-rtdb.firebaseio.com",
    projectId: "like-unlike-a24be",
    storageBucket: "like-unlike-a24be.appspot.com",
    messagingSenderId: "725957065478",
    appId: "1:725957065478:web:da64d1e62a1c6df3f2fc87",
    measurementId: "G-1BL4KFFHYS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase.database();