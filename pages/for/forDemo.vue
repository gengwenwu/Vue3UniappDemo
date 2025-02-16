<template>

	<view style="color:red">v-for语法</view>

	<view class="">
		<!-- v-for语法，基础 -->
		<view style="color:orange">基本用法</view>
		<view v-for="item in nba" :key="item.name">球员: {{item.name}} - 球衣:{{item.num}}</view>

		<!-- v-for语法，带下标index -->
		<view style="color:orange">下标用法</view>
		<view v-for="(item, index) in 3">box模块-{{ index+1}}</view>
	</view>


	<!-- v-for语法，在 template 中使用;  使用key(唯一)-->
	<view style="color:orange">template、key 用法</view>
	<template v-for="item in fruits" :key="item.id">
		<li>{{ item.name }}</li>
		<li class="divider" />
	</template>

	<view style="color:red">v-for 与 v-if 不建议在同一个组件中同时使用</view>

</template>

<script setup>
	import { ref } from "vue"
	const nba = ref([
		{ name: "乔丹", num: 23 },
		{ name: "詹姆斯", num: 6 },
		{ name: "科比", num: 24 }]
	)

	const fruits = ref([
		{ id: 1, name: "苹果" },
		{ id: 2, name: "水蜜桃" },
		{ id: 3, name: "梨" },
		{ id: 4, name: "香蕉" }
	])
</script>

<style lang="scss" scoped>
	.divider {
		width: 50%;
		height: 1px;
		background: orange;
	}
</style>