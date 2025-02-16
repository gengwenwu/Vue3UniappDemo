<template>
	<button type="primary" size="mini" @click="postReqeust">post请求, 点击我</button>

	------
	<view>下面是get请求</view>
	<view class="layout">
		<view class="row" v-for="item in arrs" :key="item.id">
			<view class="title">{{item.title}}</view>
			<view class="content">{{item.body}}</view>
		</view>
	</view>
</template>

<script setup>
	// 网路请求，官方连接： https://uniapp.dcloud.net.cn/api/request/request.html#requestsuccess-values


	// 有3种请求方式，推荐方式2、3
	import { ref } from "vue"
	let arrs = ref([])

	// 请求方式1, success 处理回调，这种方式会出现“回调地域” 问题
	function request1() {
		// uni.request({
		// 	url: "https://jsonplaceholder.typicode.com/posts",
		// 	// 成功，异步回调
		// 	success: res => {
		// 		console.log(res);
		// 		arrs.value = res.data;
		// 	}
		// })
	}

	// 请求方式2, then 处理回调
	function request2() {
		// uni.request({
		// 	url: "https://jsonplaceholder.typicode.com/posts"
		// }).then(res => {
		// 	// then 回调，支持 promise
		// 	console.log(res);
		// 	arrs.value = res.data;
		// })
	}

	// 请求方式3，异步同步化 (最常用的方式)
	async function request3() {
		let res = await uni.request({
			url: "https://jsonplaceholder.typicode.com/posts"
		})

		console.log(res);
		arrs.value = res.data;
	}

	request1()
	request2()
	request3()


	// post 方式请求
	function postReqeust() {
		uni.showLoading()
		uni.request({
			url: "https://jsonplaceholder.typicode.com/posts",
			method: "POST", // 默认get方式
			data: { // 请求参数
				id: 1
			},
			dataType: "json", // 返回数据解析方式，默认json
			header: {
				token: "aaaaa",
				"content-type": "application/json" // 这是默认方式，可以不写
			},
			timeout: 15000, // 超时，默认1分钟
			success: res => { // success、fail、complete，回调，必须写一个
				console.log(res)
				uni.showToast({ title: "id:" + res.data.id })
			},
			fail: res => {
				console.log("post通信异常", res)
			},
			complete: () => {
				uni.hideLoading()
			}
		})
	}
</script>

<style lang="scss" scoped>
	.layout {
		padding: 30rpx;

		.row {
			border-bottom: 1px solid #cfcfcf;
			padding: 20rpx 0;

			.title {
				font-size: 38rpx;
				margin-bottom: 10rpx;
			}

			.content {
				font-size: 28rpx;
				color: #666
			}
		}
	}
</style>