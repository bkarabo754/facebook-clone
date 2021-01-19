import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyA2Flaw5VOkpuDZ6__V3etZ4_nHBzYrWys",
  authDomain: "facebook-clone-ae7ee.firebaseapp.com",
  projectId: "facebook-clone-ae7ee",
  storageBucket: "facebook-clone-ae7ee.appspot.com",
  messagingSenderId: "741042441447",
  appId: "1:741042441447:web:6cbca7edd90131f1c02642",
  measurementId: "G-YJ4C4WNH6E"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;