<template>
	<div>
		<wswiper></wswiper>
		<wlist></wlist>
	</div>
</template>
<script>
	var wswiper = require("./swiper.vue")
	var wlist = require("./list.vue")
	module.exports = {
		components: {
			wswiper: wswiper,
			wlist: wlist
		}
	}
</script>