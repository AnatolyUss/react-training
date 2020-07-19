import React, { Component } from 'react';
import './InputField.css';

class InputField extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="InputField">
        <input type="text" onChange={this.props.inputFieldChangedHandler} value={this.props.inputFieldValue} />
        <p>{this.props.inputFieldLength}</p>
      </div>
    );
  }
}

export default InputField;
