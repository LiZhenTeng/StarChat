import { defineStore } from "pinia";

export const usePrivateMessageStore = defineStore('privateMessage', {
    state: (): {
        chatRecords: Array<{
            recordId: string,
            messages: Array<{
                id:string,
                name: string,
                avatar?: string | undefined,
                message: string
            }>
        }>
    } => ({
        chatRecords: [{
            recordId: '1',
            messages: [{
                id:'刘磊',
                name: '刘磊',
                message: '1'
            }, {
                id:'刘磊',
                name: '刘磊',
                message: '2'
            }, {
                id:'星星魔法术',
                name: '星星魔法术',
                message: '3'
            }, {
                id:'星星魔法术',
                name: '星星魔法术',
                message: '4'
            }]
        },{
            recordId: '2',
            messages: [{
                id:'星星魔法术',
                name: '星星魔法术',
                message: '5'
            }, {
                id:'星星魔法术',
                name: '星星魔法术',
                message: '6'
            }, {
                id:'刘昶',
                name: '刘昶',
                message: '7'
            }, {
                id:'刘昶',
                name: '刘昶',
                message: '8'
            }]
        }]
    }),

})

