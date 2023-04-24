<script>
export default {
    name: "Input",
    // https://vuejs.org/guide/components/v-model.html
    props: ['modelValue'],
    emits: ['update:modelValue'],
};
</script>

<template>
    <input
        class="w-full p-2 border border-slate-400 rounded"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
    >
</template>
