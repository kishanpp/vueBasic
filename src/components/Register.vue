// Register.vue

<template>
    <!DOCTYPE html>
	<html lang="en">
		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<meta http-equiv="X-UA-Compatible" content="ie=edge">
			<title>Sign Up Form</title>

		</head>
		<body>

			<div class="main">

				<!-- Sign up form -->
				<section class="<!---signup--->">
					<div class="container">
						<div class="signup-content">
							<div class="signup-form">
								<h2 class="form-title">Sign up</h2>
								<form method="" @submit.prevent="registerUser" class="register-form" id="register-form">
									<div class="form-group">
										<label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
										<input type="text" name="name" v-model="input.userName" id="name" placeholder="Your Name"/>
										<div v-if="submitted && !$v.input.userName.required" class="invalid-feedback">First Name is required</div>
									</div>
									<div class="form-group">
										<label for="email"><i class="zmdi zmdi-email"></i></label>
										<input type="email" name="email" v-model="input.email" id="email" placeholder="Your Email"/>
										<div v-if="submitted && $v.input.email.$error" class="invalid-feedback">
											<span v-if="!$v.input.email.required">Email is required</span>
											<span v-if="!$v.input.email.email">Email is invalid</span>
										</div>
									</div>
									<div class="form-group">
										<label for="pass"><i class="zmdi zmdi-lock"></i></label>
										<input type="password" name="pass" v-model="input.password" id="pass" placeholder="Password"/>
										<div v-if="submitted && $v.input.password.$error" class="invalid-feedback">
											<span v-if="!$v.input.password.required">Password is required</span>
											<span v-if="!$v.input.password.minLength">Password must be at least 6 characters</span>
										</div>
									</div>
									<div class="form-group">
										<label for="re-pass"><i class="zmdi zmdi-lock-outline"></i></label>
										<input type="password" name="re_pass" v-model="input.confirmPassword" id="re_pass" placeholder="Repeat your password"/>
										<div v-if="submitted && $v.input.confirmPassword.$error" class="invalid-feedback">
											<span v-if="!$v.input.confirmPassword.required">Confirm Password is required</span>
											<span v-else-if="!$v.input.confirmPassword.sameAsPassword">Passwords must match</span>
										</div>
									</div>
									<div class="form-group">
										<input type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
										<label for="agree-term" class="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" class="term-service">Terms of service</a></label>
									</div>
									<div class="form-group form-button">
										<div v-if="submitted" class="invalid-feedback">{{ result.serverError }}</div>
										<input type="submit" name="signup" id="signup" class="form-submit" value="Register"/>
									</div>
								</form>
							</div>
							<div class="signup-image">
								<figure><img src="@/assets/images/signup-image.jpg" alt="sing up image"></figure>
								<router-link to='./login' class="signup-image-link">I am already membert</router-link>
								<!-- <a href="./login" class="signup-image-link">I am already member</a> -->
							</div>
						</div>
					</div>
				</section>
			</div>

		</body><!-- This templates was made by Colorlib (https://colorlib.com) -->
	</html>
</template>

<style scoped src="../assets/css/login.css"></style>
<style scoped src="../assets/fonts/material-icon/css/material-design-iconic-font.min.css"></style>

<style scoped>
	@import "../assets/css/login.css"
	@import "../assets/fonts/material-icon/css/material-design-iconic-font.min.css"
</style>

<script>
	import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
	// require('../assets/fonts/material-icon/css/material-design-iconic-font.min.css')
	// require('../assets/css/login.css')
	
	import auth from '@/api/authentication.js'
	export default {
		name : 'register',
		data() {
            return {
                input: {
                    userName: "kishan",
                    email: "kishanp@mindfiresolutions.com",
                    password: "123456",
                    confirmPassword: "123456"
                },
				result: {
					isDone : false,
					serverError : 'Please enter the required details'
				},
                submitted: false
            };
        },
        validations: {
            input: {
                userName: { required },
                email: { required, email },
                password: { required, minLength: minLength(6) },
                confirmPassword: { required, sameAsPassword: sameAs('password') }
            }
        },
		methods: {
			registerUser() {
				this.submitted = true;

				// stop here if form is invalid
				this.$v.$touch();
				if (this.$v.$invalid) {
					return;
				}
				if(this.validateInput()){

					var result = auth.registerUser(this.input)
					this.result.isDone = result.isDone
					this.result.serverError = result.errorMessage
					
					const ref = this

					if(this.result.isDone){
						// route to login
						this.$dialog.alert(this.result.serverError).then(function() {
							ref.$router.push('/login')
						});
					}
				}
			},
			validateInput : function (){
				if(this.input.userName.length && 
					this.input.email.length &&
					this.input.password.length &&
					this.input.confirmPassword.length
					)
					return true
				else
					return false
			}
		}
	}
</script>