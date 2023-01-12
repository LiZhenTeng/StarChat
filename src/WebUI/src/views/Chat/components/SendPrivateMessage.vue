<template>
    <ul class="infinite-list" style="overflow: auto">

        <li v-for="i in chatRecords.find(x => x.recordId == recordId)?.messages"
            :class="['infinite-list-item', user.token.split(',')[0] == i.id ? 'my-message' : '']">
            <message :avatar="i.avatar" :layout="user.token.split(',')[0] != i.id" :message="i.message" :name="i.name">
            </message>
        </li>
    </ul>
    <div class="infinite-list send">
        <el-input class="left" @keyup.enter="send" v-model="message" type="textarea" :input-style="{ height: '200px' }">
        </el-input>
        <div class="right">
            <el-button type="primary" @click="send">Send</el-button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useChatIndexStore } from '@/store/chat'
import { useIndexStore } from '@/store'
import { usePrivateMessageStore } from '@/store/chat/private-message'
import Message from './Message.vue';

const props = defineProps<{ recordId: string }>();

const indexStore = useIndexStore();
const chatIndexStore = useChatIndexStore();
const privateMessageStore = usePrivateMessageStore();

const { user } = storeToRefs(indexStore);
const { connection } = storeToRefs(chatIndexStore);
const { chatRecords } = storeToRefs(privateMessageStore);

const message = ref('');

const send = () => {
    connection.value.send("sendMessage", user.value.token.split(',')[0], message.value)
        .then(() => message.value = '');
}

if (user.value.token) {
    connection.value.on('receivedMessage', (username: string, message: string) => {
        chatRecords.value.find(x => x.recordId == props.recordId)?.messages.push({
            id: username, name: username, message
        });
    })
    connection.value.start().then(() => {
        console.log('SignalR is now connected');
    }).catch((err) => console.log(err));
}

</script>

<style>
.infinite-list {
    height: 400px;
    padding: 0;
    margin: 0;
    list-style: none;
}

.infinite-list .infinite-list-item {
    display: flex;
    align-items: center;
    margin: 15px;
}

.infinite-list .infinite-list-item+.list-item {
    margin-top: 10px;
}

.infinite-list .my-message {
    justify-content: flex-end;
}

.send {
    height: 200px;
}

.send .left {
    width: 90%;
    height: 200px;
    float: left;
}

.send .right {
    text-align: center;
    width: 10%;
    height: 200px;
    float: right;
}
</style>