import readComponent from './components/read.js';
import createComponent from './components/create.js';
import updateComponent from './components/update.js';

export const eventBus = new Vue();

const read_component = readComponent;
const create_component = createComponent;
const update_component = updateComponent;

new Vue({
	el: '#app',
	components: {
		'read-component': read_component,
		'create-component': create_component,
		'update-component': update_component
	},
	data : {
		isShow: 'read'
	}
})