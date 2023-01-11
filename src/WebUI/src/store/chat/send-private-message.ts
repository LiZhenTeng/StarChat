import { defineStore } from 'pinia';

interface State {
    activeKey: string,
    messages: Array<{
        name: string,
        key: string
    }>
}

export const useSendPrivateMessageStore = defineStore('sendPrivateMessage', {
    state: (): State => ({
        activeKey: '',
        messages: []
    })
})