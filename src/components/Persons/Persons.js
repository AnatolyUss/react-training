import React, { Component } from 'react';
import ErrorBoundary from '../../hoc/ErrorBoundary/ErrorBoundary';
import Person from './Person/Person';

class Persons extends Component {
  constructor(props) {
    super(props);
  }

  getPersons = () => {
    if (this.props.showPersons) {
      return this.props.persons.map(person => {
        return <ErrorBoundary key={person.id}>
          <Person
            click={this.props.switchPersonsHandler} changed={event => this.props.nameChangedHandler(event, person.id)}
            name={person.name} age={person.age}
          >{person.innerText}
          </Person>
        </ErrorBoundary>;
      });
    }

    return null;
  }

  render() {
    return <div>{this.getPersons()}</div>;
  }
}

export default Persons;
