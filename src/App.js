import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  constructor(props) {
    super(props);
  }

  getAge = () => {
    return Math.floor(Math.random() * 30) || 120;
  }

  state = {
    sample_attribute: 'sample sample',
    persons: [
      { name: 'Anna', age: this.getAge(), inner_text: undefined },
      { name: 'Bella', age: this.getAge(), inner_text: 'I\'m good!' },
    ]
  }

  switchPersonsHandler = () => {
    const tempPerson = this.state.persons[0];
    this.state.persons[0] = this.state.persons[1];
    this.state.persons[1] = tempPerson;

    this.setState(this.state.persons);
  }

  nameChangedHandler = event => {
    this.state.persons[0].name = event.target.value;

    this.setState(this.state.persons);
  }

  render() {
    return (
      <div className="App">
        <h1>Hey, I'm a React app!</h1>
        <h2>{this.state.sample_attribute}</h2>
        <button onClick={this.switchPersonsHandler}>Switch persons</button>

        <Person
          click={this.switchPersonsHandler} changed={this.nameChangedHandler}
          name={this.state.persons[0].name} age={this.state.persons[0].age}
        >{this.state.persons[0].inner_text}
        </Person>
        <Person
          click={this.switchPersonsHandler} changed={this.nameChangedHandler}
          name={this.state.persons[1].name} age={this.state.persons[1].age}
        >{this.state.persons[1].inner_text}
        </Person>
        {/*{*/}
        {/*  this.state.persons.forEach(person => {*/}
        {/*    <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>{this.state.persons[1].inner_text}</Person>*/}
        {/*  })*/}
        {/*}*/}
      </div>
    );
  }
}

export default App;
