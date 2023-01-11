<template>
    <el-form :model="form" label-width="120px">
        <el-form-item label="Nickname：">
            <el-input :input-style="{ width: '50%' }" v-model="form.nickname" clearable
                placeholder="Please input nickname" />
        </el-form-item>
        <el-form-item label="Phone：">
            <el-input :input-style="{ width: '50%' }" v-model="form.phone" clearable placeholder="Please input phone" />
        </el-form-item>
        <el-form-item label="Email：">
            <el-input :input-style="{ width: '50%' }" v-model="form.email" clearable placeholder="Please input email" />
        </el-form-item>
        <el-form-item label="Password：">
            <el-input :input-style="{ width: '50%' }" v-model="form.password" placeholder="Please input password"
                show-password />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="login">Submit</el-button>
            <el-button>Reset</el-button>
        </el-form-item>
    </el-form>
</template>
<script lang="ts" setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useIndexStore } from '@/store'
import { storeToRefs } from 'pinia';

const indexStore = useIndexStore();
const { user } = storeToRefs(indexStore);
const form = reactive({
    nickname: '星星魔法术',
    email: '2943560252@qq.com',
    phone: '17303864846',
    password: 'haoxihuanni..'
})

const router = useRouter();

const login = () => {
    user.value.token = `${form.nickname},${form.email},${form.password}`;
    router.push({
        path: '/'
    })
}

</script>