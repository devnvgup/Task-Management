// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAbNfvRlsflvEcwSARWJqMivHnpAQCRk0",
  authDomain: "task-manage-7e33e.firebaseapp.com",
  projectId: "task-manage-7e33e",
  storageBucket: "task-manage-7e33e.appspot.com",
  messagingSenderId: "294053567380",
  appId: "1:294053567380:web:a84f51e0aec32b61f18d81",
  measurementId: "G-DK88420XT8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
