import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  createUserWithEmailAndPassword
} from "firebase/auth";

import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDobl7Jsyf5htyWZcAuRBpret0MbauFTo",
  authDomain: "mystore-db-3f379.firebaseapp.com",
  projectId: "mystore-db-3f379",
  storageBucket: "mystore-db-3f379.appspot.com",
  messagingSenderId: "873104691327",
  appId: "1:873104691327:web:94c8f6e56a579b325aaf4a",
};

// Initialize Firebase
const firebaseStore = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopUp = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation) => {
  if(!userAuth) return 

  const userDocRef = doc(db, "users", userAuth.uid);
  // getDoc() gives an exists() method to check whether there is a document exist already or not!
  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      });
    } catch (err) {
     if(err.code === "auth/email-already-in-use"){
       alert("email is already in use")
     }else {
      console.log(err)
     }
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email,password) => {
   if(!email || !password) return 

   return await createUserWithEmailAndPassword(auth,email,password)
}
