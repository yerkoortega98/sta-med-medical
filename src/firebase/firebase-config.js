import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

  const firebaseConfig = {
    apiKey: "AIzaSyA1hY_D_tZxiMgEnigO6dzBxhDZ8TmjqeM",
    authDomain: "sta-med-medical.firebaseapp.com",
    databaseURL: "https://sta-med-medical.firebaseio.com",
    projectId: "sta-med-medical",
    storageBucket: "sta-med-medical.appspot.com",
    messagingSenderId: "221337157072",
    appId: "1:221337157072:web:5b584f98f49f60f7f8cdd5"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export{
      db,
      firebase
  }