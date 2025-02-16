<template>
	<view class="">
		<!-- 官方文档：https://cn.vuejs.org/guide/essentials/conditional.html -->

		<view v-if="shop">京东</view>
		<view v-else>淘宝</view>

		<!-- v-else-if 案例；=== 是全等于 -->
		<view v-if="day===1">星期1</view>
		<view v-else-if="day===2">星期2</view>
		<view v-else-if="day===3">星期3</view>
		<view v-else-if="day===4">星期4</view>
		<view v-else-if="day===5">星期5</view>
		<view v-else-if="day===6">星期6</view>
		<view v-else-if="day===7">星期日</view>
		<view v-else>格式错误</view>

		<!-- v-if 与 v-show 案例 -->
		<view style="color:red">v-if 与 v-show 区别(看代码)，都是false时，v-if是dom中没有image元素，而v-show有元素，只是通过css display:none 去实现隐藏
		</view>
		<view class="box1" v-if="true">
			<image src="/static/image_dog.png" mode="aspectFill"></image>
		</view>
		<view class="box2" v-show="true">
			<image src="/static/image_woman.png" mode="aspectFill"></image>
		</view>

		<!-- template 与 view 案例 -->
		<view style="color:red">template 与 view 案例。template最后渲染的结果并不会包含template元素，子元素与外面层级平级。view是包裹了一个容器</view>
		<!-- template 案例 -->
		<template v-if="true">
			<image src="/static/logo.png" mode="aspectFill"></image>
			<view>logo</view>
		</template>
		<template v-else>
			<image src="/static/image_old_man.png" mode="aspectFill"></image>
			<view>old man</view>
		</template>
		<!--view 案例 -->
		<view v-if="true">
			<image src="/static/logo.png" mode="aspectFill"></image>
			<view>logo</view>
		</view>
		<view v-else>
			<image src="/static/image_old_man.png" mode="aspectFill"></image>
			<view>old man</view>
		</view>


	</view>
</template>

<script setup>
	import { ref } from 'vue';

	const shop = ref(true);

	const day = ref(3)
</script>

<style lang="scss" scoped>
	image {
		width: 100px;
		height: 70px;
	}
</style>