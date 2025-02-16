<template>
	<view class="">
		<button @click="writeCache" type="primary">保存缓存</button>
		<button @click="readCache" type="primary">读取缓存</button>
		<button @click="clearNameCache" type="primary">清除name缓存</button>
		<button @click="clearCache" type="primary">清除所有缓存</button>
	</view>

	<view class="info">名称:{{name}}</view>
	<view class="info">年龄:{{age}}</view>
	<view class="info">数组:{{array}}</view>
</template>

<script setup>
	const nameKey = "name"
	const ageKey = "age"
	const arrayKey = "array"

	const name = ref(null)
	const age = ref(null)
	const array = ref([])

	// 数据缓存，官方连接： https://uniapp.dcloud.net.cn/api/storage/storage.html#setstorage

	function readCache() {
		// uni.getStorageSync(): 从本地缓存中同步获取指定 key 对应的内容。
		name.value = uni.getStorageSync(nameKey)
		age.value = uni.getStorageSync(ageKey)
		array.value = uni.getStorageSync(arrayKey)
	}

	function writeCache() {
		// uni.setStorageSync(): 将 data 存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个同步接口。
		uni.setStorageSync(nameKey, "张三")
		uni.setStorageSync(ageKey, 18)
		uni.setStorageSync(arrayKey, [1, 2, 3, 4])

		readCache()
	}

	function clearNameCache() {
		// uni.removeStorageSync() 从本地缓存中同步移除指定 key
		uni.removeStorageSync(nameKey)

		readCache()
	}

	function clearCache() {
		// uni.clearStorage(): 清理本地数据缓存。
		uni.clearStorage()

		readCache()
	}
</script>

<style lang="scss" scoped>
	button {
		width: 350rpx;
		margin: 10rpx;
	}

	.info {
		margin: 5rpx 10rpx;
	}
</style>