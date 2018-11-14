import React, { Component } from 'react';
import FilterStore from './FilterStore';
import FilterActions from './FilterActions';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = FilterStore.getState();
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {
    FilterStore.listen(this.onChange);

    FilterActions.search();
    FilterActions.chooseCount();
    FilterActions.preSyncCount();
  }

  componentWillUnmount() {
    FilterStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  copy(e) {
    e.target.select();
    document.execCommand("Copy");
  }

  render() {
    return (
      <div>
        <div>共计有{this.state.chooseCount}个数据等待填写token</div>
        <div>共计有{this.state.preSyncCount}个数据准备好可以sync了</div>
        <div><button onClick={FilterActions.sync}>sync list item</button></div>
        {this.state.filter_list.map(i => (
          <div>
            <img src={i.image_url} style={{width: 400}}/>
            <button onClick={FilterActions.delete.bind(this, i._id)}>删除</button>
            {this.state.preSyncCount}
            <div>
              <input type='text' value={i.url} onClick={this.copy.bind(this)} />
            </div>
            <div>
              <input type='text' onChange={FilterActions.taoTokenChange.bind(this)} />
              <input type='text' onChange={FilterActions.couponTaoTokenChange.bind(this)} />
              <button onClick={FilterActions.fillToken.bind(this, i._id, this.state.curTaoToken, this.state.curCouponTaoToken)}>确定</button>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default Filter;
