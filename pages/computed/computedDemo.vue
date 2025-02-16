<template>
	<view class="out">
		<input type="text" placeholder="请输入名" v-model="lastName" />
		<input type="text" placeholder="请输入姓" v-model="firstName" />

		<view>全称：{{firstName + "-" + lastName}}</view>

		<view>全称：{{fullName}}</view>
		<view>全称：{{fullName}}</view>
		<view>全称：{{fullName}}</view>
	</view>
</template>

<script setup>
	// 引入 computed
	import { ref, computed } from "vue"
	const firstName = ref("11")
	const lastName = ref("22")

	// 使用计算属性： computed，值如果不变，会使用缓存，不会重复调用逻辑计算。
	const fullName = computed(() => {
		console.log("计算属性")
		return firstName.value + "-" + lastName.value
	})

	// 计算属性, 尽量只读，避免写操作。通过数据源去修改，如修改 firstName、lastName
	// fullName.value = "abc" // 警告
	console.log(fullName.value) // value获取值

	// 函数方式，使用插值表达式，需要加(), 并且没有缓存，重复调用逻辑
	// const fullName = function () {
	// 	console.log("方法")
	// 	return (firstName.value + "-" + lastName.value)
	// }
</script>

<style lang="scss" scoped>
	.out {
		padding: 20px;

		input {
			border: 1px solid #ccc;
			height: 40px;
			padding: 0 10px;
			margin: 10px 0;
		}
	}
</style>