<template>
	<view class="container">
		<!-- tab分段器 -->
		<view class="menu">
			<uni-segmented-control :current="current" :values="classify" @clickItem="onClickItem" styleType="button"
				activeColor="#4e9746" />
		</view>

		<view class="layout" v-for="(item, index) in pets" :key="item._id">
			<view class="box">
				<view class="pic">
					<image :src="item.url" lazy-load mode="widthFix" @click="onPreview(index)"></image>
				</view>
				<view class="text">{{item.content}}</view>
				<view class="author">-- {{item.author}}</view>
			</view>
		</view>

		<view class="float">
			<view class="item" @click="onRefresh">
				<!-- icon库 -->
				<uni-icons type="refreshempty" size="26"></uni-icons>
			</view>
			<view class="item" @click="onTop">
				<!-- icon库 -->
				<uni-icons type="arrow-up" size="26"></uni-icons>
			</view>
		</view>
	</view>

	<!-- 加载更多 -->
	<view class="loadMore">
		<uni-load-more status="loading"></uni-load-more>
	</view>

	<!-- app端底部安全区域 -->
	<view class="safeBox"></view>
</template>

<script setup>
	import petsJsonData from '../../data/pets.json';

	// isUseNetPetData= true：请求网络宠物数据；
	// isUseNetPetData = false：使用本地 pets json数据
	const isUseNetPetData = false

	// pets 显示数据
	const pets = ref([])

	// pets 所有数据
	const allPets = ref(petsJsonData)

	// menu tab当前选择
	const current = ref(0)
	const classify = ["全部", "第2页", "第3页"]

	// menu tab点击 (仅支持 isUseNetPetData=false 情况，既：本地数据)
	const onClickItem = (e) => {
		console.log(e);
		current.value = e.currentIndex
		pets.value = []

		if (e.currentIndex === 0) {
			// 全部
			getPetsData();
		} else {
			setTimeout(() => {
				console.log("value:", (e.currentIndex * 10));
				let startIndex = e.currentIndex * 10
				pets.value = allPets.value.slice(startIndex, (startIndex + 10));
				hideLoading();
			}, 500);
		}
	}

	// 预览
	function onPreview(index) {
		// uni -> api -> 媒体 -> 图片, 官方连接 https://uniapp.dcloud.net.cn/api/media/image.html#unipreviewimageobject
		let urls = pets.value.map(item => item.url)

		uni.previewImage({
			current: index,
			// 参数名与变量名相同，可以省略参数名
			urls
		})
	}

	// 刷新 官方连接：https://uniapp.dcloud.net.cn/api/ui/pulldown.html
	const onRefresh = function() {
		onTop()
		uni.startPullDownRefresh();
	}

	// 置顶 官方连接： https://uniapp.dcloud.net.cn/api/ui/scroll.html
	function onTop() {
		uni.pageScrollTo({
			scrollTop: 0,
			duration: 100
		})
	}

	// 页面加载完成
	onLoad(() => {
		getPetsData();
	})

	// 彻底事件
	onReachBottom(() => {
		console.log("==== 触底");
		getPetsData()
	})

	// 下拉刷新
	// page.json 当前页面配置 "enablePullDownRefresh": true，onPullDownRefresh() 就会回调
	onPullDownRefresh(() => {
		console.log("==== 下拉刷新");

		// 清空数据
		pets.value = []
		current.value = 0

		getPetsData()
	})

	function getPetsData() {
		if (isUseNetPetData) {
			// 使用网络数据
			network()
		} else {
			// 使用本地数据
			setTimeout(() => {
				loadLocalData()
			}, 800) // 延迟，模拟网络请求“慢”的过程
		}
	}

	// 请求 pets 数据
	function network() {
		uni.showNavigationBarLoading()

		uni.request({
			url: "https://tea.qingnian8.com/tools/petShow",
			data: {
				size: 10
			}
		}).then(res => {
			console.log(res.data);

			if (0 === res.data.errCode) {
				// ... 展开操作符
				pets.value = [...pets.value, ...res.data.data]
				console.log("pets length(network):", pets.value.length);
			} else if (400 === res.data.errCode) {
				uni.showToast({
					title: res.data.errMsg,
					icon: "none"
				})
			} else {
				uni.showToast({
					title: "未知错误",
					icon: "none"
				})
			}
		}).catch(err => {
			// 网络异常情况，URL不对，404等等
			uni.showToast({
				title: "请求有误，请重新刷新",
				icon: "none"
			})
		}).finally(() => {
			hideLoading()
		})
	}

	// 加载本地数据
	function loadLocalData() {
		uni.showNavigationBarLoading()
		let petsLength = pets.value.length;

		if (petsLength >= allPets.value.length) {
			uni.showToast({
				title: "没有更多数据",
				icon: "none"
			});
		} else {
			pets.value = [...pets.value, ...allPets.value.slice(petsLength, petsLength + 10)];
			console.log("pets length(loadLocalData):", pets.value.length);
		}

		hideLoading()
	}

	function hideLoading() {
		uni.hideNavigationBarLoading();

		// 停止下拉刷新 https://uniapp.dcloud.net.cn/api/ui/pulldown.html#stoppulldownrefresh
		uni.stopPullDownRefresh();
	}
</script>

<style lang="scss" scoped>
	.container {
		.menu {
			margin: 50rpx 50rpx 0;
		}

		.layout {
			margin: 50rpx 50rpx 0;

			.box {
				margin-bottom: 20rpx;
				// 阴影
				box-shadow: 0 10rpx 40rpx rgba(0, 0, 0, 0.08);
				border-radius: 20rpx;

				.pic {
					image {
						width: 100%;
						border-radius: 20rpx;
					}
				}

				.text {
					padding: 20rpx 0;
					color: #333;
					font-size: 28rpx;
				}

				.author {
					padding: 0 30rpx 30rpx;
					text-align: right;
					color: #888;
					font-size: 22rpx;
				}
			}
		}

		.float {
			position: fixed;
			right: 30rpx;
			bottom: 80rpx;
			// 安全区域
			padding-bottom: env(safe-area-inset-bottom);

			.item {
				width: 90rpx;
				height: 90rpx;
				background: rgba(255, 255, 255, 0.9);
				border-radius: 50%;
				border: 1px solid #eee;
				margin-bottom: 20rpx;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
	}

	.loadMore {
		padding-bottom: calc(env(safe-area-inset-bottom) + 50rpx);
	}

	.safeBox {
		position: fixed;
		width: 80rpx;
		// 底部安全区域高度, 手机上测试
		height: env(safe-area-inset-bottom);
		right: 30rpx;
		bottom: 0rpx;
		border: 1px solid red;
	}
</style>