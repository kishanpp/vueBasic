// Login.vue

<!-- Font Icon -->
<style scoped src="../assets/fonts/material-icon/css/material-design-iconic-font.min.css"></style>

<!-- Main css -->
<style scoped src="../assets/css/login.css"></style>

<template>

	<!DOCTYPE html>
	<html lang="en">
		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<meta http-equiv="X-UA-Compatible" content="ie=edge">
			<title>Sign In Form by Colorlib</title>

		</head>
		<body>

			<div class="main">

				<!-- Sing in  Form -->
				<section class="sign-in">
					<div class="container">
						<div class="signin-content">
							<div class="signin-image">
								<figure><img src="@/assets/images/signin-image.jpg" alt="sing in image"></figure>
								<router-link to='./register' class="signup-image-link">Create an account</router-link>
								<!-- <a href="./register" class="signup-image-link">Create an account</a> -->
							</div>

							<div class="signin-form">
								<h2 class="form-title">Sign in</h2>
								<form method="" @submit.prevent="loginUser" class="register-form needs-validation" name='signIn' id="login-form">
									<div class="form-group md-form">
										<label for="your_name"><i class="zmdi zmdi-account material-icons-name"></i></label>
										<input type="text" name="userName" v-model="input.userName" id="your_name" placeholder="Your Name" class="" :class="{ 'is-invalid': submitted && $v.input.userName.$error }" />
										<div v-if="submitted && !$v.input.userName.required" class="invalid-feedback">First Name is required</div>
										
									</div>
									<div class="form-group">
										<label for="your_pass"><i class="zmdi zmdi-lock"></i></label>
										<input type="password" name="password" v-model="input.password" id="your_pass" placeholder="Password" />
										<div v-if="submitted && $v.input.password.$error" class="invalid-feedback">
											<span v-if="!$v.input.password.required">Password is required</span>
											<span v-if="!$v.input.password.minLength">Password must be at least 6 characters</span>
										</div>
									</div>
									<div class="form-group">
										<input type="checkbox" name="remember-me" id="remember-me" class="agree-term" />
										<label for="remember-me" class="label-agree-term"><span><span></span></span>Remember me</label>
									</div>
									<div class="form-group form-button">
										<div v-if="submitted" class="invalid-feedback">{{ result.serverError }}</div>
										<input type="submit" name="signin" id="signin" class="form-submit" value="Log in"/>
									</div>
								</form>
								<div class="social-login">
									<span class="social-label">Or login with</span>
									<ul class="socials">
										<li><a href="#"><i class="display-flex-center zmdi zmdi-facebook"></i></a></li>
										<li><a href="#"><i class="display-flex-center zmdi zmdi-twitter"></i></a></li>
										<li><a href="#"><i class="display-flex-center zmdi zmdi-google"></i></a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section>

			</div>

		</body><!-- This templates was made by Colorlib (https://colorlib.com) -->
	</html>

</template>

<!-- JS -->


<script>
	import { required, minLength } from "vuelidate/lib/validators";

	import auth from '@/api/authentication.js'
// import VueRouter from 'vue-router'
	
	export default {
		name: 'Login',
		data (){
			return {
				input: {
					userName : '',
					password : ''
				},
				result: {
					isDone : false,
					serverError : 'Please enter the credentials'
				},
				submitted: false
			}
		},
		validations: {
			input: {
				userName: { required },
				password: { required, minLength: minLength(6) }
			}
        },
		computed : {
			
		},
		methods : {
			loginUser : function (){
				this.submitted = true;
				// stop here if form is invalid
				this.$v.$touch();
                if (this.$v.$invalid) {
                    return;
                }
				if(this.validateInput()){
					var result = auth.loginAccount(this.input)
					this.result.isDone = result.isDone
					this.result.serverError = result.errorMessage

					if(this.result.isDone){
						// route to homepage
						this.$store.commit('validateLogin', this.result.isDone)
						this.$router.push('/home')
					}
				}
			},
			validateInput : function (){
				if(this.input.userName.length && this.input.password.length)
					return true
				else
					return false
			}
		},
		watch: {
		},
		created: function () {
		},
	}
</script>
