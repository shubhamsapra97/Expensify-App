// Taking all named exports from firebase and store in firebase var.
import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCiXIEyN6WGqyDJqF7d86mvc0HTpAxIomE",
    authDomain: "expensify-8f82b.firebaseapp.com",
    databaseURL: "https://expensify-8f82b.firebaseio.com",
    projectId: "expensify-8f82b",
    storageBucket: "expensify-8f82b.appspot.com",
    messagingSenderId: "600789155272"
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };