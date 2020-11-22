import React, { Component } from 'react';
import axios from 'axios';
import './App.scss';
import Launches from './organisms/launches';

class App extends Component {

  constructor(props) {
      super(props);
      let initialData;
      if (props.initialData) {
          initialData = props.initialData;
      }
      else {
          initialData = window.__INITIAL_STATE__;
          // Allow the passed state to be garbage-collected
          // delete window.__INITIAL_STATE__;
      }
      const initialState = {
        launches: [],
        year: '',
        launch: '',
        land: '',
        creatorDetails: {},
      }
      this.state = initialData || initialState;
  }

  callAPI(url) {
    axios.get(url)
    .then(response => this.setState({launches: response.data}));
  }

  setFilter(key, value, callback) {
    this.setState({[key]: value}, callback)
  }

  render() {
    return (
      <div className="App">
        <Launches
          setFilter={this.setFilter.bind(this)}
          callAPI={this.callAPI.bind(this)}
          launches={this.state.launches}
          year={this.state.year}
          launch={this.state.launch}
          land={this.state.land}
          creatorDetails={this.state.creatorDetails}
        /> 
      </div>
    );
  }
}

export default App;
