<template>
	<view>---- 滚动条案例 -----</view>
	<!-- 滚动  -->
	<scroll-view scroll-y class="scrollView" direction="horizontal">
		<view class="boxInScrollView">scroll子元素</view>
		<view class="boxInScrollView">scroll子元素</view>
		<view class="boxInScrollView">scroll子元素</view>
		<view class="boxInScrollView">scroll子元素</view>
		<view class="boxInScrollView">scroll子元素</view>
		<view class="boxInScrollView">scroll子元素</view>
		<view class="boxInScrollView">scroll子元素</view>
		<view class="boxInScrollView">scroll子元素</view>
		<view class="boxInScrollView">scroll子元素</view>
		<view class="boxInScrollView">scroll子元素</view>
		<view class="boxInScrollView">scroll子元素</view>
		<view class="boxInScrollView">scroll子元素</view>
	</scroll-view>
</template>

<script setup>

</script>

<style lang="scss">
	.scrollView {
		width: 88%;
		height: 220px;
		border: 1px solid red;
		// 方向：column:竖向; row:横向
		flex-direction: row;
		// white-space: nowrap;

		.boxInScrollView {
			width: 100px;
			height: 100px;
			line-height: 100px;
			background: green;
			margin: 5px;
			text-align: center;
			// display: inline-block;
		}
	}
</style>