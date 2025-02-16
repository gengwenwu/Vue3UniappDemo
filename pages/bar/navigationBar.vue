<template>
	<view class="">
		自定义 头部、底部Bar 文案和样式，具体见代码
	</view>
</template>

<script setup>
	// 自定义bar样式。官方连接：https://uniapp.dcloud.net.cn/api/ui/navigationbar.html#setnavigationbartitle
	
	uni.showNavigationBarLoading()

	setTimeout(() => {
		uni.setNavigationBarTitle({ title: "我的自定义文案" })
		uni.setNavigationBarColor({
			backgroundColor: "#ccc",
			frontColor: "#000000"
		})

		uni.hideNavigationBarLoading()
	}, 2000)
</script>

<style lang="scss" scoped>

</style>