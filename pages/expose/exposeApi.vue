<template>
	<view class="">
		<!-- 通过 ref 获取 xxm-expose子组件  -->
		<xxm-expose ref="child"></xxm-expose>
		<view>----</view>
		<view>子组件，str值:{{str}}</view>
		<!--  -->
		<button @click="update">点击，调用子组件函数，修改count</button>
	</view>
</template>

<script setup>
	import {
		ref,
		onMounted
	} from "vue"

	// 对父组件暴露变量、常量、函数。
	// 官方文档 https://cn.vuejs.org/api/sfc-script-setup.html#defineexpose

	const child = ref(null)
	const str = ref(null)
	console.log("setup child:", child.value)

	onMounted(() => {
		// 组件挂载成功回调
		str.value = child.value.str
		console.log("onMounted child:", child.value)
		// console.log("onMounted child.count:" + child.value.count)
	})

	const update = function() {
		// 调用子组件函数
		child.value.updateCount()
	}
</script>

<style lang="scss" scoped>

</style>