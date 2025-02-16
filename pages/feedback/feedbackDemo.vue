<template>
	<view class="oneRow" direction="horizontal">
		<button @click="showToast" size="mini">显示toast</button>
		<button @click="hideTotast" size="mini">隐藏toast</button>
	</view>
	<view class="oneRow">
		<button @click="showLoading" size="mini">显示loading</button>
		<button @click="hideLoading" size="mini">关闭loading</button>
	</view>
	<view class="oneRow">
		<button @click="showRemoveDialog">确认对话框</button>
		<button @click="select">底部弹框</button>
	</view>
</template>

<script setup>
	// 官方连接：https://uniapp.dcloud.net.cn/api/ui/prompt.html#showtoast
	const showToast = function () {
		uni.showToast({
			title: "hello world. 超长测试1、超长测试2、超长测试3",
			icon: "none", // success, error、fail、exception、loading、none
			image: "../../static/logo.png",
			// position: "bottom",
			duration: 3000,
			// mask: true,
			success: res => {
				console.log("showToast success callback， res:", res)
			},
			// 弹框失败的回调
			fail: err => {
				console.log("showToast fail callback, err:", err)
			},
			complete: (() => {
				console.log("showToast complete callback")
			})
		})
	}

	const hideTotast = function () {
		uni.hideToast()
	}

	const hideLoading = function () {
		uni.hideLoading()
	}

	// 官方连接： https://uniapp.dcloud.net.cn/api/ui/prompt.html#showloading
	const showLoading = function () {
		uni.showLoading({
			title: "加载中...",
			mask: false,
			fail: err => {
				hideLoading()
			}
		})

		setTimeout(() => {
			hideLoading()
		}, 5000)
	}

	// 官方连接：https://uniapp.dcloud.net.cn/api/ui/prompt.html#showmodal
	const showRemoveDialog = function () {
		uni.showModal({
			title: "确定要删除吗？",
			content: "删除后，数据不可恢复哦！",
			// showCancel: false,
			cancelColor: "#ccc",
			cancelText: "cancel",
			confirmColor: "red",
			confirmText: "OK",
			// editable: true,
			// placeholderText: "请输入删除理由",
			success: res => {
				if (res.confirm) {
					uni.showToast({ title: "点击了'OK'" })
				} else if (res.cancel) {
					uni.showToast({ title: "点击了'cancel'" })
				}

				console.log("输入内容：" + res.content)
			}
		})
	}

	// 官方连接：https://uniapp.dcloud.net.cn/api/ui/prompt.html#showactionsheet
	function select() {
		// 底部弹出的列表选择器
		uni.showActionSheet({
			title: "请选择",
			itemList: ["高中", "大专", "本科", "研究生"],
			success: res => {
				console.log("showActionSheet.success, res:", res)
				uni.showToast({ title: "选择了下标:" + res.tapIndex })
			},
			complete: () => {
				console.log("showActionSheet.complete")
			}
		})
	}
</script>

<style lang="scss" scoped>
	button {
		// margin: 5rpx 12rpx;
		width: 260rpx;
		margin: 12rpx;
		font-size: 25rpx;
	}

	.oneRow {
		/* 使用 Flexbox 布局 */
		display: flex;
		/* 行显示 */
		flex-direction: row;
		/* 水平分布按钮，两个按钮之间有空隙 */
		// justify-content: space-between;
		/* 垂直居中 */
		// align-items: center;
		/* 按钮之间的间距 */
		gap: 15rpx;
	}
</style>