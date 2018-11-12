import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tblist: []
    };
  }

  componentDidMount() {
    const _this = this;
    this.inputValue = '2018-10-19';

    $.ajax({
      url: 'http://localhost:3001/api/user/login',
      method: 'POST',
      headers: {
        Authorization: 'Basic ' + new Buffer('katherine:123456').toString('base64')
      },
      success: data => {
        _this.token = data.token;
      },
      fail: () => {

      }
    })
  }

  inputChange(e) {
    this.inputValue = e.target.value;
  }

  search() {
    const _this = this;

    $.ajax({
      url: 'http://localhost:3001/api/tblist/list?coupon_end_time=' + _this.inputValue,
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + _this.token
      },
      success: data => {
        // _this.tblist = data;
        _this.setState({tblist: data});
      },
      fail: () => {

      }
    })
  }

  del(id) {
    const _this = this;

    $.ajax({
      url: 'http://localhost:3001/api/tblist/del?id=' + id,
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + _this.token
      },
      success: data => {
        if(data.ok == 1) {
          _this.search();
        }
      },
      fail: () => {

      }
    })
  }

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <div>
          <input type='text' onChange={this.inputChange.bind(this)} />
          <button onClick={this.search.bind(this)}>搜索</button>
        </div>
        <div>
          {this.state.tblist.map(i => {
            return (
              <div>
                <img src={i.image_urls[0]} style={{width: 400}}/>
                <button onClick={this.del.bind(this, i._id)}>删除 {this.state.tblist.length}</button>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
