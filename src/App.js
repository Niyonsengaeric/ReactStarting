import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Eric', age: 26 },
      { name: 'Roger', age: 29 },
      { name: 'William', age: 20 }
    ],
    otherState: 'some other value'

  }

  switchNameHandler = (newName) => {

    // console.log('event pass!!!')
    // Don't do this: this.state.persons[0].name='Jeezy';
    this.setState({
      persons: [
        { name: newName, age: 26 },
        { name: 'Roger', age: 29 },
        { name: 'William', age: 19 }
      ],
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Eric', age: 26 },
        { name: event.target.value, age: 29 },
        { name: 'William', age: 19 }
      ],
    })

  }
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    return (
      <div className="App">
        <h1>Hi, I'm a React App </h1>
        <p>It is really working!</p>
        <button
          style={style}
          onClick={() => this.switchNameHandler('Jeezy')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this, 'Roger!!')} changed={this.nameChangedHandler}>My Hobbies: Basketball</Person>
        <Person
          name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Does this look good?'))
  }
}

export default App;
