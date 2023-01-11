import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia';
import { useIndexStore } from '@/store'
import { ElMessage } from 'element-plus';

export const useLoginVerification = () => {
    const router = useRouter();
    const indexStore = useIndexStore();
    const { user } = storeToRefs(indexStore);
    if (!user.value.token) {
        ElMessage({
            message: 'Please Login Or Register！',
            type: 'warning',
            duration: 1000,
            onClose: () => {
                router.push({
                    path: 'chat-login'
                })
            }
        })
    }
}