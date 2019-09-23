import React, { Component } from 'react';
import './App.scss';

import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Todos from './components/Todos';
import CreateTodos from './components/CreateTodos';

import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:4000/todos/')
      .then(response => {
          const todos = response.data;
          this.setState({ todos });
      })
      .catch(function (error){
          console.log(error);
      })
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
              
                {this.state.todos.map((todo, index) => {
                  return <Todos todo={todo} key={index}/>
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
