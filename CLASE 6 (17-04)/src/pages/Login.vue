<script>
import Button from "../components/Button.vue";

export default {
    name: "Login",
    components: {Button},
};
</script>

<template>
    <h1 class="text-4xl mb-4">Iniciar Sesión</h1>

    <form action="#" method="post">
        <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" name="email" id="email" class="form-control">
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" name="password" id="password" class="form-control">
        </div>
<!--        <button type="submit" class="transition-colors w-full bg-blue-700 focus:bg-blue-600 hover:bg-blue-600 active:bg-blue-800 p-2 rounded text-white">Ingresar</button>-->
        <Button>Ingresar</Button>
    </form>
</template>
