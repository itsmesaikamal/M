// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCYvMHWmrhfFTgccrQNZksx2ZSy_XxNOkg",
    authDomain: "factory-admin-6ced0.firebaseapp.com",
    projectId: "factory-admin-6ced0",
    storageBucket: "factory-admin-6ced0.appspot.com",
    messagingSenderId: "68530096979",
    appId: "1:68530096979:web:1e93c4089d58ad52546fa6"
    
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
