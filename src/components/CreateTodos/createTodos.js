import React, { Component } from 'react';
import './createTodos.scss';
import axios from 'axios';

class CreateTodos extends Component {
  constructor(props){
    super(props);
    this.state = {
      description: '',
      priority: '',
      completed: false,
    }
  }

  onChange = (e) => {
    console.log(e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(`Form submitted:`);
    console.log(`Todo Description: ${this.state.description}`);
    console.log(`Todo Priority: ${this.state.priority}`);

    const newTodo = {
      description: this.state.description,
      priority: this.state.priority,
      completed: false
    }

    // add to db
    axios.post('http://localhost:4000/todos/', newTodo)
      .then(res => this.props.updateTable(res.data))

    this.setState({
      description: '',
      priority: ''
    })
  }

  render() {
    return (
      <div className="create-todo-container">
        <h3>Create New Todo</h3>
        <form action="" onSubmit={this.onSubmit}>
          <div> 
              <h4>Description:</h4>
              <label>
                <input  type="text"
                        name="description"
                        value={this.state.description}
                        onChange={this.onChange}
                        />
              </label>
          </div>
          <div> 
              <h4>Priority: </h4>
              <label> 
                <input  type="radio" 
                        name="priority" 
                        value="low"
                        className="priority-radio" 
                        checked={this.state.priority === "low"}
                        onChange={this.onChange}/> Low
              </label>
              <label>
                <input 
                        type="radio" 
                        name="priority" 
                        value="medium"
                        className="priority-radio" 
                        checked={this.state.priority === "medium"} 
                        onChange={this.onChange}/> Medium
              </label>
              <label>
                <input  type="radio" 
                        name="priority" 
                        value="high" 
                        className="priority-radio" 
                        checked={this.state.priority === "high"} 
                        onChange={this.onChange}/> High
              </label>

          </div>
        <button type="submit" className="submit-button">Create todo </button>
        </form>
      </div>
    )
  }
}

export default CreateTodos;
