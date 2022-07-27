new Vue({
	// Vue 인스턴스를 생성할 때는 options 객체를 전달
	el: '#app',
	data() {
		return {
			users: {
				id: '',
				firstName: '',
				lastName: '',
				email: '',
				gender: '',
				ipAddress: '',
			}
		}
	},
	mounted(){
		axios.get("/model/read").then((response)=>{
			this.users = response.data;
		}).catch((error)=>{
			console.log(error);
		})
		
		// arrow function 사용하는 다른 방법
//		const arrow = (text) =>{
//			console.log( text + " arrow function");
//		};
//		
//		arrow("this is");
//			.then(response => (this.usersList = response))
//			.catch(error => console.log(error))
	},
	methods : {
		save : function() {
            axios.post('/model/addUser', {
            	firstName: this.users.firstName,
            	lastName: this.users.lastName,
            	email: this.users.email,
            	gender: this.users.gender,
            	ipAddress: this.users.ipAddress,
            })
            .then(() => {
            	window.location.href='/model/';
            })
            .catch((ex) => {
                console.error("failed save user", ex)
            })
		}
	}
})