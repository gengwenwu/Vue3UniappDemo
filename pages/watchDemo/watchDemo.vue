<template>
	<view class="out">
		1姓名(监听基本数据)：<input type="text" v-model="name">
		{{name}}
	</view>

	<view class="out">
		2姓名(监听对象类型)：<input type="text" v-model="person.name">
		{{person.name}}
	</view>

	<view class="out">
		<input type="text" placeholder="请输入名" v-model="lastName" />
		<input type="text" placeholder="请输入姓" v-model="firstName" />
		<view>3全称：{{firstName + "-" + lastName}} (监听多个对象)</view>
	</view>
</template>

<script setup>
	// watch 官方资料
	// https://cn.vuejs.org/guide/essentials/watchers.html
	import { ref, watch, watchEffect } from "vue"

	// 1，仅监听新值变化, 与 computed 类似。这种方式适合基本数据类型
	const name = ref("张三")
	// watch(name, (newValue) => {
	// 	console.log("监听基本数据属性。newValue:" + newValue);
	// });

	// 2, 监听新、老值变化
	watch(name, (newValue, oldValue) => {
		console.log("监听基本数据属性。newValue:" + newValue + ", oldValue:" + oldValue);
	});

	const person = ref({
		name: "李四",
		age: 23
	});

	// 3, 监听对象类型某个属性，初始化方式是 getter 函数方式，需要使用ref对象后面 refObj.value.xxx 形式
	watch(() => person.value.name, (newValue, oldValue) => {
		console.log("监听对象数据类型。newValue:" + newValue + ", oldValue:" + oldValue);
	});

	// 4, 深层侦听器，监听整个对象。性能有消耗，如果只是监听对象某个属性，不建议这种写法。
	// watch(person, (newValue) => {
		// 直接使用name，不需要 .value.name
	// 	console.log("监听整个对象。newValue:" + newValue.name);
	// }, {
	// 	// 深度监听
	// 	deep: true,
	// 	// watch，不是立即，设置true后立即执行
	// 	immediate: true
	// });


	// 5，监听多个(既：数组)，但是不建议这种写法，单个属性监听比较清晰，既：firstName、lastName分开监听
	const firstName = ref("迈克尔")
	const lastName = ref("乔丹")
	watch([firstName, lastName], ([nFirstName, nLastName], [oFirstName, oLastName]) => {
		console.log("监听多个(数组)：" + nFirstName + "-" + nLastName);
	})
	// watch(firstName, (nName, oldName) => {
	// })
	// watch(lastName, (nName, oldName) => {
	// })


	// 6, 监听所有，不建议,影响性能
	// watchEffect(() => {
	// 	console.log("watchEffect(): firstName:" + firstName.value + ", lastName：" + lastName.value);
	// });
</script>

<style lang="scss" scoped>
	input {
		height: 40px;
		border: 1px solid gray;
	}

	.out {
		padding: 20px;
	}

	input {
		border: 1px solid #ccc;
		height: 40px;
		padding: 0 10px;
		margin: 10px 0;
	}
</style>