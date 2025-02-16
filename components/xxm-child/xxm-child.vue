<template>
	<view>
		子组件

		<!-- 通过 emit 发射数据给父组件，声明了add事件，父组件可以监听该名称 -->

		<!-- emit 使用方式1 -->
		<!-- <button @click="$emit('add', Math.random())">点击我，接收子组件回调</button> -->

		<!-- emit 使用方式2 -->
		<button @click="onClick">点击我，接收子组件回调</button>

		<view>-------</view>
		<input type="text" @input="onInput" placeholder="请输入数字,修改字体大小" />
	</view>
</template>

<script setup>
	// emit 使用方式2 ，使用 defineEmits 定义事件名称
	const emit = defineEmits(["add", "change"])

	function onClick() {
		// 通过事件名称传递值
		emit("add", Math.random())
	}

	function onInput(e) {
		// console.log(e.detail.value)
		emit("change", e.detail.value)
	}
</script>

<style lang="scss">
	input {
		height: 40px;
		border: 1px solid #cfcfcf;
	}
</style>