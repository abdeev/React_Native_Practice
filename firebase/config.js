// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDE8qSnKFNSdzQ19KdVwoG6hnhOymK4k_U",
    authDomain: "react-native-social-6399a.firebaseapp.com",
    projectId: "react-native-social-6399a",
    storageBucket: "react-native-social-6399a.appspot.com",
    messagingSenderId: "410455445643",
    appId: "1:410455445643:web:ed47c1a17c39decac2c48e",
    measurementId: "G-DKF305M63S"
  };

export const app = initializeApp(firebaseConfig);

//Init authorization
export const auth = getAuth(app);

//Init storage
export const storage = getStorage(app);

//Init Firestore database
export const db = getFirestore(app);


