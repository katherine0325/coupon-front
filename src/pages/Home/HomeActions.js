import alt from '../../lib/alt';

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
		url: 'http://localhost:3001/api/tblist/list?coupon_end_time=' + _this.inputValue,
		method: 'GET',
		headers: {
			Authorization: 'Bearer ' + _this.token
		},
		success: data => {
			HomeActions.searchSuccess(data);
		},
		fail: () => {

		}
		})
	}

	choose(id) {
		const _this = this;

		$.ajax({
			url: 'http://localhost:3001/api/tblist/update?id=' + id,
			method: 'PUT',
			success: data => {
				if (data.ok === 1) {
					_this.search();
				}
			}
		})
	}
}

export default alt.createActions(HomeActions);