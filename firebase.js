// Import the functions you need from the SDKs you need
import { initializeApp, getApps , getApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "your_api_key",
  authDomain: "auth_domain",
  projectId: "your_project_id",
  storageBucket: "_your_storage_bucket",
  messagingSenderId: "your_sender_id",
  appId: "your_app_id"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore()
const storage = getStorage()

export {app , db , storage};
