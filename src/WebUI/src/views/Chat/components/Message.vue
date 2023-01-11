<template>
    <el-space v-if="layout">
        <el-avatar :icon="UserFilled" :src="avatar" />
        <div>
            <span>{{ message }}</span>
        </div>
    </el-space>
    <el-space v-else>
        <div>
            <span>{{ message }}</span>
        </div>
        <el-avatar :icon="UserFilled" :src="avatar" />
    </el-space>
</template>
<script lang="ts" setup>
import { UserFilled } from '@element-plus/icons-vue';

defineProps<{
    layout: boolean,
    name: string,
    avatar?: string | undefined,
    message: string
}>();

</script>
