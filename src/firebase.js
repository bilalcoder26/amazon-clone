import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDsG1U1udXXWZKz2ktKLQxkphdHnFAvvSw",
  authDomain: "clone-f07df.firebaseapp.com",
  databaseURL: "https://clone-f07df.firebaseio.com",
  projectId: "clone-f07df",
  storageBucket: "clone-f07df.appspot.com",
  messagingSenderId: "856577588461",
  appId: "1:856577588461:web:fbb7fd14b363de6421e0e4",
  measurementId: "G-TC5TMD5M0X",
});

const auth = firebase.auth();

export { auth };
