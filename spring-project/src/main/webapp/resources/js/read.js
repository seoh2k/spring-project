import { eventBus } from './instance.js';

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
					</tr>
				</thead>
				<tbody>
					<tr v-for="item in users">
						<td scope="row">{{ item.id }}</td>
						<td><a @click="showUpdatePage(item)">{{ item.firstName }}</a></td>
						<td><a @click="showUpdatePage(item)">{{ item.lastName }}</a></td>
						<td><a @click="showUpdatePage(item)">{{ item.email }}</a></td>
					</tr>
				</tbody>
			</table>
		</div>
	`,
	data() {
		return { 
			users: [],
			user : {
				id: ''
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
		showCreatePage : function(){
			this.$parent.isShow = 'create'
		},
		showUpdatePage : function(user){
			eventBus.$emit("showUpdatePage", user);
			this.$parent.isShow = 'update';
		},
	}
}