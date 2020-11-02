<template>

    <!--- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
	<nav>
		<router-link to='/login'>Login</router-link>
	</nav>
	<router-view />
	--->
	<!---<transition name="fade">--->
		<router-view/>
	<!---</transition>--->
	
	
	

</template>

<script>

export default {
  name: 'app',
  components: {
    // HelloWorld
	// 'Login' : Login
  }
}
</script>

<style>
	/* Google font */
	@import url('https://fonts.googleapis.com/css?family=Hind:400,700')
</style>
