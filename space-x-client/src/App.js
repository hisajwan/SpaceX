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
        loading: true,
      }
      this.state = initialData || initialState;
  }

  resetFilter() {
    this.setState({
      year: '',
      launch: '',
      land: '',
    })
  }

  callAPI(url) {
    axios.get(url)
    .then(response => this.setState({launches: response.data, loading: false}));
  }

  setFilter(key, value, callback) {
    if(this.state[key].toString() === value.toString()) this.setState({[key]: '',loading: true}, callback);
    else this.setState({[key]: value, loading: true}, callback)
  }

  render() {
    return (
      <div className="App">
        <Launches
          loading= {this.state.loading}
          resetFilter={this.resetFilter.bind(this)}
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
