import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from './store'
import routes from './routes.js'
import Vuelidate from 'vuelidate'
import BootstrapVue from 'bootstrap-vue'
import Slick from 'vue-slick'
import Zoom from 'jquery-zoom'

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

// Slick
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import VuejsDialog from 'vuejs-dialog';
// import VuejsDialogMixin from 'vuejs-dialog/dist/vuejs-dialog-mixin.min.js'; // only needed in custom components
import VueLocalStorage from 'vue-localstorage';
 
// include the default style
import 'vuejs-dialog/dist/vuejs-dialog.min.css';

// Font Awesome Icon
import './assets/css/font-awesome.min.css'
// Bootstrap
import './assets/css/bootstrap.min.css'
// Custom stlylesheet
import './assets/css/style.css'

// global.jQuery = require('jquery')
// var $ = global.jQuery
// window.$ = $

// import jQuery from 'jquery'

// import './assets/js/slick.min.js'





// require ('./assets/js/jquery.min.js')
require ('./assets/js/bootstrap.min.js')


Vue.use(VueRouter)
Vue.use(Vuelidate)
Vue.use(BootstrapVue)
Vue.use(VuejsDialog);
Vue.use(VueLocalStorage)
Vue.use(Slick)
Vue.use(Zoom)

Vue.config.productionTip = false

// error handler
/*Vue.config.devtools = false;

Vue.config.warnHandler = function(msg, vm, trace) {
  console.log(`Warn: ${msg}\nTrace: ${trace}`);
}

Vue.config.errorHandler = function(err, vm, info) {
	console.log(`Error: ${err.toString()}\nInfo: ${info}`);
}*/



function guardRoute (to, from, next) {

// next(false) - abort the current navigation. If the browser URL was changed (either manually by the user or via back button), it will be reset to that of the from route.

	store.commit('getValidationsCookies')
	const auth = store.getters.NAME
	
	if(!auth){
		next({
			path: '/login',
			query: {
				redirect: to.fullPath
			}
		})
		// console.log('if')
	}
	else if(to.name === 'root'){
		next({
			path: '/home',
		})
	}
	else{
		next()
	}
}

const router = new VueRouter({
	base: '/myapp',
	mode : 'history',
	routes: routes.map(route => ({
		name: route.name,
		path: route.path,
		component: route.component,
		beforeEnter: (to, from, next) => {
			document.title = route.pageTitle
			// Auth navigation guard.
			if (!route.isPublic) return guardRoute(to, from, next)
			
			store.commit('getValidationsCookies')
			const auth = store.getters.NAME
			if(!auth)
				next()
			else
				next({path:'/home'})
		},
		/*beforeUpdate: (to, from, next) => {
			
		}*/
	}))
});

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
