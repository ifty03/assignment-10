// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYT5mSdqRIlGnP9ErQTzdnnlNSCVXBw3Q",
  authDomain: "independent-gym-trainer.firebaseapp.com",
  projectId: "independent-gym-trainer",
  storageBucket: "independent-gym-trainer.appspot.com",
  messagingSenderId: "567355682214",
  appId: "1:567355682214:web:d073acaf4efa20387cf367",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
