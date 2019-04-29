import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase.
var config = {
  apiKey: null,
  authDomain: null,
  databaseURL: null,
  projectId: null,
  storageBucket: null,
  messagingSenderId: null
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots : true})

export default firebase
