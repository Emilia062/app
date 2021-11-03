import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAAx3LYa6fAwjTSDiuUP4dsGA2aF2gIMWs",
    authDomain: "rosmarino-4c76e.firebaseapp.com",
    projectId: "rosmarino-4c76e",
    storageBucket: "rosmarino-4c76e.appspot.com",
    messagingSenderId: "399936425315",
    appId: "1:399936425315:web:d5a3bdf6bc5fd7454cd756"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();

export { db };