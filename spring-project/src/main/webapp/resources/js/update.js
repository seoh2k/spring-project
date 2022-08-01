import { eventBus } from "./instance.js";

export default {
	template : `
		<div class="col-md-6 themed-grid-col" v-show="$parent.isShow == 'update'">
			<h1>Update User</h1>
			<form>
				<div class="mb-3">
				    <label for="id" class="form-label">Id</label>
				    <input type="text" class="form-control" v-model="users.id" readonly="readonly">
				</div>
				<div class="mb-3">
				    <label for="firstName" class="form-label">First Name</label>
				    <input type="text" class="form-control" v-model="users.firstName">
				</div>
				<div class="mb-3">
				    <label for="lastName" class="form-label">Last Name</label>
				    <input type="text" class="form-control" v-model="users.lastName">
				</div>
				<div class="mb-3">
				    <label for="email" class="form-label">Email</label>
				    <input type="text" class="form-control" v-model="users.email">
				</div>
				<div class="mb-3">
					<label for="gender" class="form-label">Gender</label>
				    <select v-model="users.gender" class="form-select" aria-label="Default select example">
						<option value="Male">Male</option>
						<option value="Female">Female</option>
					</select>
				</div>
				<div class="mb-3">
				    <label for="ipAddress" class="form-label">IP Address</label>
				    <input type="text" class="form-control" v-model="users.ipAddress">
				</div>
				<div class="mb-3">
				    <label for="lastUpdate" class="form-label">Last Update</label>
				    <input type="text" class="form-control" v-model="users.lastUpdate" readonly="readonly">
				</div>
				
				<button type="button" @click="update" class="btn btn-outline-primary">Update</button>
				<button type="button" id="btn-delete" class="btn btn-outline-primary">Delete</button>
				<button class="btn btn-outline-primary"><a href="/model/">List</a></button>
			</form>
		</div>
	`,
	data() {
		return { 
			users: {
				id: '',
				firstName: '',
				lastName: '',
				email: '',
				gender: '',
				ipAddress: '',
			},
		}
	},
	created() {
	    eventBus.$on("showUpdatePage", (user) => {
	      this.users = user;
	    });
	},
	beforeDestroy() {
		eventBus.$off("showUpdatePage");
	},
	methods : {
		update : function() {
            axios.post('/model/modifyUser/'+this.users.id, {
            	id: this.users.id,
            	firstName: this.users.firstName,
            	lastName: this.users.lastName,
            	email: this.users.email,
            	gender: this.users.gender,
            	ipAddress: this.users.ipAddress,
            }).then(() => {
            	window.location.href='/model/'
            }).catch((ex) => {
                console.error("failed update user", ex)
            })
        }
	}
}