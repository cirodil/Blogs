// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAL1BzX4GLISBEtmO87Ynn37Ux7yeWyleg",
  authDomain: "blog-719c5.firebaseapp.com",
  projectId: "blog-719c5",
  storageBucket: "blog-719c5.appspot.com",
  messagingSenderId: "29483008191",
  appId: "1:29483008191:web:c60475b4e3ed486385060a",
  measurementId: "G-XMVVGJWG27",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
