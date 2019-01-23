import React, { Component } from 'react';
import './App.css';
import DogsListContainer from './components/DogsListContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <main>
          <DogsListContainer />
        </main>
      </div>
    );
  }
}

export default App;
