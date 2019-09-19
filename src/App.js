import React, { Component } from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import Todos from './components/Todos';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar> </Navbar>
        <Todos></Todos>
      </div>
    );
  }
}

export default App;
