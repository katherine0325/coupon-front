import alt from '../../lib/alt';
import HomeActions from './HomeActions';

class HomeStore {
  constructor() {
    this.bindActions(HomeActions);
    this.tblist = [];
  }

  searchSuccess(data) {
    this.tblist = data;
  }
}

export default alt.createStore(HomeStore);