<template>
	<div>
		<mu-appbar title="Title" style="position: fixed; top:0">
			<mu-icon-button icon='menu' slot="left" @click="left()"/>
			<mu-icon-button icon='expand_more' slot="right" @click="bottom()"/>
		</mu-appbar>
	</div>
</template>

<script>
	module.exports = {
		methods:{
			left:function(){
//				console.log("left")
				this.$store.commit("set_isleftPopUp",true)
			},
			bottom:function(){
				this.$store.commit("set_isbottomPopUp",true)
//				console.log("top")
			}
		}
	}
</script>

<style>

</style>