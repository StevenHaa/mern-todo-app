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
  
  // this method allows the frontend table to be updated when a new todo task is added without refreshing (ugly solution)
  updateTable = (todo) => {
    // need the id delete in the future
    const newTodo = {
      _id: todo._id,
      description: todo.description,
      priority: todo.priority,
      completed: todo.completed
    }

    this.setState(prevState => {
      return {
        todos: [...prevState.todos, newTodo]
      }
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
          <Route path="/create" render={(props) => <CreateTodos {...props} updateTable={this.updateTable }/>}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
