import firebase from "firebase/compat/app";
import {getFirestore} from "firebase/firestore"
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
const firebaseConfig = {
    apiKey: "AIzaSyAyaURuxb7UWVXSBn9pdbbsW0HWbMSVdZ8",
    authDomain: "snapchat-clone-361899.firebaseapp.com",
    projectId: "snapchat-clone-361899",
    storageBucket: "snapchat-clone-361899.appspot.com",
    messagingSenderId: "1089649465713",
    appId: "1:1089649465713:web:0717df0dd3ab78442a7ed0",
    measurementId: "G-CZ6SBMZ86G"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db= firebase.firestore();
  const auth= firebase.auth();
  const storage= firebase.storage();
  const provider= new firebase.auth.GoogleAuthProvider(); 
  export {db, auth,storage,provider};
  export default firebase;