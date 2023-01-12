<template>
    <ul>
        <li v-for="i in users" @click="view(i.key)">{{ `${i.name}` }}</li>
    </ul>
</template>
<script lang="ts" setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useSendPrivateMessageStore } from '@/store/chat/send-private-message';
import { useLoginVerification } from '@/views'

useLoginVerification();

const sendPrivateMessage = useSendPrivateMessageStore();
const { activeKey, chatRecords } = storeToRefs(sendPrivateMessage);

const users = reactive<Array<{ name: string, avatar?: string,  key: string }>>([{
    name: '刘磊',
    key: '1'
}, {
    name: '刘昶',
    key: '2'
}])

const router = useRouter();

const view = (key: string) => {
    sendPrivateMessage.$reset();
    activeKey.value = key;
    chatRecords.value=[{
        recordId:'1',
        name:'刘磊'
    },{
        recordId:'2',
        name:'刘昶'
    }];
    router.push({
        path: '/private-message'
    })
}

</script>