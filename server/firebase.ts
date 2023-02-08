// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC9CkU6BtCgNnOgXVhzZRmi-0_AQa5Glrk",
    authDomain: "oye-app-d5e41.firebaseapp.com",
    projectId: "oye-app-d5e41",
    storageBucket: "oye-app-d5e41.appspot.com",
    messagingSenderId: "452903437382",
    appId: "1:452903437382:web:b41214e015547fc2977647",
    measurementId: "G-6XYMQDL6QL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const loginEmailPassword = async (loginEmail, loginPassword) => {
    const userCredentials = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    console.log(userCredentials);
    return userCredentials;
};

export const signUpEmailPassword = async (loginEmail, loginPassword) => {
    const userCredentials = await createUserWithEmailAndPassword(auth, loginEmail, loginPassword);
    console.log(userCredentials);
    return userCredentials;
};