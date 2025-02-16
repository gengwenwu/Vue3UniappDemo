<template>

	<view>
		<button size="default" type="primary" loading>按钮</button>
		<view> ---- </view>

		<input type="text" confirm-type="search" placeholder="请输入内容" placeholder-style="color:orange" />
	</view>


	<view>插值表达式语法</view>
	<view> {{ 2+3 }} </view>
	<view> {{ a+5 }} </view>
	<view> {{ Date.now()}} </view>
	<view> {{ Math.random() }} </view>
	<view> {{ 1>2 ? '张三' : '李四' }} </view>
	<view> {{ fu() }} </view>

	<view> {{num1}} </view>
	<view> {{num2}} </view>
	<view> {{test}} </view>
	<view> {{arr[2]}} </view>
	<view> {{obj.name}} </view>
</template>

<script setup>
	// 从 vue 引入ref
	import { ref } from "vue";

	// 常量
	const a = 6;
	function fu() {
		return "vue3表达式"
	}

	let num1 = 6;
	// 没有ref方式，定时器并不会触发UI 元素变更
	// setInterval(() => {
	// 	num1++;
	// 	console.log(num1)
	// })

	let num2 = ref(10);
	//console.log(num1)
	// 使用ref方式，定时器触发UI 元素变更
	setInterval(() => {
		num2.value++;
		console.log(num2.value)
	}, 1000)

	// ref 中可以存放不同类型的值
	let test = ref("hello world")
	let arr = ref([1, 2, 3, 4])
	let obj = ref({ name: "王五", age: 18 })
	// 使用ref技术，通过value，才能读取值、或者更新值
	obj.value.name = "李四"
</script>

<style>

</style>