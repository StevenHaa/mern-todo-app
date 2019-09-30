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

  componentDidUpdate() {
    axios.get('http://localhost:4000/todos/')
      .then(response => {
          const todos = response.data;
          this.setState({ todos });
      })
      .catch(function (error){
          console.log(error);
      })
  }

  deleteTodo = (todoId) => {
    axios.delete(`http://localhost:4000/todos/${todoId}`)
      .then(() => {
        // a list of todos without the one to be deleted
        const newListOfTodos = this.state.todos.filter(todo => todo._id !== todoId);
        this.setState({
          todos: newListOfTodos
        })
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
                  return <Todos todo={todo} key={index} deleteTodo={this.deleteTodo}/>
                })}
              </table>
            </React.Fragment>
          )}/>
          <Route path="/create" render={(props) => <CreateTodos {...props} />}/>
        </div>
      </Router>
    );
  }
}

export default App;
