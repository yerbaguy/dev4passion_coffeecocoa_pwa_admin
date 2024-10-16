import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {

  apiKey: "AIzaSyCTxsX--k2XTTGQ3X453rjqDk3VczTRvM8",

  authDomain: "coffee-cocoa-82919.firebaseapp.com",

  projectId: "coffee-cocoa-82919",

  storageBucket: "coffee-cocoa-82919.appspot.com",

  messagingSenderId: "704423007228",

  appId: "1:704423007228:web:d1af7d2a8a3bfb2994d879",

  measurementId: "G-MXF6WWZQY7"

};


firebase.initializeApp(firbaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export {auth, db, storage}
