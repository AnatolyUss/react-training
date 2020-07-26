import React, { Component } from 'react';
import './Person.css';

class Person extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // if (Math.random() > 0.7) {
    //   throw new Error('Something went wrong ((');
    // }

    const style = {
      '@media (minWidth: 500px)': {
        width: '450px'
      }
    };

    return (
      <div className="Person" style={style}>
        <p>I am a {this.props.age} years old {this.props.name}!</p>
        <p onClick={this.props.click}>{this.props.children || 'No Text'}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
      </div>
    );
  }
}

export default Person;
