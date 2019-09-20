import React, { Component } from 'react';
import './App.scss';

import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Todos from './components/Todos';
import CreateTodos from './components/CreateTodos';

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
      <Router>
        <div className="App">
          <Navbar/>
          
          <Route exact path="/" render={props => (
            <React.Fragment>
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
            </React.Fragment>
          )}/>
          <Route path="/create" component={CreateTodos}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
