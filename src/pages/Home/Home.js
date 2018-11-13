import React, { Component } from 'react';
import HomeStore from './HomeStore';
import HomeActions from './HomeActions';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = HomeStore.getState();
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {
    HomeStore.listen(this.onChange);

    HomeActions.search();
  }

  componentWillUnmount() {
    HomeStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    return (
      <div>
        <div>
          {this.state.tblist.map(i => {
            return (
              <div>
                <img src={i.image_urls[0]} style={{width: 400}}/>
                <button onClick={HomeActions.choose.bind(this, i._id)}>选择</button>
              </div>
            )
          })}
        </div>
        <button onClick={HomeActions.useless.bind(this, this.state.tblist)}>本页选完</button>
      </div>
    )
  }
}

export default Home;
