<script>
export default {
    name: "Button",
    props: {
        full: {
            type: Boolean,
            default: false,
        }
    }
};
</script>

<template>
    <button
        type="submit"
        class="transition-colors bg-blue-700 focus:bg-blue-600 hover:bg-blue-600 active:bg-blue-800 p-2 rounded text-white"
        :class="{
            'w-full': full,
        }"
    >
        <slot>Enviar</slot>
    </button>
</template>
