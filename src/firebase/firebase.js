import { initializeApp } from "firebase/app"

import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCqBdl9mbX_S5_vq2AJvDOCJ8QKWdEza8w",
    authDomain: "futnote-307f9.firebaseapp.com",
    projectId: "futnote-307f9",
    storageBucket: "futnote-307f9.appspot.com",
    messagingSenderId: "368212112595",
    appId: "1:368212112595:web:9e09147b38016db848d026",
    measurementId: "G-0JHGY4RJSD"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)