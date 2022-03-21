import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCQzwP-bwWuvdlXGqaRSWAU-3jTeNnn67g",
  authDomain: "instagram-clone-react-302a7.firebaseapp.com",
  databaseURL: "https://instagram-clone-react-302a7-default-rtdb.firebaseio.com",
  projectId: "instagram-clone-react-302a7",
  storageBucket: "instagram-clone-react-302a7.appspot.com",
  messagingSenderId: "459880822699",
  appId: "1:459880822699:web:36cd754751cb31430c84ee",
  measurementId: "G-6ZSWH95FDL"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
