<template>
	<view>
		<view class="box">text</view>
		<view class="text">
			欢迎使用
		</view>
	</view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
	// 尺寸单位 官方连接
	// https://uniapp.dcloud.net.cn/tutorial/syntax-css.html#%E5%B0%BA%E5%AF%B8%E5%8D%95%E4%BD%8D

	// 题外话，UI设计稿，可以参考 https://js.design

	.box {
		// 1，宽度60% 表示方式
		// width: 60%;

		// 2，宽度60% 表示方式
		// width: 60vw;

		// 3，响应式单位 rpx, 以750宽的屏幕为基准线的设计稿。130，box的宽度是设计稿上的宽度。
		// 如果设计稿不是750宽的比例，可以修改为宽度为750等比例。或者自行计算。根据上面提供的官方连接，有计算公式。
		width: 130rpx;
		height: 130rpx;
		background: orange;
	}

	.text {
		// 文字单位，也是rpx
		font-size: 52rpx;
		// 使用 uni.scss 文件中定义的颜色
		color: $custom-color-1 // $uni-color-primary
	}
</style>