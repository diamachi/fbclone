import firebase from 'firebase';
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDCMV0uJaTXtdLco61_ejwc5NEAJbhaXQA",
    authDomain: "facebook-clone-b1e21.firebaseapp.com",
    projectId: "facebook-clone-b1e21",
    storageBucket: "facebook-clone-b1e21.appspot.com",
    messagingSenderId: "992984599367",
    appId: "1:992984599367:web:a785108d0d435fa15b5a62"
  };


const app =!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export {db,storage};
