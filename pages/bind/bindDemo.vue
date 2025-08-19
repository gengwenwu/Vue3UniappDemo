<template>
	<view>
		<!-- v-bind 全量写法，官方文档：https://cn.vuejs.org/guide/essentials/template-syntax.html#attribute-bindings -->
		<image v-bind:src="picUrlDog" mode="aspectFill" />
		<!-- v-bind 简写 -->
		<image :src="picUrl" mode="aspectFill" />

		<!-- uniapp组件 bool属性，false 使用 v-bind 才会生效，否则是字符串类型，依旧是true -->
		<button type="primary" :loading="false" :disabled="false">按钮</button>

		<!-- vue 会把对象中值为true的键添加到class里 -->
		<view class="box" :class="{active:isActive}">v-bind指令</view>
		<!-- 使用三元表达式，容易理解 -->
		<view class="box" :class="isActive ? 'active' : ''">v-bind指令</view>
		<!-- 动态修改内联样式 -->
		<view class="box" :style="{width:'300px', height:'100px', fontSize:size+'px'}">内联样式</view>

	</view>
</template>

<script setup>
	import { ref } from "vue"

	const isActive = ref(true)

	const picUrlDog = ref("/static/image_dog.png")
	const picUrl = ref("/static/image_old_man.png")
	const arrs = ref([
		"/static/image_dog.png",
		"/static/image_fruit.png",
		"/static/image_old_man.png",
		"/static/image_woman.png"
	])

	let i = 0
	const size = ref(20)

	setInterval(() => {
		i++

		// 动态修改图片地址
		picUrl.value = arrs.value[i % 4]

		// 取反
		isActive.value = !isActive.value

		size.value++
		if (size.value > 30) {
			size.value = 20
		}

	}, 1500)
</script>

<style lang="scss">
	image {
		width: 40%;
		height: 100px;
	}

	.box {
		width: 100px;
		height: 50px;
		background: orange;
	}

	.active {
		background: green;
		color: #fff;
	}
</style>