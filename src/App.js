import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'wewe01', name: 'Eric', age: 26 },
      { id: 'wewe02', name: 'Roger', age: 29 },
      { id: 'wewe03', name: 'William', age: 20 }
    ],
    otherState: 'some other value',
    showPersons: false

  }
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons })

  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });

  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });

  }

  render() {

    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}
            />
          })}

        </div>
      );
      btnClass = classes.Red;
    }
    const assignedclasses = [];
    if (this.state.persons.length <= 2) {
      assignedclasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedclasses.push(classes.bold);
    }
    return (

      <div className={classes.App}>
        <h1>Hi, I'm a React App </h1>
        <p className={assignedclasses.join(' ')}>It is really working!</p>
        <button
          className={btnClass}
          onClick={this.togglePersonHandler}>Switch Name</button>
        {persons}

      </div>

    );
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Does this look good?'))
  }
}

export default App;
