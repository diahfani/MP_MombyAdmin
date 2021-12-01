import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'
// import firebase from 'firebase/app'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAY3Zm4ULbDneOB0YQSZO7bDO_ilAsNrL8",
  authDomain: "mini-project-eb811.firebaseapp.com",
  projectId: "mini-project-eb811",
  storageBucket: "mini-project-eb811.appspot.com",
  messagingSenderId: "383392620086",
  appId: "1:383392620086:web:35127de67029817fbcc297",
  measurementId: "G-J6ETX1M51Z"
};

// firebase.initializeApp(firebaseConfig)

export const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)
// export {storage, firebase as default} 
// const storage = firebase.storage()

// login
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';

// import 'firebase/storage'
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAY3Zm4ULbDneOB0YQSZO7bDO_ilAsNrL8",
//   authDomain: "mini-project-eb811.firebaseapp.com",
//   projectId: "mini-project-eb811",
//   storageBucket: "mini-project-eb811.appspot.com",
//   messagingSenderId: "383392620086",
//   appId: "1:383392620086:web:35127de67029817fbcc297",
//   measurementId: "G-J6ETX1M51Z"
// };

// // service firebase.storage {
// //     match /b/{bucket}/o {
// //       match /{allPaths=**} {
// //         allow read, write: if request.auth != null;
// //       }
// //     }
// //   }

// // Initialize Firebase
// // const application = initializeApp(firebaseConfig);
// const app = firebase.initializeApp(firebaseConfig);
// const auth = app.auth();



// const signInWithEmailAndPassword = async (email, password) => {
    
//     try {
//         await auth.signInWithEmailAndPassword(email, password);

//     } catch (err) {
//         console.error(err)
//         alert(err.message)
//     }
// }

// const logout = () => {
//     auth.signOut();
// }


// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import firebase from 'firebase'
// // import 'firebase/storage'
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAY3Zm4ULbDneOB0YQSZO7bDO_ilAsNrL8",
//   authDomain: "mini-project-eb811.firebaseapp.com",
//   projectId: "mini-project-eb811",
//   storageBucket: "mini-project-eb811.appspot.com",
//   messagingSenderId: "383392620086",
//   appId: "1:383392620086:web:35127de67029817fbcc297",
//   measurementId: "G-J6ETX1M51Z"
// };

// Initialize Firebase
// firebase.initializeApp(firebaseConfig)
// // const analytics = getAnalytics(app);
// // const storage = firebase.storage();


// // export { auth, signInWithEmailAndPassword, logout, app}
// export default firebase


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