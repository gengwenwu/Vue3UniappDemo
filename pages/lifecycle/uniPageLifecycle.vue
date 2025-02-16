<template>
	<view class="">
		姓名: {{name}} - {{age}}
		<scroll-view scroll-y="true" ref="scroll">
			<view></view>
		</scroll-view>

		<navigator url="/pages/demo1/demo1" style="color: blue;">进入demo1</navigator>
		<view>----</view>
		<view>count最新值：{{count}}</view>
		<view>----</view>
		<navigator url="/pages/demo2/demo2" style="color: blue;" open-type="reLaunch">进入demo2</navigator>

		<view v-for="(item, index) in 100"> {{item}}</view>
		<view class="fixed" v-if="fixed">有滚动条</view>

	</view>
</template>

<script setup>
	// uniapp 页面生命周期，官方连接
	// https://uniapp.dcloud.net.cn/tutorial/page.html#lifecycle
	// https://uniapp.dcloud.net.cn/tutorial/vue3-composition-api.html

	// 优先使用 uni页面生命周期函数，执行顺序：onLoad -> onShow -> onReady
	// 如果加上 vue3组件生命周期，执行顺序是： onLoad -> onShow -> onBeforeMount -> onReady -> onMounted

	// 引入 uniapp 生命周期相关函数，如下面 onLoad、onReady (引入vite.config.ts 文件，这里就不用导入了，具体见 readme.md 文件)
	// import { onLoad, onShow, onReady, onHide, onUnload, onPageScroll, onReachBottom } from "@dcloudio/uni-app"
	// import { ref, onBeforeMount, onMounted } from "vue"

	const name = ref("张三")
	const age = ref(18)
	const scroll = ref(null)

	const count = ref(0)
	let time = setInterval(() => {
		count.value++
	}, 100)

	// 1，页面生命周期，页面开始加载调用(先引入包后才可以使用)。可以接收入参数，页面dom未渲染。仅触发一次
	onLoad((e) => {
		console.log("onLoad函数")
		console.log("onLoad，name:" + e.name)
		console.log("onLoad，scroll:", scroll.value)

		// 接收参数
		name.value = e.name
		age.value = e.age
	})

	// 2，页面生命周期，页面显示调用。
	// onShow 与 onLoad 区别在于，onLoad仅触发一次，onShow会触发多次。点击 “进入demo1” 查看控制台日志便知
	// 注意：onShow中，是拿不到dom节点的，在 onReady 可以
	onShow(() => {
		console.log("onShow函数")

		// 重启倒计时
		time = setInterval(() => {
			count.value++
		}, 100)
	})

	// 3，页面生命周期，页面 dom 渲染完成。
	// 这里是无法接受页面入参的，与 vue3 组件生命周期的 onMounted()类似。
	onReady(() => {
		// 可以拿到scroll 节点
		console.log("onReady函数")
		console.log("onReady，scroll:", scroll.value)
	})

	// 4，vue3组件生命周期
	onBeforeMount(() => {
		console.log("onBeforeMount函数")
	})

	// 5，vue3组件生命周期，子组件加载完成
	onMounted(() => {
		console.log("onMounted函数")
	})

	// 6, 页面生命周期，页面隐藏调用
	onHide(() => {
		console.log("onHide函数")
		// 清空倒计时
		clearInterval(time)
	})

	// 7, 页面生命周期，页面卸载。
	// 注意：页面卸载, 只能是页面跳转，并且关闭当前页面后，才会执行。
	// 只是跳转，不关闭当前页面，是不会调用 onUnload()。
	// 当前页面返回，并关闭，会执行 onUnload。需要留意测试是否执行。
	onUnload(() => {
		console.log("onUnload函数")
	})

	const fixed = ref(false)
	// 8, 页面生命周期，滚动条回调
	onPageScroll(e => {
		console.log("onPageScroll函数， scrollTop:", e.scrollTop)
		fixed.value = (e.scrollTop > 200)
	})


	// 9, 页面生命周期，滚动条触底回调
	onReachBottom(e => {
		console.log("onReachBottom函数， 到底了")
	})
</script>

<style lang="scss" scoped>
	.fixed {
		width: 80px;
		height: 80px;
		line-height: 80px;
		background: orange;
		// 固定位置
		position: fixed;
		right: 30px;
		bottom: 30px;
		text-align: center;
	}
</style>