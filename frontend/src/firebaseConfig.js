import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
import {getAuth} from "firebase/auth";
import { getStorage } from 'firebase/storage';

export const firebaseConfig = {
    apiKey: "AIzaSyAjAVL84NnoDGh-8x4BWlZfElRk2L-PZ9Q",
    authDomain: "sih23-2.firebaseapp.com",
    projectId: "sih23-2",
    storageBucket: "sih23-2.appspot.com",
    messagingSenderId: "1022128069376",
    appId: "1:1022128069376:web:a8139842b2e38531ecb1e5"
};


const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);