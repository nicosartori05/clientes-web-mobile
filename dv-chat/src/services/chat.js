//servicio para manejar todas las funcionalidades relativas al chat
//entre sus obligaciones, esta la de ser una capa de abtraccion con respecto a firebase
import { db } from "./firebase.js";
import {
  addDoc,
  collection,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";

/**
 * Guarda un mensaje de chat en al base de datos
 * @param {username: string, message: string} data
 * @returns
 */
export function chatSendMessage(data) {
  const chatRef = collection(db, "minichat");

  return (
    addDoc(chatRef, {
      ...data,
      created_at: serverTimestamp(),
    })
      //este then que retorne null, lo hacemos para que no se nos escape la referencia al documento que el metodo addDoc retorna como resultado a la promesa.
      .then(() => null)
      .catch((err) => {
        console.error(
          "[chat.js chatSendMessage] Error al enviar el mensaje",
          err
        );
        throw err;
      })
  );
}
/**
 * Crea una suscripcion para recibir los mensajes de chat.
 * cada vez q2ue haya nuevo mensajes, se ejecuta la funcion callback, la que recibe los mensajes como un array de objetos
 * @param {(messages: [{username: string, message: string, created_at: Date}]) => {}}callback 
 */
export function subscribeToChatMessages(callback) {
  const chatRef = collection(db, "minichat");
  const q = query(chatRef, orderBy("created_at"));
  onSnapshot(q, (snapshot) => {
    const output = [];

    snapshot.forEach((doc) => {
      output.push({
        username: doc.data().username,
        message: doc.data().message,
        created_at: doc.data().created_at.toDate(),
      });
    });
    //Invocamos la funciuon de callback que nos pasaron como argumento y le proveemos con los mensajes parseados.

    callback(output);
  });
}
