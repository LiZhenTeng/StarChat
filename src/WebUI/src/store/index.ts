import { defineStore } from "pinia";
import type { DefineComponent } from 'vue';
import { HomeFilled, Grid } from '@element-plus/icons-vue';

interface State {
    theme: string;
    language: string;
    menu: {
        group?: Array<Menu>;
        item?: Array<MenuItem>;
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
                index: 'chat',
                title: {
                    icon: Grid,
                    text: 'Chat'
                },
                group: {
                    item: [
                        {
                            index: '/chat',
                            text: '系统消息',
                        }
                    ]
                }
            }],
            item: [{
                icon: HomeFilled,
                index: '/',
                text: '首页',
            }]
        }
    })
})