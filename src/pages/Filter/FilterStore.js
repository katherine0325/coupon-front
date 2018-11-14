import alt from '../../lib/alt';
import FilterActions from './FilterActions';

class FilterStore {
  constructor() {
    this.bindActions(FilterActions);
    this.filter_list = [];
    this.curTaoToken = '';
    this.curCouponTaoToken = '';
    this.chooseCount = 0;
    this.preSyncCount = 0;
  }

  searchSuccess(data) {
    this.filter_list = data;
  }

  taoTokenChange(e) {
    this.curTaoToken = e.target.value;
  }

  couponTaoTokenChange(e) {
    this.curCouponTaoToken = e.target.value;
  }

  fillTokenSuccess() {
    this.curTaoToken = '';
    this.curCouponTaoToken = '';
  }

  chooseCountSuccess(count) {
    this.chooseCount = count;
  }

  preSyncCountSuccess(count) {
    this.preSyncCount = count;
  }
}

export default alt.createStore(FilterStore);