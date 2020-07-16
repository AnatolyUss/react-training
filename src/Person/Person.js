import React, { Component } from 'react';
// import Person from './Person.css';

class Person extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>I am a {this.props.age} years old {this.props.name}!</p>
        <p onClick={this.props.click}>{this.props.children || 'No Text'}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
      </div>
    );
  }
}

export default Person;
