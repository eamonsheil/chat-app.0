import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';



try {
    firebase.initializeApp({
        apiKey: "AIzaSyBWDNHLIhgQVoAoJ6wmQG82Yfxkx0eAH38",
        authDomain: "practice-9bef1.firebaseapp.com",
        projectId: "practice-9bef1",
        storageBucket: "practice-9bef1.appspot.com",
        messagingSenderId: "646092485285",
        appId: "1:646092485285:web:748de1310956910046934c",
        measurementId: "G-QFTDG68KSC"
    })
} catch (error) {
    console.log(error)
}

const auth = firebase.auth();
const firestore = firebase.firestore();





export const firebaseConfig = {
    apiKey: "AIzaSyBWDNHLIhgQVoAoJ6wmQG82Yfxkx0eAH38",
    authDomain: "practice-9bef1.firebaseapp.com",
    projectId: "practice-9bef1",
    storageBucket: "practice-9bef1.appspot.com",
    messagingSenderId: "646092485285",
    appId: "1:646092485285:web:748de1310956910046934c",
    measurementId: "G-QFTDG68KSC"
};
