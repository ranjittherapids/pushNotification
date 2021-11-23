import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBVBHeZYTK88OeunU7Oq2V1xh6L88m3sf0",
  authDomain: "push-notification-7f26c.firebaseapp.com",
  projectId: "push-notification-7f26c",
  storageBucket: "push-notification-7f26c.appspot.com",
  messagingSenderId: "703166302773",
  appId: "1:703166302773:web:d70b62e9727a4e9efdbf7c",
  measurementId: "G-XR7TTK1W1V"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {firebaseApp };
