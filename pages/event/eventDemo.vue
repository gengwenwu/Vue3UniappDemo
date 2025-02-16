<template>
	<!-- 事件，使用v-On: -->
	<view class="box" v-on:click="onClick" :style="{background: color}">点击我 {{num}}</view>

	<!-- 事件，使用@简写， 事件映射表 -》 https://uniapp.dcloud.net.cn/tutorial/vue3-basics.html#%E4%BA%8B%E4%BB%B6%E6%98%A0%E5%B0%84%E8%A1%A8-->
	<view class="box" @click="onClick" style="background: green;">Click me {{num2}}</view>


	<!-- 通过switch change事件，修改 button loading状态 -->
	<switch checked @change="onChange" />
	<button type="primary" :loading="isLoading">普通按钮</button>

</template>

<script setup>
	import {
		ref
	} from "vue";
	const num = ref(1);
	const num2 = ref(1);

	const color = ref("#fc359a")
	const isLoading = ref(true)

	function onClick() {
		num.value++;
		num2.value++;

		color.value = "#" + String(Math.random()).substring(3, 9)
	}

	function onChange(event) {
		isLoading.value = event.detail.value
		console.log(event)
	}
</script>

<style lang="scss">
	.box {
		width: 50%;
		height: 100px;
		background: orange;
	}
</style>