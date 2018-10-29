import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

  state = {
    flags: [],
    flag: {},
    idx: 1
  }

  componentDidMount = () => {
    axios.get("https://restcountries.eu/rest/v2/all").then(res => {
      this.setState({
        flags: res.data.slice(0, 10),
        flag: res.data[0]
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
  }

  render() {
    console.log(this.state.idx)
    return (
      <div className="App">
        <h1>  
          Flag gallery
        </h1>
        
        <div onClick={() => this.handleClick()}>
          <img src={this.state.flag.flag} alt='flag' />
          <p>{this.state.flag.name}</p>
        </div>
      </div>
    );
  }
}

export default App;
