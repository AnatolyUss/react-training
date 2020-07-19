import React, { Component } from 'react';
import './ValidationComponent.css';

class ValidationComponent extends Component {
  constructor(props) {
    super(props);
  }

  minLength = 5;

  render() {
    return (
      <div className="ValidationComponent">
        <p>Text length is: {this.props.inputFieldLength}</p>
        <p>{this.props.inputFieldLength >= this.minLength ? 'The text is long enough.' : 'The text is too short.'}</p>
      </div>
    );
  }
}

export default ValidationComponent;
