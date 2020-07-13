import React, { Component } from 'react';
// import Person from './Person.css';

class Person extends Component {
  render() {
    return (
      <div>
        <p>I am a {this.props.age} years old Person!</p>
        <p>{this.props.children}</p>
      </div>
    );
  }
}

export default Person;
