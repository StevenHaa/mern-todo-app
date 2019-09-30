import React, { Component } from 'react';
import './editTodos.scss';
import axios from 'axios';

class EditTodos extends Component {
  constructor(props){
    super(props);
    this.state = {
      description: '',
      priority: '',
      completed: false,
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:4000/todos/${this.props.match.params.todoId}`)
        .then(response => {
            this.setState({
              description: response.data.description,
              priority: response.data.priority,
              completed: response.data.completed
            })   
        })
        .catch(function (error) {
            console.log(error);
        })
}

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(`Form submitted:`);
    console.log(`Todo Description: ${this.state.description}`);
    console.log(`Todo Priority: ${this.state.priority}`);

    const updatedTodo = {
      description: this.state.description,
      priority: this.state.priority,
      completed: false
    }

    // update db
    axios.patch(`http://localhost:4000/todos/${this.props.match.params.todoId}`, updatedTodo)

    // redirect back to homepage after update
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="create-todo-container">
        <h3>Update Todo</h3>
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
        <button type="submit" className="submit-button">Update todo </button>
        </form>
      </div>
    )
  }
}

export default EditTodos;
