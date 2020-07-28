import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class Assignment_1 extends Component {
  constructor(props) {
    super(props);
  }

  state = { username: '' };

  inputUsernameChangeHandler = event => {
    this.setState({ username: event.target.value });
  }

  render() {
    return (
      <div>
        <h1>Assignment 1</h1>
        <UserInput inputUsernameChangeHandler={this.inputUsernameChangeHandler} username={this.state.username} />
        <UserOutput username={this.state.username} />
      </div>
    );
  }
}

export default Assignment_1;
