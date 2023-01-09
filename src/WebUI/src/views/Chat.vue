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
import { HubConnectionBuilder } from '@microsoft/signalr';
import { ElMessage } from 'element-plus';

const messages = ref<Array<{ username: string, message: string }>>([]);
const message = ref('');
const username = ref('');
const connection = new HubConnectionBuilder().withUrl('http://localhost:5298/hub').build();
connection.on('messageReceived', (username: string, message: string) => {
    messages.value.push({
        username, message
    });
})

connection.start().then(response=>{
    console.log('SignalR is now connected');
}).catch((err) => console.log(err));


const send = () => {
    console.log(connection)
    connection.send("newMessage", username, message)
        .then(() => (message.value = ''));

}

</script>