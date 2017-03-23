<template>
	<div>
		<sheader></sheader>
		<router-view></router-view>
		<spopup></spopup>
		<sfooter></sfooter>
	</div>
</template>

<script>
	var wheader = require("./header.vue");
	var wfooter = require("./footer.vue");
	var wpopup = require("./popup.vue");
	
	module.exports = {
		data:function(){
			return{
				name:"adc"
			}
		},
		/*computed:{
			
		}*/
		methods:{
			getDate:function(){
				this.$http.jsonp("http://localhost/webpack/test.php",{
					params:{
						callback:'JSON_CALLBACK'
					}
				}).then(function(data){
//					console.log(data.data.list)
				},function(err){
					console.log(err)
				})
			}
		},
		components:{
			sheader:wheader,
			sfooter:wfooter,
			spopup:wpopup
		},
		mounted:function(){
			this.getDate();
		}
	}
</script>

<style>
	
</style>