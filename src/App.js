import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  constructor(props) {
    super(props);
  }

  getAge = () => {
    return Math.floor(Math.random() * 30) || 120;
  }

  state = {
    sample_attribute: 'sample sample',
    username: '',
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

  inputUsernameChangeHandler = event => {
    this.setState({ username: event.target.value });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Assignment 1</h1>
        <UserInput inputUsernameChangeHandler={this.inputUsernameChangeHandler} username={this.state.username} />
        <UserOutput username={this.state.username} />
        <h1>Hey, I'm a React app!</h1>
        <h2>{this.state.sample_attribute}</h2>
        <button style={style} onClick={this.switchPersonsHandler}>Switch persons</button>

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
      </div>
    );
  }
}

export default App;
