<template>
	<view class="">
		<xxm-layout>
			<template v-slot:header>
				demo2 头部
			</template>

			<template #main>
				<view class="box1">box1</view>
				<view class="box2">box2</view>
			</template>
		</xxm-layout>
	</view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
	.box1 {
		width: 100px;
		height: 100px;
		background: pink;

		// 居中
		justify-content: center; // 水平居中
		text-align: center;
		// display: flex;
		// justify-items: center;
		// align-items: center;
	}

	.box2 {
		width: 100px;
		height: 100px;
		background: green;
	}
</style>