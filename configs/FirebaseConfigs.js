// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "firebase/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAWowhV5muKsdLVgoBEakrFoikFSOJipEQ",
//   authDomain: "react-native-c1b01.firebaseapp.com",
//   projectId: "react-native-c1b01",
//   storageBucket: "react-native-c1b01.appspot.com",
//   messagingSenderId: "936063883785",
//   appId: "1:936063883785:web:430000d5dc53bf3e7fb6d8",
//   measurementId: "G-KJQC4F0T35"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const db=getFirestore(app)
// // const analytics = getAnalytics(app);

// FirebaseConfig.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWowhV5muKsdLVgoBEakrFoikFSOJipEQ",
  authDomain: "react-native-c1b01.firebaseapp.com",
  projectId: "react-native-c1b01",
  storageBucket: "react-native-c1b01.appspot.com",
  messagingSenderId: "936063883785",
  appId: "1:936063883785:web:430000d5dc53bf3e7fb6d8",
  measurementId: "G-KJQC4F0T35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
