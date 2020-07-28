import React, { Component } from 'react';

class ShowPersonsButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        key="Show/Hide persons"
        style={this.props.style}
        onClick={this.props.showPersonsOnClickHandler}>
        {this.props.showPersons ? 'Hide persons' : 'Show persons'}
      </button>
    );
  }
}

export default ShowPersonsButton;
