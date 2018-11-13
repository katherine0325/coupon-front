import alt from '../../lib/alt';
import ExampleActions from './ExampleActions';

class ExampleStore {
  constructor() {
    this.bindActions(ExampleActions);
    this.name = 'katherine';
  }
}

export default alt.createStore(ExampleStore);