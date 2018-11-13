import alt from '../../lib/alt';
import $ from 'jquery';

class FilterActions
{
	constructor() {
		this.generateActions(
			'searchSuccess',
			'taoTokenChange',
			'couponTaoTokenChange',
			'fillTokenSuccess',
		)
	}

	search() {
		$.ajax({
			url: 'http://localhost:3001/api/tblist/filter',
			method: 'GET',
			success: data => {
				this.actions.searchSuccess(data);
			}
		})
	}

	fillToken(id, taoToken, couponTaoToken) {
		$.ajax({
			url: 'http://localhost:3001/api/tblist/updateTaoToken',
			method: 'PUT',
			data: {id, taoToken, couponTaoToken},
			success: data => {
				this.actions.fillTokenSuccess();
			}
		})
	}

	delete(id) {
		$.ajax({
			url: 'http://localhost:3001/api/tblist/updateUseless',
			method: 'PUT',
			data: {ids: [id]},
			success: res => {
				alert('删除成功');
			}
		})
	}
}

export default alt.createActions(FilterActions);