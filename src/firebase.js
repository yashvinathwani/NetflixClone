import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBsp6ZX1gbMu8QU3vSWJVTt3PTxDJ2MzQc",
    authDomain: "yn-netflix-clone.firebaseapp.com",
    projectId: "yn-netflix-clone",
    storageBucket: "yn-netflix-clone.appspot.com",
    messagingSenderId: "694166206819",
    appId: "1:694166206819:web:13b42d9879e15810f77b56"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;