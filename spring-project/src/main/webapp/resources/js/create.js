export default {
	template : `
		<div class="col-md-6 themed-grid-col" v-show="$parent.isShow == 'create'">
			<h1>Add User</h1>
			
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
			
			<button type="button" @click="save" class="btn btn-outline-primary">Save</button>
			<button class="btn btn-outline-primary"><a href="/model/">List</a></button>
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
	methods : {
		save : function() {
            axios.post('/model/addUser', {
            	firstName: this.users.firstName,
            	lastName: this.users.lastName,
            	email: this.users.email,
            	gender: this.users.gender,
            	ipAddress: this.users.ipAddress,
            }).then(() => {
            	window.location.href='/model/';
            }).catch((ex) => {
                console.error("failed save user", ex)
            })
		},
	}
}