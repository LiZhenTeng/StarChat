import { defineStore } from "pinia";
import type { DefineComponent } from 'vue';

interface State {
    theme: string;
    language: string;
    menu: {
        group?: Array<Menu>;
        item?: Array<MenuItem>;
    },
    user: {
        token: string
    }
}

interface Menu {
    index: string;
    title: {
        icon?: DefineComponent<any, any, any>;
        text?: string;
    };
    group: {
        icon?: DefineComponent<any, any, any>;
        title?: string;
        item: Array<MenuItem>;
    };
}

interface MenuItem {
    icon?: DefineComponent<any, any, any>;
    index: string;
    text?: string;
}
export const useIndexStore = defineStore('index', {
    state: (): State => ({
        theme: 'dark',
        language: 'zhCn',
        menu: {
            group: [{
                index: 'user',
                title: {
                    text: '联系人'
                },
                group: {
                    item: [
                        {
                            index: '/friends',
                            text: '好友',
                        }
                    ]
                }
            }],
            item: [{
                index: '/',
                text: '消息',
            }]
        },
        user:{
            token:''
        }
    })
})