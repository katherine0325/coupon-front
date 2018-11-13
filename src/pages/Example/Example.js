import React, { Component } from 'react';
import ExampleStore from './ExampleStore';
import ExampleActions from './ExampleActions';

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = ExampleStore.getState();
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {
    ExampleStore.listen(this.onChange);
  }

  componentWillUnmount() {
    ExampleStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    return (
      <h2>Example</h2>
    )
  }
}

export default Example;
