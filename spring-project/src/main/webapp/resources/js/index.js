new Vue({
	// Vue 인스턴스를 생성할 때는 options 객체를 전달
	el: '#app',
	data() {
		return {
			usersList: {
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
		axios.get("http://localhost:8083/model/read").then((response)=>{
			console.log(response);
			this.usersList = response.data;
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
	}
})