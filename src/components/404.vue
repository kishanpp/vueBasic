// 404.vue

<template>
    <div>
        Whoops 404!! The page is not available.
        <a href="./home" @click.prevent="back">home</a>
		<!---<router-link to='./home' class="signup-image-link">Home</router-link>--->
    </div>
</template>
<script>
export default {
	name: 'PageNotFound',
    methods: {
        back() {
            // this.$router.go(-1);
			this.$router.push('home');
        }
    }
}
</script>