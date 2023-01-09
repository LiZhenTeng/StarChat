<template>
    <div>
        <ul>
            <li v-for="item in messages" :key="item.message">{{ item.username }}:{{ item.message }}</li>
        </ul>
    </div>
    <div class="input-zone">
        <label for="">UserName:</label>
        <input v-model="username" />
        <label>Message:</label>
        <input v-model="message" />
        <button @click="send">Send</button>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useChatIndexStore } from '@/store/chat'

const chatIndexStore = useChatIndexStore();
const { connection } = chatIndexStore;
const messages = ref<Array<{ username: string, message: string }>>([]);
const message = ref('');
const username = ref('');

connection.on('receivedMessage', (username: string, message: string) => {
    messages.value.push({
        username, message
    });
})

connection.start().then(() => {
    console.log('SignalR is now connected');
}).catch((err) => console.log(err));


const send = () => {
    connection.send("sendMessage", username.value, message.value)
        .then(() => message.value = '');
}

</script>