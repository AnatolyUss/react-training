import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import ShowPersonsButton from '../components/ShowPersonsButton/ShowPersonsButton';
import SwitchPersonsButton from '../components/SwitchPersonsButton/SwitchPersonsButton';
import Assignment_1 from '../components/Assignment_1/Assignment_1';
import Assignment_2 from '../components/Assignment_2/Assignment_2';

class App extends Component {
  constructor(props) {
    super(props);
  }

  getAge = () => {
    return Math.floor(Math.random() * 30) || 120;
  }

  state = {
    sampleAttribute: 'sample sample',
    showPersons: true,
    inputField: '',
    persons: [
      { id: 0, name: 'Anna', age: this.getAge(), innerText: undefined },
      { id: 1, name: 'Bella', age: this.getAge(), innerText: 'I\'m good!' },
    ]
  }

  switchPersonsHandler = () => {
    const tempPerson = this.state.persons[0];
    this.state.persons[0] = this.state.persons[1];
    this.state.persons[1] = tempPerson;

    this.setState(this.state.persons);
  }

  nameChangedHandler = (event, personId) => {
    const persons = [...this.state.persons];
    const person = persons.find(person => person.id === personId);
    person.name = event.target.value;
    this.state.persons[personId] = person;
    this.setState({ persons: persons });
  }

  showPersonsOnClickHandler = event => {
    // buttonStyle.backgroundColor = this.state.showPersons ? 'green' : 'red';
    this.setState({ showPersons: !this.state.showPersons });
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    return (
      <div className="App">
        <Assignment_2 />

        <Assignment_1 />

        <SwitchPersonsButton style={style} switchPersonsHandler={this.switchPersonsHandler} />

        <ShowPersonsButton
          style={style}
          showPersonsOnClickHandler={this.showPersonsOnClickHandler}
          showPersons={this.state.showPersons}
        />

        <Persons
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          switchPersonsHandler={this.switchPersonsHandler}
          nameChangedHandler={this.nameChangedHandler}
        />

        <h1>Hey, I'm a React app!</h1>
        <h2>{this.state.sampleAttribute}</h2>
      </div>
    );
  }
}

export default App;
