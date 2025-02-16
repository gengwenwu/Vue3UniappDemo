<template>
	<view class="userinfo">
		<!-- <image :src="avatar" mode="aspectFill" class="avatar"></image>
		<view class="username">{{myname}}</view> -->

		<image :src="obj.avatar" mode="aspectFill" class="avatar"></image>
		<view class="username">{{obj.username}}</view>

	</view>
</template>

<script setup>
	import {
		computed
	} from "vue"

	// 组件的目录，定义在 components(字符必须一样) 目录中，在其它uvue文件中，可以自动导入这些组件。

	// 使用 defineProps 申明接受属性，使用子组件时候传递
	// 定义props常量，这样可以获取相关的传递值


	// 写法1：数组方式（单个属性)
	// const props = defineProps(['username', 'avatar'])

	// 写法2：对象方式
	// const props = defineProps({
	// 	// 仅数据类型
	// 	// username: String

	// 	// 申明多种属性和默认追
	// 	username: {
	// 		type: String,
	// 		default: "匿名"
	// 	},
	// 	avatar: {
	// 		type: String,
	// 		default: "../../static/logo.png"
	// 	}
	// })

	// console.log(props.username)

	// defineProps中的属性是只读的，不能修改
	// const myname = computed(() => props.username + "@")

	// 写法3，object对象方式
	defineProps({
		obj: {
			type: Object, // Object 类型
			// 对象默认值写法，return 默认对象
			default () {
				return {
					username: "匿名",
					avatar: "../../static/logo.png"
				}
			}
		}
	})
</script>

<style lang="scss">
	.userinfo {
		width: 100%;
		height: 150px;
		background: #ccc;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;

		image {
			width: 100px;
			height: 100px;
			border-radius: 50%;
		}
	}

	.username {
		font-size: 20px;
		padding: 10px 0;
	}

	// .avatar {
	// 	height: 100px;
	// 	width: 100px;
	// }
</style>