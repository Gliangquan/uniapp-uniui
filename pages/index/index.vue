<template>
	<swiper class="banner" indicator-dots autoplay interval='5000'>
		<swiper-item v-for="item in pictures" :key="item.id">
			<image @tap="onPreViewImg(item.url)" :src="item.url"></image>
		</swiper-item>
	</swiper>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello uniapp',
				pictures: [
					{id:'1', url:'../../static/logo.png'},
					{id:'2', url:'../../static/logo.png'},
					{id:'3', url:'../../static/logo.png'},
				]
			}
		},
		onLoad() {
		},
		methods: {
			onPreViewImg(url){
				// wx.previewImage({
				// 	urls: this.pictures.map(v=>v.url),
				// 	current: url
				// })
				uni.previewImage({
					urls: this.pictures.map(v=>v.url),
					current: url
				})
			}
		}
	}
</script>

<style>
	.banner,
	.banner image{
		width: 750rpx;
		height: 750rpx;
	}
</style>
