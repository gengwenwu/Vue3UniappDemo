<template>
	<view>swiper案例</view>
	<!--  :autoplay="true" :interval="3000" :duration="1000" -->
	<swiper indicator-dots="true" indicator-color="rgba(255,255,255,0.3)" indicator-active-color="#ffffff" autoplay
		interval="2000" circular vertical="">
		<swiper-item>
			<image src="/static/image_dog.png" mode="aspectFill" />
		</swiper-item>
		<swiper-item>
			<image src="/static/image_woman.png" mode="aspectFill" />
		</swiper-item>
		<swiper-item>
			<image src="/static/image_old_man.png" mode="aspectFill" />
		</swiper-item>
		<swiper-item>
			<image src="/static/image_fruit.png" mode="aspectFill" />
		</swiper-item>
	</swiper>


	<view>navigator案例</view>
	<view>
		<navigator url="/pages/index/index" open-type="reLaunch">
			<image src="/static/image_dog.png" mode="" class="pic1" />
		</navigator>
		<!-- aspectFill:保持纵横比缩放图片, 多出部分截取 -->
		<image src="/static/image_woman.png" mode="aspectFill" class="pic2" />
		<!-- heightFix:保持纵横比图片比例, 高度不变，宽度自适应 -->
		<image src="/static/image_old_man.png" mode="heightFix" class="pic3" />
		<image src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni-app.png" mode="widthFix" />

	</view>
</template>

<script>

</script>

<style lang="scss">
	// 按照组件名设置css样式
	swiper {
		// vw表示 view width，100vw表示屏幕宽度100%。也有vh,表示: view height
		width: 100vw;
		height: 150px;
		border: 1px solid green;

		swiper-item {
			width: 100%;
			height: 100%;
			background: pink;

			// 图片高宽100%显示
			image {
				width: 100%;
				height: 100%;
			}
		}

		// nth-child 表示第x个元素，2n表示第2倍元素，这是css选择器概念
		swiper-item:nth-child(2n) {
			background: orange;
		}
	}

	.pic1 {
		width: 100px;
		height: 100px;
	}

	.pic2 {
		width: 150px;
		height: 150px;
	}

	.pic3 {
		width: 300px;
	}
</style>