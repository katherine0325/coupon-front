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
  }

  componentWillUnmount() {
    FilterStore.unlisten(this.onChange);

    FilterActions.search();
  }

  onChange(state) {
    this.setState(state);
  }

  copy(url) {
    window.clipboardData.setData("Text",url);
  }

  render() {
    return (
      <div>
        <div>共计有「」个等待push</div>
        {this.filter_list.map(i => (
          <div>
            <img src={i.image_url} style={{width: 400}}/>
            <button onClick={this.copy.bind(this, i.url)}>复制url</button>
            <input type='text' placeholder='tao token' onChange={FilterActions.taoTokenChange.bind(this)} />
            <input type='text' placeholder='coupon tao token' onChange={FilterActions.couponTaoTokenChange.bind(this)} />
            <button onClick={FilterActions.fillToken.bind(this, i._id, this.state.curTaoToken, this.state.curCouponTaoToken)}>确定</button>
          </div>
        ))}
      </div>
    )
  }
}

export default Filter;
