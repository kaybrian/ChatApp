import firebase from 'firebase/app'
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCkayPiwppP5MvJz2ZgMet-0kplN-oPVCU",
    authDomain: "signal-clone-f43fd.firebaseapp.com",
    projectId: "signal-clone-f43fd",
    storageBucket: "signal-clone-f43fd.appspot.com",
    messagingSenderId: "913527239560",
    appId: "1:913527239560:web:701a07be3893ca8c7a403d"
  };

let app;

if (firebase.apps.length === 0){
  app = firebase.initializeApp(firebaseConfig);
}else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };