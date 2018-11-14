import alt from '../../lib/alt';
import HomeActions from './HomeActions';

class HomeStore {
  constructor() {
    this.bindActions(HomeActions);
    this.tblist = [];
    this.filePath = '';
  }

  searchSuccess(data) {
    this.tblist = data;
  }

  getFilePath(e) {
    this.filePath = e.target.value;
  }
}

export default alt.createStore(HomeStore);