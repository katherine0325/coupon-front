import alt from '../../lib/alt';
import $ from 'jquery';

class HomeActions
{
	constructor() {
		this.generateActions(
			'searchSuccess'
		)
	}

	search() {
		const _this = this;

		$.ajax({
			url: 'http://localhost:3001/api/tblist/list',
			method: 'GET',
			success: data => {
				this.actions.searchSuccess(data);
			},
			fail: err => {
				console.log(err)
			}
		})
	}

	choose(id) {
		$.ajax({
			url: 'http://localhost:3001/api/tblist/update?id=' + id,
			method: 'PUT',
			success: data => {
				if (data.ok === 1) {
					console.log('choose success')
				}
			}
		})
	}

	useless(tblist) {
		const ids = tblist.map(i => i._id);
		$.ajax({
			url: 'http://localhost:3001/api/tblist/updateUseless',
			method: 'PUT',
			data: {ids},
			success: res => {
				if (res.ok === 1) {
					this.actions.search();
				}
			}
		})
	}
}

export default alt.createActions(HomeActions);