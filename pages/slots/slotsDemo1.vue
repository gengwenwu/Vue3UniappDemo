<template>
	<view class="">
		<xxm-layout>
			<!-- 1，只有一个slot方式，可以直接写布局，布局内容直接会嵌套在 slot 内部 -->
			<!-- <view class="" v-for="item in 10">每{{item}}行</view> -->

			<!-- 2，多个slot方式，需要使用具名方式，既：v-slot:header 指定，header 是自定义的插槽名称，也可以简写成 #header -->
			<template v-slot:header>
				demo1 头部
			</template>

			<!-- 通过 #名称 方式，指定具体哪个slot -->
			<template #main>
				<view class="" v-for="item in 10">每{{item}}行</view>
			</template>

		</xxm-layout>
	</view>
</template>


<script setup>

</script>


<style lang="scss" scoped>

</style>