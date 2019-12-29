import React, { Component } from 'react';
import Table from './Table';

function App0() {
  return (
    <div className = "App">
      <h1>First App Trial</h1>
    </div>
  );
}

class App extends Component {
  render() {
    
    const characters = [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ]

    return (
      <div className = "container">
        <Table characterData = {characters} />
      </div>
    )
  }
}

export default App;
