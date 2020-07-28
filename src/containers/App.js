import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import UserInput from '../components/UserInput/UserInput';
import UserOutput from '../components/UserOutput/UserOutput';
import InputField from '../components/InputField/InputField';
import ValidationComponent from '../components/ValidationComponent/ValidationComponent';
import CharComponent from '../components/CharComponent/CharComponent';
import ShowPersonsButton from '../components/ShowPersonsButton/ShowPersonsButton';
import SwitchPersonsButton from '../components/SwitchPersonsButton/SwitchPersonsButton';

class App extends Component {
  constructor(props) {
    super(props);
  }

  getAge = () => {
    return Math.floor(Math.random() * 30) || 120;
  }

  state = {
    sampleAttribute: 'sample sample',
    username: '',
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

  inputUsernameChangeHandler = event => {
    this.setState({ username: event.target.value });
  }

  inputFieldChangedHandler = event => {
    this.setState({ inputField: event.target.value });
  }

  charComponentOnClickHandler = (event, charPosition) => {
    const inputFieldClone = this.state.inputField.slice();
    const inputFieldCloneAsArray = inputFieldClone.split('');
    inputFieldCloneAsArray.splice(charPosition, 1)
    const upToDateInputField = inputFieldCloneAsArray.join('');
    this.setState({ inputField: upToDateInputField });
  }

  getInputFieldValueAsCharsArray = () => {
    const inputFieldClone = this.state.inputField.slice();

    return inputFieldClone.split('').map((letter, position) => {
      return <CharComponent
        key={position}
        letter={letter}
        charComponentOnClick={event => this.charComponentOnClickHandler(event, position)}
      />
    });
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
        <h1>Assignment 2</h1>
        <InputField
          inputFieldChangedHandler={this.inputFieldChangedHandler}
          inputFieldValue={this.state.inputField}
          inputFieldLength={this.state.inputField.length}
        />
        <ValidationComponent inputFieldLength={this.state.inputField.length} />
        {this.getInputFieldValueAsCharsArray()}

        <h1>Assignment 1</h1>
        <UserInput inputUsernameChangeHandler={this.inputUsernameChangeHandler} username={this.state.username} />
        <UserOutput username={this.state.username} />

        <h1>Hey, I'm a React app!</h1>
        <h2>{this.state.sampleAttribute}</h2>

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
      </div>
    );
  }
}

export default App;
