<script>
export default {
    name: "Textarea",
    props: ['modelValue'],
    emits: ['update:modelValue'],
};
</script>

<template>
    <textarea
        class="w-full p-2 border border-slate-400 rounded"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
    ></textarea>
</template>
