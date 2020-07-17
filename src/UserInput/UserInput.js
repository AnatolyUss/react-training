import React, { Component } from 'react';
import './UserInput.css';

class UserInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="UserInput">
        <input type="text" value={this.props.username} onChange={this.props.inputUsernameChangeHandler} />
      </div>
    );
  }
}

export default UserInput;
