import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import InputField from './InputField/InputField';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

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

  getPersons = () => {
    if (this.state.showPersons) {
      return this.state.persons.map(person => {
        return <ErrorBoundary key={person.id}>
            <Person
            click={this.switchPersonsHandler} changed={event => this.nameChangedHandler(event, person.id)}
            name={person.name} age={person.age}
          >{person.innerText}
          </Person>
        </ErrorBoundary>;
      });
    }

    return null;
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
        <button key="Switch persons" style={style} onClick={this.switchPersonsHandler}>Switch persons</button>

        <button
          key="Show/Hide persons"
          style={style}
          onClick={this.showPersonsOnClickHandler}>
          {this.state.showPersons ? 'Hide persons' : 'Show persons'}
        </button>

        <div>{this.getPersons()}</div>
      </div>
    );
  }
}

export default App;
