import firebase from 'firebase'

firebase.initializeApp({
    apiKey: "AIzaSyAncln5VGBdwrkhGIuu29o5ejlRj5PdWGE",
    authDomain: "yourwish-2cb54.firebaseapp.com",
    databaseURL: "https://yourwish-2cb54-default-rtdb.firebaseio.com/",
    projectId: "yourwish-2cb54",
    storageBucket: "yourwish-2cb54.appspot.com",
    messagingSenderId: "614724894519",
    appId: "1:614724894519:web:810e03d715693ce1c8a4b2"
})

if (!firebase.apps.length) {
    firebase.initializeApp({});
}

const FIREBASE = firebase;

export default FIREBASE;