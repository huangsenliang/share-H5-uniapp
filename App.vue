<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import 'uview-ui/index.scss';
	page {
		background-color: $default-bg;
		font-family: PingFang SC, PingFang SC-Regular;
		font-size: $default-size;
	}
	
	
	
</style>
