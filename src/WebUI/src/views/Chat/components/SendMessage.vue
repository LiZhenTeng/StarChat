<template>
    <div>
        <ul>
            <li v-for="(e,i) in messages" :key="i">{{ `${e.username}：${e.message}` }}</li>
        </ul>
    </div>
    <el-form :model="form" label-width="120px">
        <el-form-item label="Message：">
            <el-input :input-style="{ width: '50%' }" v-model="form.message" clearable
                placeholder="Please input message" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="send">Send</el-button>
        </el-form-item>
    </el-form>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { storeToRefs } from 'pinia';
import { useChatIndexStore } from '@/store/chat'
import { useLoginVerification } from '@/views'
import { useIndexStore } from '@/store'

//useLoginVerification();

const indexStore = useIndexStore();
const chatIndexStore = useChatIndexStore();

const { user } = storeToRefs(indexStore);
const { connection } = storeToRefs(chatIndexStore);

const messages = ref<Array<{ username: string, message: string }>>([]);
const form = reactive({
    message: ''
})

const send = () => {
    connection.value.send("sendMessage", user.value.token.split(',')[0], form.message)
        .then(() => form.message = '');
}

if (user.value.token) {
    connection.value.on('receivedMessage', (username: string, message: string) => {
        messages.value.push({
            username, message
        });
    })
    connection.value.start().then(() => {
        console.log('SignalR is now connected');
    }).catch((err) => console.log(err));
}





</script>
<style>
.infinite-list-wrapper {
    height: 300px;
    text-align: center;
}

.infinite-list-wrapper .list {
    padding: 0;
    margin: 0;
    list-style: none;
}

.infinite-list-wrapper .list-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    background: var(--el-color-danger-light-9);
    color: var(--el-color-danger);
}

.infinite-list-wrapper .list-item+.list-item {
    margin-top: 10px;
}
</style>