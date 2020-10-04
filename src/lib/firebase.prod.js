import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import {seedDatabase } from '../seed';
// we need to somehow seed the database 

// we need to config here
const config = {
    apiKey: "AIzaSyBMzjlitXk7SHotUUgRugpbxJYQFLFOIC4",
    authDomain: "netflix-b18fe.firebaseapp.com",
    databaseURL: "https://netflix-b18fe.firebaseio.com",
    projectId: "netflix-b18fe",
    storageBucket: "netflix-b18fe.appspot.com",
    messagingSenderId: "431188151674",
    appId: "1:431188151674:web:de5ed92d241361dcd25ac3",
    measurementId: "G-SVSVZ3R3NQ"
};
const firebase = Firebase.initializeApp(config);

//seedDatabase(firebase);

export {firebase};