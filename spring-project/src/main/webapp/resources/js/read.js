export default {
	template : `
		<div class="col-md-6 themed-grid-col" v-show="$parent.isShow == 'read'">
			<h1>Users List</h1>
		
			<button class="btn btn-outline-primary"><a @click="showCreatePage">Add</a></button>
			<div>* email을 클릭하면 상세페이지로 이동</div>
			<table class="table">
				<thead>
					<tr>
						<th scope="col">id</th>
						<th scope="col">first_name</th>
						<th scope="col">last_name</th>
						<th scope="col">email</th>
						<th scope="col">gender</th>
						<th scope="col">ip_address</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="item in users">
						<td scope="row">{{ item.id }}</td>
						<td>{{ item.firstName }}</td>
						<td>{{ item.lastName }}</td>
						<td><a @click="moveUserOne(item.id)">{{ item.email }}</a></td>
						<td>{{ item.gender }}</td>
						<td>{{ item.ipAddress }}</td>
					</tr>
				</tbody>
			</table>
		</div>
	`,
	data() {
		return { 
			users: [],
			
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
		showCreatePage : function(){
			this.$parent.isShow = 'create'
		}
	}
}