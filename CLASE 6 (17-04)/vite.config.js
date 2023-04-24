// Importamos el plugin de vue, y lo agregamos a los plugins de Vite.
import vue from '@vitejs/plugin-vue';
import tailwindcss from 'tailwindcss';

export default {
    plugins: [vue(), tailwindcss()],
}
