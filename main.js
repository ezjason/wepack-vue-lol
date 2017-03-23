//var Vue = require('vue');
import Vue from 'vue'

//var VueRouter = require('vue-router');
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//var VueResource = require('vue-resource');
import VueResource from 'vue-resource'
Vue.use(VueResource)

import Vuex from 'vuex'
Vue.use(Vuex)

import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)

import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

import Index from "./components/index.vue"
//var Index = require("./components/index.vue");
import News from "./components/news.vue"
import Players from "./components/players.vue"

var store = new Vuex.Store({
	//保存数据
	state:{
//		name:"bb"
		isleftPopUp:false,
		isbottomPopUp:false,
	},
	mutations:{
		/*set_isname:function(state,data){
			state.name = data;
		},*/
		set_isleftPopUp:function(state,data){
			state.isleftPopUp = data
		},
		set_isbottomPopUp:function(state,data){
			state.isbottomPopUp = data
		}
	}
})

var router = new VueRouter({
	routes: [{
		path: '/index',
		component: Index,
		children: [{
				path: 'news/:id',
				component: News
			}, {
				path: 'players/:id',
				component: Players
			}]
	}]
})

new Vue({
	//	el:"#demo",
	store:store,
	router:router,
	data: {
		name: ""
	}
}).$mount('#demo')