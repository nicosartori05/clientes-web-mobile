// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//agregamos el SDK de firestore e importamos las funciones a utilizar
import {
  getFirestore,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDkGUBQdVRFBnIEe3dmX2rEFO5roHyi9Y0",
  authDomain: "dw-1-prueba.firebaseapp.com",
  projectId: "dw-1-prueba",
  storageBucket: "dw-1-prueba.appspot.com",
  messagingSenderId: "647725318919",
  appId: "1:647725318919:web:dcfe33eb3818abcdf13ba2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//inicializamos firestore y obtenemos la referencia a la base de datos

const db = getFirestore(app);

export{app,db};