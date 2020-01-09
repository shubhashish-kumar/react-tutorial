import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Table from "./Table";

class App extends Component {
    state = {
        characters: [
            {
                name : 'Charlie',
                job: 'Janitor'
            },
            {
                name : 'Mac',
                job : 'Bouncer'
            },
            {
                name : 'Dee',
                job: 'Aspiring Actress'
            },
            {
                name: 'Dennis',
                job : 'Bartender'
            }
        ]
    }

    removeCharacter = index => {
        const { characters } = this.state
        this.setState ({
            characters: characters.filter((character, i) => {
                return i != index
            }),
        })
    }

  render() {
        //below both lines are correct and work properly
      // const characters = this.state.characters
      const {characters} = this.state

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
              <Table characterData={characters} removeCharacter={this.removeCharacter}/>
          </div>
      </div>
    );
  }
}

export default App;
