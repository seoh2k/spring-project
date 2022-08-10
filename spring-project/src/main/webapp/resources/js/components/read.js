import { eventBus } from './instance.js';
import SearchComponent from './search.js';

export default {
	template : `
		<div class="col-md-6 themed-grid-col" v-show="$parent.isShow == 'read'">
			<h1>Users List</h1>
		
			<button class="btn btn-outline-primary"><a @click="showCreatePage">Add</a></button>
			<SearchComponent />
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
						<td scope="row"><a @click="showUpdatePage(item)">{{ item.id }}</a></td>
						<td><a @click="showUpdatePage(item)">{{ item.firstName }}</a></td>
						<td><a @click="showUpdatePage(item)">{{ item.lastName }}</a></td>
						<td><a @click="showUpdatePage(item)">{{ item.email }}</a></td>
					</tr>
				</tbody>
			</table>
		</div>
	`,
	components: {
		SearchComponent
	},
	data() {
		return { 
			users: []
		}
	},
	mounted(){
		this.loadPage('');
	},
	methods : {
		showCreatePage : function(){
			this.$parent.isShow = 'create'
		},
		showUpdatePage : function(user){
			eventBus.$emit("showUpdatePage", user);
			this.$parent.isShow = 'update';
		},
		loadPage : function(srhKeyword) {
			axios.get('/model/read',{
				params : {
					srhKeyword : srhKeyword
				}
			}).then((response)=>{
				this.users = response.data;
			}).catch((error)=>{
				console.log(error);
			})
		}
	}
}