import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyADyl4US94vPdQDBYSaYQibj6NIx1hIPIU",
  authDomain: "facebook-messanger-463bb.firebaseapp.com",
  projectId: "facebook-messanger-463bb",
  storageBucket: "facebook-messanger-463bb.appspot.com",
  messagingSenderId: "336056212703",
  appId: "1:336056212703:web:574f8d7fef48bbf52a1d6a",
  measurementId: "G-H8FEFNFEV9",
};

const app = firebase.initializeApp(firebaseConfig);

const database = app.firestore();

export default database;
