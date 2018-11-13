import alt from '../../lib/alt';

class FilterActions
{
	constructor() {
		this.generateActions(
			'searchSuccess',
			'taoTokenChange',
			'couponTaoTokenChange',
		)
	}

	search() {
		const _this = this;
		$.ajax({
			url: 'http://localhost:3001/api/tblist/filter',
			method: 'GET',
			success: data => {
				FilterActions.searchSuccess(data);
			}
		})
	}

	fillToken(id, taoToken, couponTaoToken) {
		const _this = this;

		$.ajax({
			url: 'http://localhost:3001/api/tblist/update_tao_token',
			method: 'PUT',
			json: {id, taoToken, couponTaoToken},
			success: data => {
				_this.search();
			}
		})
	}
}

export default alt.createActions(FilterActions);