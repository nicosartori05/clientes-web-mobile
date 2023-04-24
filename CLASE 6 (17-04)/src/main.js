import './app.css';
import {createApp} from "vue";
import App from "./App.vue";
import router from "./router/router.js";

const app = createApp(App);

// Declaramos que nuestra app de Vue debe utilizar el router. Esto hace que esté disponible en todos los
// componentes.
app.use(router);

app.mount('#app');
