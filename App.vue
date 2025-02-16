<script>
	export default {
		// app 页面挂载的时候执行，页面级仅执行一次
		onLaunch: function() {
			console.log('App Launch')
		},
		// app 页面显示的时候执行。比页面自定义的生命周期，优先执行。
		onShow: function() {
			console.log('App Show')
		},
		// app 页面隐藏的时候执行。比页面自定义的生命周期，优先执行。
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*
	 * 每个页面公共css。
	 * 注意：这里的 style 后不要加 scoped。
	 * 官方 css 连接： https://uniapp.dcloud.net.cn/tutorial/syntax-css.html
	 * 导入css文件后，会应用全局。同名的，页面的权重更高。
	 *  
	 * 如果引入的是全局scss，则在 uni.scss 中引入
	*/


	/* 引入文件的css 样式*/
	@import "@/common/css/style.css"

	/* .uni-row {
		flex-direction: row;
	}
	
	.uni-column {
		flex-direction: column;
	} */
</style>