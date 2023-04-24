import { initializeApp } from "firebase/app";
import {
    getFirestore,
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAwe_RwaQhD8Rk7ps-wx832t4sprWfDWxk",
    authDomain: "dv-2023-1-cwm-noche.firebaseapp.com",
    projectId: "dv-2023-1-cwm-noche",
    storageBucket: "dv-2023-1-cwm-noche.appspot.com",
    messagingSenderId: "922176954340",
    appId: "1:922176954340:web:a80788f0a5547e87aef1f1"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {app, db};
