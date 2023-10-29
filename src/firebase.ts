import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyASrjSiXU-_2hE3sdToOb9ltia8OWFg2Kg",
  authDomain: "nwitter-ca4d7.firebaseapp.com",
  projectId: "nwitter-ca4d7",
  storageBucket: "nwitter-ca4d7.appspot.com",
  messagingSenderId: "25543404936",
  appId: "1:25543404936:web:b02541a0c13d12251d9e3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth =getAuth(app);