import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBroZr74a_dS5MXemogShGKcH5e9gVJesw",
  authDomain: "barter-system-2.firebaseapp.com",
  databaseURL: "https://barter-system-2.firebaseio.com",
  projectId: "barter-system-2",
  storageBucket: "barter-system-2.appspot.com",
  messagingSenderId: "873698586511",
  appId: "1:873698586511:web:a8aaf2460e2b03b82365fa"
  };
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
