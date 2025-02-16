<template>
	<view>
		引入组件(看代码，有注释代码， defineProps)
		<!-- 方式1 (单个属性)-->
		<!-- <UserInfo username="咸虾米" avatar="../../static/image_dog.png" />
		<UserInfo avatar="../../static/image_fruit.png" />
		<UserInfo :username="name" /> -->

		<!-- 方式2 (对象) -->
		<!-- 自定义值 这里的 obj，是子组件声明接收的对象 -->
		<UserInfo :obj="userInfo" />
		<!-- 使用子组件定义的默认值 -->
		<UserInfo />

		<!-- 方式3 (遍历对象) -->
		<UserInfo v-for="(item, index) in userInfos" :obj="item" />


		<!-- 方式4 (文件夹) -->
		<!-- <xxm-header /> -->
	</view>
</template>

<script setup>
	import { ref } from "vue"
	const name = ref("王五");

	const userInfo = { username: "咸虾米", avatar: "../../static/image_dog.png" };

	const userInfos = ref([
		{ username: "张三", avatar: "../../static/image_dog.png" },
		{ username: "李四", avatar: "../../static/image_fruit.png" },
		{ username: "王五", avatar: "../../static/image_old_man.png" },
	]
	)
</script>

<style lang="scss" scoped>

</style>