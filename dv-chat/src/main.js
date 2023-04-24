
import { chatSendMessage, subscribeToChatMessages } from "./services/chat.js";
// Capturamos los elementos de HTML que queremos usar

const form = document.getElementById("form-message");
const username = document.getElementById("username");
const message = document.getElementById("message");
const feedback = document.getElementById("feedback");

form.addEventListener("submit", function (ev) {
  ev.preventDefault();

  feedback.innerHTML = "Enviando...";

  const data = {
    username: username.value,
    message: message.value,
  };
  chatSendMessage(data)
    .then((doc) => {
      feedback.innerHTML = "";
      message.value = "";
    })
    .catch((err) => {
      feedback.innerHTML = "Ocurrio un error al envair el mensaje";
    });
});

const chat = document.getElementById("chat");

subscribeToChatMessages((messages) => {
  const messagesList = [];

  messages.forEach((message) => {
    messagesList.push(`
      <li>
        <b>
          (${String(message.created_at).substring(16, 24)}) 
          ${message.username} dijo:
        </b>
        ${message.message}
      </li>`
    );
  });

  chat.innerHTML = `<ul>${messagesList.join("")}</ul>`;
});
