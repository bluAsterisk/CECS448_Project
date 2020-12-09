// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCJdvmsy8yGvQjhGM6C79qsnnFp29aYfjI",
    authDomain: "penguinphase3.firebaseapp.com",
    databaseURL: "https://penguinphase3.firebaseio.com",
    projectId: "penguinphase3",
    storageBucket: "penguinphase3.appspot.com",
    messagingSenderId: "424592997971",
    appId: "1:424592997971:web:b040728ba4455d8d2c50a6",
    measurementId: "G-E1JBWBSPRG"
  };

class Firebase{
    constructor()
    {
        app.initializeApp(firebaseConfig);

        this.auth = app.auth();
        this.firestore = app.firestore();
    }

    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.doSignInWithEmailAndPassword(email, password);
    
    sendPasswordResetEmail = (email) =>
        this.auth.sendPasswordResetEmail(email);

    doSignOut = () => this.auth.signOut();

  }

  export default Firebase