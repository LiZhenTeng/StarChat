import { defineStore } from 'pinia';

interface State {
    activeKey: string,
    chatRecords: Array<{
        name: string,
        recordId: string
    }>
}

export const useSendPrivateMessageStore = defineStore('sendPrivateMessage', {
    state: (): State => ({
        activeKey: '',
        chatRecords: []
    })
})