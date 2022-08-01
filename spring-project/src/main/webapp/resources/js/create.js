export default {
	template : `
		<div class="col-md-6 themed-grid-col" v-show="$parent.isShow == 'create'">
			<h1>Add User</h1>
			
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
			
			<button type="button" @click="save" class="btn btn-outline-primary">Save</button>
			<button class="btn btn-outline-primary"><a href="/model/">List</a></button>
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
			errors: [],
			errorShow : false
		}
	},
	methods : {
		save : function() {
			this.validationCheck();
			if(confirm('저장하시겠습니까?')){
				if(this.errors.length == 0) {
		            axios.post('/model/addUser', {
		            	firstName: this.user.firstName,
		            	lastName: this.user.lastName,
		            	email: this.user.email,
		            	gender: this.user.gender,
		            	ipAddress: this.user.ipAddress,
		            }).then((res) => {
		            	if(res.status == '200') {
	                		alert("저장되었습니다.");
	                		window.location.href='/model/'
	                	} else {
	                		alert("실행 중 실패했습니다.\n다시 이용해 주세요.");
	                	}
		            }).catch((ex) => {
		                console.error("failed save user", ex)
		            })
				} else {
					alert(this.errors);
				}
			}
		},
		validationCheck : function() {
        	this.errors = [];
        	if(!this.user.firstName) {
        		this.errors.push("firstName을 입력해주세요.");
        	}
        	if(!this.user.lastName) {
        		this.errors.push("lastName을 입력해주세요.");
        	}
        	if(!this.user.email) {
        		this.errors.push("email을 입력해주세요.");
        	} else if (!this.validEmail(this.user.email)) {
                this.errors.push("email 형식을 확인하세요.");
            }
        	if(!this.user.gender) {
        		this.errors.push("gender를 입력해주세요.");
        	}
        	if(!this.user.ipAddress) {
        		this.errors.push("ipAddress를 입력해주세요.");
        	}
        	if(!this.errorShow) {
        		return true;
        	}
        },
        validEmail: function(email) {
        	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
	}
}