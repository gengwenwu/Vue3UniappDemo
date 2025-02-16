<!-- template 是布局 -->
<template>
	<!-- 	<view>
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>

		<view>World</view>
	</view> -->

	<!-- hover-class: 指定按下去的样式类   -->
	<view class="box" hover-class="boxHover">
		<!-- hover-stop-propagation: 阻止点击状态传播父级   -->
		<view class="inner" hover-class="innerHover" hover-stop-propagation>内部元素</view>
	</view>

	<view>---------</view>
	<text selectable="true" space="emsp">text 文本标签</text>

	<view>---------</view>
	<scroll-view class="scrollView">
		<navigator v-for="item in demoPages" :url="item.url" :open-type="item.openType">{{item.text}}</navigator>
	</scroll-view>

	<view>
		<!--  open-type 打开方式 默认 navigate -->
		<!-- <navigator url="/pages/demo1/demo1">进入demo1</navigator>
		<navigator url="/pages/demo2/demo2" open-type="navigate">进入demo2</navigator>
		<navigator url="/pages/swiper/swiperDemo" open-type="redirect">进入swiper组件</navigator>
		<navigator url="/pages/scrollview/scrollViewDemo" open-type="reLaunch">scrollView组件</navigator> 
		<navigator url="/pages/bind/bindDemo">v-bind语法</navigator>
		<navigator url="/pages/event/eventDemo">事件Event</navigator>
		<navigator url="/pages/condition/conditionDemo">条件语法v-if</navigator>
		<navigator url="/pages/for/forDemo">遍历语法v-for</navigator>
		<navigator url="/pages/shop/shop">购物车小案例</navigator> 

		<navigator url="/pages/input/inputDemo">输入框input</navigator>
		<navigator url="/pages/search/hotSearch">热搜小案例</navigator>
		<navigator url="/pages/computed/computedDemo">计算属性computed</navigator>
		<navigator url="/pages/watchDemo/watchDemo">监听器watch</navigator>
		<navigator url="/pages/component/componentDemo">组件components</navigator>
		<navigator url="/pages/slots/slotsDemo">卡槽slots(包含子组件回调)</navigator>

		<navigator url="/pages/lifecycle/vue3Lifecycle">vue3组件生命周期</navigator>
		<navigator url="/pages/expose/exposeApi">defineExpose Api(暴露子组件变量、函数)</navigator>
		<navigator url="/pages/lifecycle/uniPageLifecycle?name=李四&age=20">uniapp 页面生命周期</navigator>
		<navigator url="/pages/rpx/rpxDemo">响应式单位rpx</navigator>
		<navigator url="/pages/toast/toastDemo">交互toast</navigator>-->
	</view>
</template>

<!-- 脚本 -->
<script setup>
	// 页面路由， navigator 官方连接：https://uniapp.dcloud.net.cn/component/navigator.html
	const demoPages = ref([{
			text: "进入demo1",
			url: "/pages/demo1/demo1",
			openType: "navigate"
		},
		{
			text: "进入demo2",
			url: "/pages/demo2/demo2",
			openType: "navigate"
		},
		{
			text: "进入swiper组件",
			url: "/pages/swiper/swiperDemo",
			openType: "redirect"
		},
		{
			text: "scrollView组件",
			url: "/pages/scrollview/scrollViewDemo",
			openType: "reLaunch"
		},

		{
			text: "v-bind语法",
			url: "/pages/bind/bindDemo",
			openType: "navigate"
		},
		{
			text: "事件Event",
			url: "/pages/event/eventDemo",
			openType: "navigate"
		},
		{
			text: "条件语法v-if",
			url: "/pages/condition/conditionDemo",
			openType: "navigate"
		},
		{
			text: "遍历语法v-for",
			url: "/pages/for/forDemo",
			openType: "navigate"
		},
		{
			text: "购物车小案例",
			url: "/pages/shop/shop",
			openType: "navigate"
		},
		{
			text: "输入框input",
			url: "/pages/input/inputDemo",
			openType: "navigate"
		},
		{
			text: "热搜小案例",
			url: "/pages/search/hotSearch",
			openType: "navigate"
		},
		{
			text: "计算属性computed",
			url: "/pages/computed/computedDemo",
			openType: "navigate"
		},
		{
			text: "监听器watch",
			url: "/pages/watchDemo/watchDemo",
			openType: "navigate"
		},
		{
			text: "组件components",
			url: "/pages/component/componentDemo",
			openType: "navigate"
		},
		{
			text: "卡槽slots(包含子组件回调)",
			url: "/pages/slots/slotsDemo",
			openType: "navigate"
		},
		{
			text: "vue3组件生命周期",
			url: "/pages/lifecycle/vue3Lifecycle",
			openType: "navigate"
		},
		{
			text: "defineExpose Api(暴露子组件变量、函数)",
			url: "/pages/expose/exposeApi",
			openType: "navigate"
		},
		{
			text: "uniapp 页面生命周期",
			url: "/pages/lifecycle/uniPageLifecycle?name=李四&age=20",
			openType: "navigate"
		},
		{
			text: "响应式单位rpx",
			url: "/pages/rpx/rpxDemo",
			openType: "navigate"
		},
		{
			text: "交互反馈(toast、loading、dialog等)",
			url: "/pages/feedback/feedbackDemo",
			openType: "navigate"
		},
		{
			text: "头部/底部 Bar",
			url: "/pages/bar/navigationBar",
			openType: "navigate"
		},
		{
			text: "网络请求 uni.request",
			url: "/pages/net/netRequest",
			openType: "navigate"
		},
		{
			text: "数据缓存",
			url: "/pages/cache/cache",
			openType: "navigate"
		},
		{
			text: "宠物案例",
			url: "/pages/pet/pet",
			openType: "navigate"
		}
	])
	// 下面是vue2 语法
	// export default {
	// 	data() {
	// 		return {
	// 			title: 'Hello'
	// 		}
	// 	},
	// 	onLoad() {

	// 	},
	// 	methods: {

	// 	}
	// }
</script>

<!-- css -->
<style lang="scss">
	.box {
		width: 200px;
		height: 200px;
		background: #ccc;
	}

	.boxHover {
		background: orange;
		width: 300px;
	}

	.inner {
		width: 150px;
		height: 150px;
		background: green;
	}

	.innerHover {
		background: yellowgreen;
	}


	navigator {
		color: blue;
	}

	.scrollView {
		// height: 580rpx;
	}

	// .layout {
	// 	border: 1px solid red;

	// 	.box1 {
	// 		border: 1px solid green
	// 	}

	// 	.box2 {
	// 		border: 1px solid blue;
	// 	}
	// }


	// .logo {
	// 	height: 100px;
	// 	width: 100px;
	// 	margin: 100px auto 25px auto;
	// }

	// .title {
	// 	font-size: 18px;
	// 	color: #8f8f94;
	// 	text-align: center;
	// }
</style>