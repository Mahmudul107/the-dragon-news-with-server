// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMOwLZQeHl1YXcDKL499KovQ9yRMN7onc",
  authDomain: "the-news-dragon-190f7.firebaseapp.com",
  projectId: "the-news-dragon-190f7",
  storageBucket: "the-news-dragon-190f7.appspot.com",
  messagingSenderId: "218678856437",
  appId: "1:218678856437:web:6af2ac7fa33f1024c5d3bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;