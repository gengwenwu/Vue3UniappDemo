<template>
	<view class="title">
		近期热搜
	</view>

	<view class="out">
		<view class="list">
			<view class="row" v-for="(item, index) in lists" :key="item.id">
				<view class="text">{{index+1}}. {{item.title}}</view>
				<view class="close">
					<icon type="clear" size="26" @click="onClose(index)" />
				</view>
			</view>
		</view>
		<view class="count">
			共{{lists.length}}条评论
		</view>
		<view class="comment">
			<input type="text" placeholder="请输入评论内容" v-model="inputValue" @confirm="onSubmit" />
			<button size="mini" type="primary" :disabled="inputValue.length<3" @click="onSubmit">发布</button>
		</view>
	</view>
</template>

<script setup>
	import { ref } from "vue"
	const lists = ref([
		{ id: 111, title: "刚满18岁" },
		{ id: 222, title: "我不吃牛肉" },
		{ id: 333, title: "瑶瑶领先" },
		{ id: 444, title: "哪里贵了" }
	])

	const inputValue = ref("")

	const onClose = function (index) {
		lists.value.splice(index, 1)
	}

	function onSubmit() {
		if (inputValue.value.trim().length == 0) {
			console.log("nothing submit...")
			return
		}

		lists.value.push({ id: Date.now(), title: inputValue.value })
		inputValue.value = ""
	}
</script>

<style lang="scss" scoped>
	.title {
		font-size: 26px;
		text-align: center;
		color: #3c3c3c;
		padding: 30px 0 15px;
	}

	.out {
		width: 90vw;
		margin: 15px;
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
		border-radius: 5px;
		padding: 15px;
		box-sizing: border-box;

		.list {
			.row {
				flex-direction: row;
				padding: 10px 0;
				border-bottom: 1px solid #e8e8e8;
				display: flex;
				justify-content: space-between;
				align-items: center;
				font-size: 18px;
				color: #333;

				.text {
					padding-right: 5px;
					box-sizing: border-box;
				}
			}
		}

		.count {
			padding: 10px 0;
			font-size: 15px;
			color: #888;
			text-align: center;
		}

		.comment {
			display: flex;
			margin-top: 10px;
			flex-direction: row;

			input {
				flex: 4;
				background: #f4f4f4;
				margin-right: 5px;
				height: 100%;
				height: 32px;
				border-radius: 4px;
				padding: 0 10px;
				color: #333;
			}

			button {
				flex: 1;
			}
		}
	}
</style>