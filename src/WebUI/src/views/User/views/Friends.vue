<template>
    <ul>
        <li v-for="i in users">{{ i.nickname }}</li>
    </ul>
</template>
<script lang="ts" setup>
import { reactive } from 'vue';

const users=reactive<Array<{nickname:string,email:string}>>([{nickname:'刘昶',email:'liuchang@qq.com'}]);

</script>