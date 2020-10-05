import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import {seedDatabase } from '../seed';
// we need to somehow seed the database 

// we need to config here
const config = {
    apiKey: "XXXXXXXXXXXXXXXXXXXX",
    authDomain: "XXXXXXXX.firebaseapp.com",
    databaseURL: "https://XXXXXXXX.firebaseio.com",
    projectId: "XXXXXXXX",
    storageBucket: "XXXXXXXX.appspot.com",
    messagingSenderId: "XXXXXXXXXX",
    appId: "1:XXXXXXXXXX:web:de5ed92d241361dcd25ac3",
    measurementId: "G-SVSVZ3R3NQ"
};
const firebase = Firebase.initializeApp(config);

//seedDatabase(firebase);

export {firebase};