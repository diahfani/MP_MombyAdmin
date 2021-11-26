// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import { useHistory } from 'react-router';
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAY3Zm4ULbDneOB0YQSZO7bDO_ilAsNrL8",
  authDomain: "mini-project-eb811.firebaseapp.com",
  projectId: "mini-project-eb811",
  storageBucket: "mini-project-eb811.appspot.com",
  messagingSenderId: "383392620086",
  appId: "1:383392620086:web:35127de67029817fbcc297",
  measurementId: "G-J6ETX1M51Z"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();


const signInWithEmailAndPassword = async (email, password) => {
    
    try {
        await auth.signInWithEmailAndPassword(email, password);

    } catch (err) {
        console.error(err)
        alert(err.message)
    }
}

const logout = () => {
    auth.signOut();
}
// const analytics = getAnalytics(app);

export { auth, signInWithEmailAndPassword, logout}


// const auth = getAuth();
// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });