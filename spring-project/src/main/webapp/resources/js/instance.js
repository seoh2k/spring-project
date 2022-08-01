import readComponent from './read.js';

const read_component = readComponent;

new Vue({
	el: '#app',
	components: {
		'read-component': read_component
	}
})