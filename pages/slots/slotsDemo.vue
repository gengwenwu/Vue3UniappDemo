<template>
	<view class="">
		<navigator url="/pages/slots/slotsDemo1">卡槽slots 案例1</navigator>
		<navigator url="/pages/slots/slotsDemo2">卡槽slots 案例2</navigator>

		<!-- 接收子组件参数回调，使用@开头。这里的add、change，是在子组件申明的事件名称 -->
		<xxm-child @add="onAdd" @change="onChange" />

		<view class="box" :style="{background:color, fontSize:size + 'px'}">num:{{num}}</view>
	</view>
</template>

<script setup>
	// 官方slots教程 https://cn.vuejs.org/guide/components/slots.html
	import { ref } from "vue"
	const num = ref(0)
	const color = ref('#ccc')
	const size = ref(12)

	const onAdd = function (e) {
		// 接收子组件回调值
		console.log(e)
		num.value = e
		color.value = "#" + String(e).substring(3, 6)
	}

	const onChange = function (e) {
		// 接收子组件回调值
		console.log(e);
		size.value = e;
	}
</script>

<style lang="scss" scoped>
	navigator {
		color: blue;
	}

	.box {
		height: 100px;
		width: 200px;
	}
</style>