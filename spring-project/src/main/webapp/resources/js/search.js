export default {
	template : `
		<div>
			<label>검색 : </label>
			<input type="text" v-model="srhKeyword" @keyup.enter="search(srhKeyword)" style="height: 25px;" />
			<button class="btn btn-outline-primary" @click="search(srhKeyword)">Search</button>
		</div>
	`,
	methods : {
		search : function(srhKeyword) {
			this.$parent.loadPage(srhKeyword);
		}
	}
}