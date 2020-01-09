import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from '../logo.svg';
import '../App.css';

class App extends Component {

  render() {
      const name = "Robert"
      const user = {
          firstName: "Robert",
          lastName: "Singh"
      }
      const greeting = <h1>Hello {name}</h1>

      function formatName(user) {
          return user.firstName + ' ' + user.lastName
      }

      function getGreeting(user) {
        if(user){
            return formatName(user)
        }
          return 'Stranger'
      }

      function tick() {
          const element = (
              <div>
                  <h1>Hello, world!</h1>
                  <h2>It is {new Date().toLocaleTimeString()}.</h2>
              </div>
          );
          ReactDOM.render(element, document.getElementById('root'));
      }

      // setInterval(tick, 1000);

      //Composing component line-39 to line-54
      //simple component
      function Welcome(props) {
          return <h1>Hello, {props.name}</h1>;
      }

      //composed component
      function App() {
          return (
              <div>
                  <Welcome name="Sara" />
                  <Welcome name="Cahal" />
                  <Welcome name="Edite" />
              </div>
          );
      }


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
              {greeting}
              <h1>Hello, {formatName(user)}!</h1>
              <h1>Hello {getGreeting()}</h1>
              {/* usage of composed component*/}
              <App />
          </div>
      </div>
    );
  }
}

export default App;
