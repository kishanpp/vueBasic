import Vuex from "vuex";
import Vue from 'vue'
import VueCookies from 'vue-cookies'

Vue.use(Vuex);
Vue.use(VueCookies)

const store = new Vuex.Store({
  state: {
    count: 0,
	isLogged : false,
	apiBaseUrl : '',
  },
  mutations: {
    increment (state) {
      state.count++
    },
	validateLogin (state, validate){
		state.isLogged = validate ? true : false
		// $cookies.set('isLogged', state.isLogged)
		setValidationsCookies(state)
	},
	getValidationsCookies (state){
		// console.log(this.$cookies.isKey('isLogged'))
		// if(this.$cookies.isKey('isLogged')){
			// return this.$cookies.get('isLogged')
			// console.log(VueCookies.get('isLogged'))
			state.isLogged = VueCookies.get('isLogged') || false
			// return VueCookies.get('isLogged');
		// }
	}
  },
  // same as computed. data will be cached and re-evaluated when any variable data is changes.
	getters: {
		NAME : state => {
			return state.isLogged
		}
   }
})

function setValidationsCookies (state){
	// set global cookie
	VueCookies.set('isLogged', state.isLogged);
}

export default store;