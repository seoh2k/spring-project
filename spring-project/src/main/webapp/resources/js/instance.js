import readComponent from './read.js';
import createComponent from './create.js';

const read_component = readComponent;
const create_component = createComponent;

new Vue({
	el: '#app',
	components: {
		'read-component': read_component,
		'create-component': create_component
	},
	data() {
		return { 
			isShow: 'read',
			
		}
	},
})