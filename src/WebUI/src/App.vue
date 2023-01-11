<template>
	<el-config-provider :locale="locale" :message="{ max: 3 }">
		<div :style="{ height: 'inherit', width: 'inherit' }">
			<el-container :style="{ height: 'inherit' }">
				<el-aside width="250px">
					<sider-layout></sider-layout>
				</el-aside>
				<el-container :style="{ height: 'inherit' }">
					<el-header :style="{
						padding: '0',
						height: '48px',
						lineHeight: '48px',
					}">
						<header-layout></header-layout>
					</el-header>
					<el-main :style="{
						margin: '10px 10px 10px 10px',
						borderRadius: '4px',
						padding: '10px 10px',
						overflow: 'auto'
					}">
						<router-view></router-view>
					</el-main>
				</el-container>
			</el-container>
		</div>
	</el-config-provider>
</template>
<script lang="ts" setup>
import SiderLayout from "@/components/layout/SiderLayout.vue";
import HeaderLayout from "@/components/layout/HeaderLayout.vue";
import { storeToRefs } from 'pinia';
import { zhCn, en } from 'element-plus/es/locale/index'
import { useIndexStore } from '@/store'
import { ref, watch } from "vue";

const indexStore = useIndexStore();
const { language } = storeToRefs(indexStore);
const locale = ref({});

watch(language, (state) => {
	switch (state) {
		case 'zhCn':
			locale.value = zhCn;
			break;
		case 'en':
			locale.value = en;
	}
}, { immediate: true })
</script>