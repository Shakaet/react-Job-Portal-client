// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

    apiKey:import.meta.env.VITE_apiKey,
    authDomain:import.meta.env.VITE_authDomain,
    projectId:import.meta.env.VITE_projectId,
    storageBucket:import.meta.env.VITE_storageBucket,
    messagingSenderId:import.meta.env.VITE_messagingSenderId,
    appId:import.meta.env.VITE_appId,
//   apiKey: "AIzaSyAYTYu429qF7pGObLaasTeJKypPAEYx_84",
//   authDomain: "job-portal-891fe.firebaseapp.com",
//   projectId: "job-portal-891fe",
//   storageBucket: "job-portal-891fe.firebasestorage.app",
//   messagingSenderId: "599192536203",
//   appId: "1:599192536203:web:86366373e3e9782b54008e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth