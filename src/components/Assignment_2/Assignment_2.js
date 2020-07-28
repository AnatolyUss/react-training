import React, { Component } from 'react';
import InputField from './InputField/InputField';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from '../CharComponent/CharComponent';

class Assignment_2 extends Component {
  constructor(props) {
    super(props);
  }

  state = { inputField: '' }

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

  inputFieldChangedHandler = event => {
    this.setState({ inputField: event.target.value });
  }

  render() {
    return (
      <div>
        <h1>Assignment 2</h1>
        <InputField
          inputFieldChangedHandler={this.inputFieldChangedHandler}
          inputFieldValue={this.state.inputField}
          inputFieldLength={this.state.inputField.length}
        />
        <ValidationComponent inputFieldLength={this.state.inputField.length} />
        {this.getInputFieldValueAsCharsArray()}
      </div>
    );
  }
}

export default Assignment_2;
