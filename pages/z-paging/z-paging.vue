<template>
	<view class="layout">
		<view class="title">
			<view>下拉刷新插件z-paging案例 </view>
			<view>https://z-paging.zxlee.cn/start/intro.html</view>
		</view>
		<z-paging ref="paging" v-model="lists" @query="queryList" :default-page-size="20">

			<!-- 头部下拉刷新样式, 官方 demo pages/custom-demo/custom-demo.vue 目录中有 -->
			<template #refresher="{refresherStatus}">
				<custom-refresher :status="refresherStatus" />
			</template>

			<!-- 全屏Loading， 这个slot默认仅会在第一次加载时显示 -->
			<template #loading>
				<uni-load-more status="loading"></uni-load-more>
			</template>

			<!-- 内容 -->
			<view class="item" v-for="(item, index) in lists" :key="index">
				{{item.title}}
			</view>

		</z-paging>
	</view>
</template>

<script setup>
	import {
		ref
	} from "vue"

	const lists = ref([])
	const paging = ref(null)

	// 查询
	const queryList = (pageNo, pageSize) => {
		uni.request({
			url: "https://tea.qingnian8.com/api/qingnews/newslist",
			data: {
				num: pageSize,
				page: pageNo
			}
		}).then(res => {
			// 填充数据
			paging.value.complete(res.data.data);
		}).catch(err => {
			// 异常情况
			paging.value.complete(false);
		})
	}
</script>

<style lang="scss" scoped>
	.layout {
		display: flex;
		flex-direction: column;

		.title {
			font-size: 26rpx;
			color: red;
		}

		.item {
			justify-content: center;

			padding: 40rpx 20rpx;
			font-size: 26rpx;
			color: #000000;

			border-bottom: solid 1rpx #ccc;


			&:first-child {
				padding-top: 100rpx;
				padding-bottom: 40rpx;
			}
		}


	}
</style>