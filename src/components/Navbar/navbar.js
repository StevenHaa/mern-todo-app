import React, { Component } from 'react';
import './navbar.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="logo"> 
          <FontAwesomeIcon icon={faCoffee} className="logo-icon"/>
          <span className="logo-name"> APP NAME </span>
        </div>
        <ul className="links">
          <li>
            Current To-do's
          </li>
          <li>
            Create a To-do
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
