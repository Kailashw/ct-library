import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase.
var config = {
    apiKey: "AIzaSyBu70K3ut-E8MZVFK9uDJY0b9ZcVSzXrps",
    authDomain: "ct-library-fae50.firebaseapp.com",
    databaseURL: "https://ct-library-fae50.firebaseio.com",
    projectId: "ct-library-fae50",
    storageBucket: "ct-library-fae50.appspot.com",
    messagingSenderId: "95561275819"
  };

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots : true})

export default firebase