<template>
	<view class="out">
		<!-- 通过 @focus、@blur 处理获取、失去焦点事件。简单逻辑代码可以直接写在行内，参考这里的@input、@focus -->
		<!-- 	<input type="text" :value="inputValue" @input="event => inputValue = event.detail.value" @focus="isActive=true"
			@blur="onBlur" /> -->

		<!-- 使用 v-model 简化上面的 (:value + @input), v-model 还可以用于各种不同类型的输入，<textarea>、<select> 元素 -->
		<input type="text" v-model="inputValue" @focus="isActive=true" @blur="onBlur" @confirm="onConfirm" />

		<image src="/static/logo.png" class="pic" :class="isActive ? 'active' : ''"></image>
	</view>

	<view>
		预览:{{inputValue}}
	</view>
</template>

<script setup>
	import { ref } from "vue"
	const inputValue = ref("hello world")
	const isActive = ref(false)

	// 键盘“完成”事件
	function onConfirm(event) {
		console.log(event)
	}

	// 输入事件
	// function onInput(event) {
	// 	inputValue.value = event.detail.value
	// }

	// 获取焦点事件
	// function onFocus(e) {
	// 	console.log(e)
	// 	isActive.value = true
	// }

	// 失去焦点事件
	function onBlur(e) {
		console.log(e)
		isActive.value = false
	}
</script>

<style lang="scss" scoped>
	.out {
		margin-top: 40px;
		// padding上下20px，padding左右30px
		padding: 20px 30px;
		// z-index: 只有在 position=relative 才有效果
		position: relative;
		// background: yellow;

		input {
			border: solid 1px #eee;
			height: 30px;
			position: relative;
			// z-index值越大，显示在越上面
			z-index: 2;
			background: #fff;
		}

		.pic {
			width: 20px;
			height: 20px;
			// 绝对位置
			position: absolute;
			z-index: 1;
			top: 20px;
			// 宽度50%减去自身宽度20px
			left: calc(50% - 20px);
			// 动画，向上 0.3秒动画
			transition: top 0.3s;
		}

		// class="pic active"时候，top修改为0px
		.pic.active {
			top: 0;
		}
	}
</style>