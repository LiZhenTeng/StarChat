<template>
    <el-space wrap :size="28" :style="{ float: 'right' }">
        <el-switch v-model="theme" border-color="#3c3c3c4a" inline-prompt active-value="dark" inactive-color="#ccc"
            active-color="#2c2c2c" inactive-value="light" :active-icon="Moon" :inactive-icon="Sunny" />
        <el-icon v-if="language == 'zhCn'" @click="language = 'en'" style="font-size: 24px;cursor: pointer;">
            <zhCnIcon />
        </el-icon>
        <el-icon v-if="language == 'en'" @click="language = 'zhCn'" style="font-size: 24px;cursor: pointer;">
            <enIcon />
        </el-icon>
        <el-dropdown>
            <el-icon style="font-size: 24px;">
                <setting />
            </el-icon>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item>View</el-dropdown-item>
                    <el-dropdown-item>Add</el-dropdown-item>
                    <el-dropdown-item>Delete</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
        <el-icon style="font-size: 24px;">
            <el-tooltip class="box-item" effect="dark" :content="user.token.split(',')[0]" placement="bottom">
                <UserFilled />
            </el-tooltip>
        </el-icon>
    </el-space>
</template>
<script lang="ts" setup>
import { Setting, Sunny, Moon, UserFilled } from '@element-plus/icons-vue'
import { storeToRefs } from 'pinia'
import { watch } from 'vue';
import { zhCn as zhCnIcon, en as enIcon } from '@/components/icons'
import { useIndexStore } from '@/store'

const indexStore = useIndexStore();
const { theme, language, user } = storeToRefs(indexStore)
const el = document.querySelector('html');


watch(theme, (state) => {
    state == 'dark' ? el?.classList.add('dark') : el?.classList.remove('dark');
}, { immediate: true })

</script>