<template>
    <div class="send-private-message">
        <el-tabs v-model="activeKey" type="border-card" :tab-position="'left'" class="tabs">
            <el-tab-pane v-for="item in chatRecords" :key="item.recordId" :name="item.recordId">
                <template #label>
                    <el-space>
                        <el-avatar :icon="UserFilled" />
                        <div>
                            <span>{{ item.name }}</span>
                        </div>
                    </el-space>
                </template>
                <send-private-message :recordId="item.recordId"></send-private-message>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useSendPrivateMessageStore } from '@/store/chat/send-private-message'
import { useRouter } from 'vue-router';
import { UserFilled } from '@element-plus/icons-vue';
import SendPrivateMessage from '../components/SendPrivateMessage.vue';

const sendPrivateMessage = useSendPrivateMessageStore();
const { activeKey, chatRecords } = storeToRefs(sendPrivateMessage);
const router = useRouter();

const removeTab = (targetName: string) => {
    const tabs = chatRecords.value
    let activeName = activeKey.value
    if (activeName === targetName) {
        tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
                const nextTab = tabs[index + 1] || tabs[index - 1]
                if (nextTab) {
                    activeName = nextTab.name
                }
            }
        })
    }
    activeKey.value = activeName
    chatRecords.value = tabs.filter((tab) => tab.name !== targetName)
}

if (chatRecords.value.length == 0) {
    router.push({
        path: '/'
    })
}

</script>
<style>
.send-private-message .el-tabs {
    height: 650px;
    border-radius: 10px;
}

.send-private-message .tabs>.el-tabs__content {
    padding: 32px;
}

.send-private-message .tabs .el-tabs__nav-wrap {
    width: 260px;
}

.send-private-message .el-tabs__nav .el-tabs__item {
    text-align: left;
    height: 60px;
    line-height: 60px;
}
</style>
