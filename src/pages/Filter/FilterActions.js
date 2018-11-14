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
			'chooseCountSuccess',
			'preSyncCountSuccess',
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
				this.actions.preSyncCount();
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

	chooseCount() {
		$.ajax({
			url: 'http://localhost:3001/api/tblist/chooseCount',
			method: 'GET',
			success: res => {
				this.actions.chooseCountSuccess(res);
			}
		})
	}

	preSyncCount() {
		$.ajax({
			url: 'http://localhost:3001/api/tblist/preSyncCount',
			method: 'GET',
			success: res => {
				this.actions.preSyncCountSuccess(res);
			}
		})
	}
}

export default alt.createActions(FilterActions);