<template>
	<view class="out">
		<checkbox-group @change="onItemChange">
			<!-- key保证checkbox，在删除后，能保持选中/未选对应的状态 -->
			<view class="item" v-for="(item, index) in goods" :key="item.id">
				<!-- checkbox 设置value，选中/未选中，checkbox-group @change事件会记录id -->
				<checkbox :value="item.id" :checked="item.checked" />
				<text>{{item.name}}</text>
				<text class="price">{{item.price}}元</text>
				<text class="del" @click="remove(index)">删除</text>
			</view>
		</checkbox-group>

		<view class="card">
			选中了{{totalNumber}}个商品，共计{{totalPrice}}元
		</view>

		选中商品id: {{ selectedGroup }}
		<view>-----</view>
		商品数据: {{ goods }}

	</view>
</template>

<script setup>
	import { ref } from "vue"

	const goods = ref([
		{ id: "1", name: "华为", price: 8999, checked: false },
		{ id: "2", name: "小米", price: 4999, checked: false },
		{ id: "3", name: "Oppo", price: 4299, checked: false },
		{ id: "4", name: "Vivo", price: 3999, checked: false }
	])

	function remove(index) {
		// splice：从 index 元素开始，删除1个
		goods.value.splice(index, 1)
	}

	// 选中/取消 数组
	const selectedGroup = ref([])
	// 总个数
	const totalNumber = computed(() => selectedGroup.value.length)
	// 总金额
	const totalPrice = computed(() => {
		return goods.value.filter(item => item.checked)
			.reduce((prev, curr) => (prev + curr.price), 0)
	})

	// checkbox group 选中事件
	function onItemChange(event) {
		// 记录选中id数组
		selectedGroup.value = event.detail.value

		goods.value.forEach(item => {
			item.checked = selectedGroup.value.includes(item.id)
		})
	}
</script>

<style lang="scss" scoped>
	.out {
		padding: 10px;

		.item {
			padding: 10px 0; // width: 100%;
			flex-direction: row;
			display: flex;
			white-space: nowrap;

			.price {
				margin-left: 30px;
			}

			.del {
				color: blue;
				margin-left: 50px;
			}
		}

		.card {
			margin-top: 30px;
			border-top: 1px solid #eee;
			padding: 10px
		}
	}
</style>