import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {FadeTransition} from './fadeTransition';
class App extends Component {
  state = {
      flags: [],
      flag: {},
      idx: 1,
      load: true
  }

  componentDidMount = () => {
    axios.get("https://restcountries.eu/rest/v2/all").then(res => {
      this.setState({
        flags: res.data.slice(0, 10),
        flag: res.data[0],
        load: false
      });
    });
  }

  handleClick = () => {
    if (this.state.idx <= 9) {
      this.setState((state) => {
        return {
          flag: state.flags[this.state.idx],
          idx: state.idx + 1
        }
      })

      if (this.state.idx === 9) {
        this.setState({ idx: 0 })
      }
    } 

    this.setState({load: !this.state.load})
  }


  render() {
    return <div className="App">
      <h1>Flag gallery</h1> 
        <div className="App-flag" onClick={this.handleClick}>
        <FadeTransition flagInfo={this.state.flag} load={this.state.load}/>
        </div>
      </div>;
  }
}

export default App;

