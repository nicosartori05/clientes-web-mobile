<script>
import {dateToString} from "../helpers/date.js";
import {sendMessage, subscribeToChatMessages} from "../services/chat.js";
import Button from "../components/Button.vue";
import Label from "../components/Label.vue";
import Input from "../components/Input.vue";
import Textarea from "../components/Textarea.vue";

export default {
    name: "Chat",
    components: {Textarea, Input, Label, Button},
    // Repasamos :D
    // El 'data' define el "state" del componente.
    // En informática, nos referimos como "state" a los datos que pertenecen a una pieza de software,
    // como puede ser un programa, un objeto, un componente, etc.
    // En frameworks como Vue, típicamente consideramos al state como los datos que pertenecen
    // específicamente al componente, que no puede recibir de un componente padre ("props"), y que pueden
    // variar con el tiempo.
    // La propiedad 'data' recibe como valor una función que retorna un objeto con la data inicial del state.
    data: () => ({
        initialLoading: true,
        messages: [],
        form: {
            username: '',
            message: '',
        },
        formLoading: false,
    }),

    methods: {
        sendMessage() {
            this.formLoading = true;
            sendMessage({
                ...this.form
            })
                .then(() => {
                    this.formLoading = false;
                    this.form.message = '';
                });
        },

        dateToString(date) {
            return dateToString(date);
        }
    },

    // mounted() es parte de las funciones de ciclo de vida (life-cycle functions) de un componente.
    mounted() {
        subscribeToChatMessages(messages => {
            this.initialLoading = false;
            this.messages = messages;
        });
    },
};
</script>

<template>
    <h1 class="text-4xl mb-4">Chat</h1>

    <div class="flex justify-between gap-4">
        <div class="w-9/12">
            <p v-if="initialLoading">Cargando...</p>
            <ul v-else>
                <li v-for="message in messages">
                    <b>({{ dateToString(message.created_at) }}) {{ message.username }} dijo:</b>
                    {{ message.message }}
                </li>
            </ul>
        </div>
        <div class="w-3/12">
            <form
                action="#"
                method="post"
                id="form-message"
                @submit.prevent="sendMessage"
            >
                <div class="mb-3">
                    <Label for="username">Usuario</Label>
                    <Input
                        type="text"
                        id="username"
                        v-model="form.username"
                    />
                </div>
                <div class="mb-3">
                    <Label for="message">Mensaje</Label>
                    <Textarea
                        id="message"
                        v-model="form.message"
                    ></Textarea>
                </div>
                <Button full />
            </form>

            <div
                v-if="formLoading"
                class="mb-3"
            >Enviando mensaje...</div>
        </div>
    </div>
</template>
