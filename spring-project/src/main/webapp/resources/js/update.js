import { eventBus } from "./instance.js";

export default {
	template : `
		<div class="col-md-6 themed-grid-col" v-show="$parent.isShow == 'update'">
			<h1>Update User</h1>
			<form>
				<div class="mb-3">
				    <label for="id" class="form-label">Id</label>
				    <input type="text" class="form-control" v-model="user.id" readonly="readonly">
				</div>
				<div class="mb-3">
				    <label for="firstName" class="form-label">First Name</label>
				    <input type="text" class="form-control" v-model="user.firstName">
				</div>
				<div class="mb-3">
				    <label for="lastName" class="form-label">Last Name</label>
				    <input type="text" class="form-control" v-model="user.lastName">
				</div>
				<div class="mb-3">
				    <label for="email" class="form-label">Email</label>
				    <input type="text" class="form-control" v-model="user.email">
				</div>
				<div class="mb-3">
					<label for="gender" class="form-label">Gender</label>
				    <select v-model="user.gender" class="form-select" aria-label="Default select example">
						<option value="Male">Male</option>
						<option value="Female">Female</option>
					</select>
				</div>
				<div class="mb-3">
				    <label for="ipAddress" class="form-label">IP Address</label>
				    <input type="text" class="form-control" v-model="user.ipAddress">
				</div>
				<div class="mb-3">
				    <label for="lastUpdate" class="form-label">Last Update</label>
				    <input type="text" class="form-control" v-model="user.lastUpdate" readonly="readonly">
				</div>
				
				<button type="button" @click="update" class="btn btn-outline-primary">Update</button>
				<button type="button" id="btn-delete" class="btn btn-outline-primary">Delete</button>
				<button class="btn btn-outline-primary"><a href="/model/">List</a></button>
			</form>
		</div>
	`,
	data() {
		return { 
			user: {
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
	    eventBus.$on("showUpdatePage", (response) => {
	      this.user = response;
	    });
	},
	methods : {
		update : function() {
            axios.post('/model/modifyUser/'+this.user.id, {
            	id: this.user.id,
            	firstName: this.user.firstName,
            	lastName: this.user.lastName,
            	email: this.user.email,
            	gender: this.user.gender,
            	ipAddress: this.user.ipAddress,
            }).then(() => {
            	window.location.href='/model/'
            }).catch((ex) => {
                console.error("failed update user", ex)
            })
        }
	}
}