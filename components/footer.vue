<template>
	<div>
		<mu-paper>
			<mu-bottom-nav :value="bottomNav" @change="handleChange" style="position: fixed; bottom:0">
				<mu-bottom-nav-item value="recents" href="#/index/news/1" title="Recents" icon="restore" />
				<mu-bottom-nav-item value="favorites" href="#/index/players/2" title="Favorites" icon="favorite" />
				<mu-bottom-nav-item value="nearby" title="Nearby" icon="location_on" />
			</mu-bottom-nav>
		</mu-paper>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				bottomNav: 'recents'
			}
		},
		mounted:function(a,b){
				console.log(this.$route.params.id);
				var id = this.$route.params.id;
				switch(id){
					case "1":
					this.bottomNav = "recents";
					break;
					case "2":
					this.bottomNav = "favorites";
					break;
					case "3":
					this.bottomNav = "nearby";
					break;
				}
			},
		methods: {
			handleChange(val) {
				this.bottomNav = val
			}
		}
	}
</script>

<style>

</style>