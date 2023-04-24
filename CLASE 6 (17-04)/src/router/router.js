import Home from "../pages/Home.vue";
import Chat from "../pages/Chat.vue";
import Login from "../pages/Login.vue";
import Register from "../pages/Register.vue";
import {createRouter, createWebHashHistory} from "vue-router";

const routes = [
    { path: '/',                    component: Home, },
    { path: '/chat',                component: Chat, },
    { path: '/iniciar-sesion',      component: Login, },
    { path: '/registro',            component: Register, },
];

const router = createRouter({
    routes,
    // history define cómo funciona la navegación en Vue Router.
    // Puede ser con createWebHashHistory() o con createWebHistory().
    // El primero, que es el vamos a usar, maneja la navegación de las pantallas con el "hash" de la URL.
    // Por ejemplo:
    //  http://localhost/#/
    //  http://localhost/#/chat
    // El segundo, maneja las rutas usando la API de JS de History, generando URLs amigables. Por ejemplo:
    //  http://localhost/
    //  http://localhost/chat
    // ¿Por qué usamos la versión "hash" no la "amigable"?
    // Porque requiere un setup especial de backend. Tenemos que tener un servidor con Node.js y con soporte
    // para Vue y SSR (Server-Side Rendering).
    // Como no tenemos eso (y no es el foco de la materia), nos vamos a manejar con el hash.
    history: createWebHashHistory(),
});

export default router;
