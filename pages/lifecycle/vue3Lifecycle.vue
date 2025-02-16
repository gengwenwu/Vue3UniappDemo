<template>
	<view class="layout">
		<!-- 通过ref，可以在vue3脚本里获取到html组件节点 -->
		<scroll-view scroll-y="true" ref="scroll">
			<view>vue3 组件生命周期、hook，看具体代码</view>
		</scroll-view>
		<xxm-lifecycle v-if="show"></xxm-lifecycle>
	</view>
</template>

<!-- vue3 生命周期 官方文档：https://cn.vuejs.org/guide/essentials/lifecycle.html 

相关hook
https://cn.vuejs.org/api/composition-api-lifecycle
-->

<!-- setup 生命周期在vue3的 beforeCreate、created 之前？-->
<script setup>
	import { onMounted, ref } from "vue"

	// ref 中设置为scroll，可以拿到 html组件节点，但是必须挂在成功后，setup是拿不到的
	const scroll = ref(null)
	console.log("setup scroll->", scroll.value)

	// 监听 onMounted 挂载生命周期
	onMounted(() => {
		// 挂在成功回调，可以拿到html组件节点
		console.log("onMounted scroll->", scroll.value)
	})

	// 子组件卸载，看子组件卸载监听代码
	const show = ref(true)
	setTimeout(() => {
		show.value = false
	}, 2000)
</script>

<style lang="scss" scoped>

</style>