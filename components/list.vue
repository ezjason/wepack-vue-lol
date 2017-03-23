<template>
	<div class="demo-infinite-container" :style="{height:listHeight-306+'px'}">
		<mu-list style="padding-bottom: 56px;">
			<mu-list-item :title="list.title" v-for="list in lists">
				<mu-avatar :src="list.image_url_small" slot="leftAvatar" />
				<span slot="describe">
       	 		<span style="color: rgba(0, 0, 0, .87)">{{list.summary}}</span>
				</span>
				<mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
					<mu-menu-item title="回复" />
					<mu-menu-item title="标记" />
					<mu-menu-item title="删除" />
				</mu-icon-menu>
			</mu-list-item>
			<!--到底部就加载-->
			<mu-infinite-scroll :scroller="scroller" :loading="loading" @load="getNews" />
		</mu-list>
	</div>

</template>
<script>
	export default {
		data() {
			return {
				avatar: 'imgs/1.jpg', //这里要放在public目录下，虽然跟list.vue不在同个目录  很奇怪
				lists: [],
				loading: false,
				scroller: null,
				listHeight: ''
			}
		},
		
		methods: {
			getNews: function() {
				this.loading=true
				this.$http.jsonp("http://localhost/webpack/list.php", {
					params: {
						callback: "JSON_CALLBACK"
					}
				}).then(function(data) {
					console.log(data)
					this.lists = this.lists.concat(data.data.list);
					this.loading = false
				})
			},
			/*loadMore: function() {
				console.log("底部")
			},*/
			getClientHeight: function() {
				var self = this;
				this.listHeight = window.screen.height;
				window.addEventListener("resize", function() {
					console.log(window.screen);
					self.listHeight = window.screen.height
				})
			}
			
		},

		mounted: function() {
			this.scroller = this.$el;
			this.getNews();
			this.getClientHeight();
		}
	}
</script>
<style lang="css">
	.demo-infinite-container {
		width: 100%;
		/*height: 300px;*/
		overflow: auto;
		-webkit-overflow-scrolling: touch;
		/*border: 1px solid #d9d9d9;*/
	}
</style>