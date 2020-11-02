import Vue from 'vue'
// import store from '../store'

export default {
  /*checkEmail(params){
	return Api().get('api/email/'+ params.email)
  },*/
  /*createAccount(params){
	return Api().post('api/signup',params)
  },*/
	loginAccount: function (params){
		// return Api().post('api/login',params)

		const userData = {}
			userData.username = params.userName
			userData.password = params.password
			
		var result = {}
		result.isDone = -1
		result.errorMessage = 'API error !'

		if(this.checkExistence(userData) ){
				result.errorMessage = 'Success !'
				result.isDone = 1
		}
		else{
			result.errorMessage = 'Invalid Usernam/password !'
			result.isDone = 0
		}
		return result
	},
	registerUser: function (params){
		var result = {}
		result.isDone = -1
		result.errorMessage = 'lcoal storage error !'

		var registrationData = {}
			registrationData.username = params.userName
			registrationData.password = params.password
			registrationData.email = params.email
			
		var putData = []

		if(this.checkExistence(registrationData)){
			result.isDone = 0
			result.errorMessage = 'user already exists !'
		}
		else{
			const getData = JSON.parse(Vue.localStorage.get('userData')) || false

			if(!getData){
				// simply add data on empty

				putData.push(registrationData)
				Vue.localStorage.set('userData', JSON.stringify(putData))
			}
			else{
				// get data merge and then insert again
				getData.push(registrationData)
				Vue.localStorage.set('userData', JSON.stringify(getData))
			}			
			
			result.isDone = 1
			result.errorMessage = 'registration successfull !!!'
		}
		return result
	},
	checkExistence: function(registrationData) {
		const getData = JSON.parse(Vue.localStorage.get('userData')) || false

		if(getData){
			for (var key in getData) {
				var username = getData[key].username
				var password = getData[key].password
				if(username === registrationData.username &&
					password === registrationData.password){
					return true
				}
			}
			return
		}
		else{
			return
		}
	}
  /*isValidToken(token){
    return Api().get('user/home',{
      headers:{
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        "Authorization": "Bearer "+ token
        //"Authorization":token
      }
    })
  }*/
}