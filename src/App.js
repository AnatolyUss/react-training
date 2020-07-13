import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  getAge() {
    return Math.floor(Math.random() * 30) || 120;
  }

  render() {
    return (
      <div className="App">
        <h1>Hey, I'm a React app!</h1>
        <Person age={this.getAge()} />
        <Person age={this.getAge()}>I'm good!</Person>
      </div>
    );
  }
}

export default App;
