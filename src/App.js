import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Todos from './components/Todos';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar> </Navbar>
        <h1> Hello world</h1>
        <Todos></Todos>
      </div>
    );
  }
}

export default App;
