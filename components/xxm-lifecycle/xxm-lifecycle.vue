<template>
	<view>
		子组件，2秒后消失（卸载监听）
	</view>
</template>

<script setup>
	import { ref, onUnmounted } from "vue"

	// 卸载生命周期监听
	onUnmounted(() => {
		console.log("子组件卸载监听")
	})
</script>

<style lang="scss">

</style>