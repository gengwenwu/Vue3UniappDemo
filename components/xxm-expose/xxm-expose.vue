<template>
	<view class="out">
		子组件,count值:{{count}}
	</view>
</template>

<script setup>
	import { ref } from "vue"

	const count = ref(100)
	const updateCount = function () {
		count.value++
	}

	// 通过 defineExpose api，可以对父组件暴露变量、常量、函数。
	// 官方文档 https://cn.vuejs.org/api/sfc-script-setup.html#defineexpose
	defineExpose({
		// 暴露 count
		count,
		// 暴露字符串
		str: "咸虾米",
		// 暴露函数
		updateCount
	})
</script>

<style lang="scss" scoped>
	.out {
		height: 40px;
		background: pink;
	}
</style>