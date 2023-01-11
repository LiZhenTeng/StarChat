<template>

    <ul class="infinite-list" style="overflow: auto">
        <li v-for="i in messages" :class="['infinite-list-item', user.token.split(',')[0] == i.id ? 'my-message' : '']">
            <message :avatar="i.avatar" :layout="user.token.split(',')[0] != i.id" :id="i.id" :message="i.message"
                :name="i.name">
            </message>
        </li>
    </ul>
    <div class="infinite-list send">
        <el-input class="left" type="textarea" :input-style="{ height: '200px' }">
        </el-input>
        <div class="right">
            <el-button>Send</el-button>
        </div>
    </div>
</template>
<script lang="ts" setup>
import Message from './Message.vue';
import { useIndexStore } from '@/store';
import { storeToRefs } from 'pinia';

defineProps<{
    messages: Array<{
        id: string,
        name: string,
        avatar?: string | undefined,
        message: string
    }>
}>();
const indexStore = useIndexStore();
const { user } = storeToRefs(indexStore)

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