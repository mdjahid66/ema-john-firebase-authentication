// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA2daV5FkOAiLVCng4VyXAoXS3Fc3ESar0",
    authDomain: "ema-john-simple-6f069.firebaseapp.com",
    projectId: "ema-john-simple-6f069",
    storageBucket: "ema-john-simple-6f069.appspot.com",
    messagingSenderId: "104895738533",
    appId: "1:104895738533:web:5fee23db8d9f04a599934c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;