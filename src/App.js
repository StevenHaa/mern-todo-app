import React, { Component } from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import Todos from './components/Todos';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tempTodos: [
        {
          id: 1,
          description: "Get out of bed",
          completed: false,
          priority: "medium"
        },
        {
          id: 2,
          description: "Brush Teeth",
          completed: false,
          priority: "high"
        },
        {
          id: 3,
          description: "Each breakfast",
          completed: false,
          priority: "low"
        },
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <Navbar/>
        <table>
          <tr>
            <th>Description</th>
            <th>Priority</th>
            <th>Action</th>
            <th>Mark Done</th>
            <th>Delete Todo</th>
          </tr>
          {this.state.tempTodos.map(todo => {
          return <Todos todo={todo}/>
        })}
        </table>
      </div>
    );
  }
}

export default App;
