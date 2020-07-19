import React, { Component } from 'react';
import './CharComponent.css';

class CharComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="CharComponent" onClick={this.props.charComponentOnClick}>
        <p>{this.props.letter}</p>
      </div>
    );
  }
}

export default CharComponent;
