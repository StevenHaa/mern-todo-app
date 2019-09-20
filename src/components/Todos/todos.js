import React, { Component } from 'react';
import './todos.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

class Todos extends Component {
  render() {
    const { id, description, completed, priority } = this.props.todo;
    return (
      <tr className="todo-task">
        <td> { description } </td>
        <td> { priority.toUpperCase() } </td>
        <td> Edit </td>
        <td><FontAwesomeIcon icon={faCheckCircle} className="logo-icon"/></td>
        <td><FontAwesomeIcon icon={faTimesCircle} className="logo-icon"/></td>
      </tr>
    );
  }
}

export default Todos;
