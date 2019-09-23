import React, { Component } from 'react';
import './todos.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

class Todos extends Component {
  render() {
    const { _id, description, completed, priority } = this.props.todo;
    return (
      <tr className="todo-task">
        <td> { description } </td>
        <td> { priority.toUpperCase() } </td>
        <td> Edit </td>
        <td><FontAwesomeIcon icon={faCheckCircle} className="logo-icon"/></td>
        {/* to be able to pass the id up the hierarchy, we need to bind */}
        <td><FontAwesomeIcon icon={faTimesCircle} className="logo-icon" onClick={this.props.deleteTodo.bind(this, _id)}/></td>
      </tr>
    );
  }
}

export default Todos;
