import { notification } from 'antd';
import alt from '../../lib/alt';
import $ from 'jquery';

class HomeActions
{
	constructor() {
		this.generateActions(
			'searchSuccess',
			'getFilePath',
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
					notification.success({message: '选择成功'});
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

	upload(filePath) {
		$.ajax({
			url: 'http://localhost:3001/api/tblist/import',
			method: 'POST',
			data: {
				filePath: filePath,
				head: ['name', 'pid']  // 本行待定，待修改
			},
			success: res => {
				this.actions.search();
			},
			fail: err => {
				notification.error({message: 'upload file failed'});
			}
		})
	}
}

export default alt.createActions(HomeActions);