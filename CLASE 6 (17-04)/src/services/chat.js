/*
Servicio para manejar todas las funcionalidades relativas al chat.

Entre sus obligaciones, está la de ser una capa de abstracción con respecto a Firebase.
*/
import {db} from "./firebase.js";
import {addDoc, collection, onSnapshot, orderBy, query, serverTimestamp} from "firebase/firestore";

/**
 * Guarda un mensaje de chat en la base de datos.
 *
 * @param {{username: string, message: string}} data
 * @returns {Promise<null>}
 */
export function sendMessage(data) {
    const chatRef = collection(db, 'minichat');

    return addDoc(chatRef, {
        ...data,
        created_at: serverTimestamp(),
    })
        // Este then que retorne un null lo hacemos para que se nos "escape" la referencia al documento que
        // el método addDoc retorna como resultado de la promesa.
        .then(() => null)
        .catch(err => {
            console.error('[chat.js sendMessage] Error al enviar el mensaje. ', err);
            throw err;
        });
}

/**
 * Crea una suscripción para recibir los mensajes de chat.
 * Cada vez que haya nuevos mensajes, se ejecuta la función callback, la que recibe los mensajes como un
 * array de objetos.
 *
 * @param {(messages: [{username: string, message: string, created_at: Date}]) => {}}callback
 */
export function subscribeToChatMessages(callback) {
    const chatRef = collection(db, 'minichat');
    const q = query(chatRef, orderBy('created_at'));

    onSnapshot(q, snapshot => {
        const output = [];

        snapshot.forEach(doc => {
            output.push({
                username: doc.data().username,
                message: doc.data().message,
                created_at: doc.data().created_at.toDate(),
            });
        });

        // Invocamos la función de callback que nos pasaron como argumento y le proveemos con los mensajes
        // parseados.
        callback(output);
    });
}
