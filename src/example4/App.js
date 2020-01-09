import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Table from './Table';

class App extends Component {

  render() {
      const characters = [
          {
              name: 'Charlie',
              job: 'Janitor',
          },
          {
              name: 'Mac',
              job: 'Bouncer',
          },
          {
              name: 'Dee',
              job: 'Aspring actress',
          },
          {
              name: 'Dennis',
              job: 'Bartender',
          },
      ]

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
          <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <div className="container">
              <Table characterData={characters}/>
          </div>
      </div>
    );
  }
}

export default App;
