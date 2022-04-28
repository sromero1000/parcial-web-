// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtuyirKyOTE2SliXqOCWwrs1JYkXdqKUA",
  authDomain: "parcialbp.firebaseapp.com",
  projectId: "parcialbp",
  storageBucket: "parcialbp.appspot.com",
  messagingSenderId: "855942897517",
  appId: "1:855942897517:web:470219e1c45559cff6c464"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export{firebase}
