import React, { Component } from 'react';

class SwitchPersonsButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button key="Switch persons" style={this.props.style} onClick={this.props.switchPersonsHandler}>
        Switch persons
      </button>
    );
  }
}

export default SwitchPersonsButton;
