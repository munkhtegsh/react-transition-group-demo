import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

  state = {
    players: []
  }

  componentDidMount = () => {
    axios.get("https://swapi.co/api/starships")
      .then(res => {
        this.setState({players: res.data})
      })
  }

  render() {

    console.log(this.state.players.results)
    return (
      <div className="App">
        <p>
          Create react app
          </p>
      </div>
    );
  }
}

export default App;
