<script>
export default {
    name: 'App',
}
</script>

<template>
    <div class="sm:grid grid-rows-app h-full">
        <nav class="sm:flex justify-between p-4 bg-slate-200 text-slate-800">
            <router-link to="/" class="text-2xl">DV Chat</router-link>
            <ul class="sm:flex gap-4">
                <li>
                    <router-link class="block py-2 sm:p-0" to="/">Home</router-link>
                </li>
                <li>
                    <router-link class="block py-2 sm:p-0" to="/chat">Chat</router-link>
                </li>
                <li>
                    <router-link class="block py-2 sm:p-0" to="/iniciar-sesion">Iniciar Sesión</router-link>
                </li>
                <li>
                    <router-link class="block py-2 sm:p-0" to="/registro">Registro</router-link>
                </li>
            </ul>
        </nav>
        <main class="container h-full p-4 m-auto">
            <router-view />
        </main>
        <footer class="flex justify-center items-center h-[150px] bg-gray-900 text-white">
            <p>&copy; Da Vinci 2023</p>
        </footer>
    </div>
</template>
