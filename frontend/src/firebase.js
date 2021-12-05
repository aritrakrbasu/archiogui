// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCAZHRcQYyziT6aHuk0hQav5syWK9d61ks",
	authDomain: "archiogui.firebaseapp.com",
	projectId: "archiogui",
	storageBucket: "archiogui.appspot.com",
	messagingSenderId: "768310716707",
	appId: "1:768310716707:web:3fc8d8f45f40ca45828496",
	measurementId: "G-47TLJ26GWT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storageRef = getStorage(app);