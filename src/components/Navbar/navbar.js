import React, { Component } from 'react';
import './navbar.scss'
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="logo"> 
          <NavLink to="/"> 
            <FontAwesomeIcon icon={faCoffee} className="logo-icon"/>
            <span className="logo-name"> APP NAME </span>
          </NavLink>
        </div>
        <ul>
          <li>
            <NavLink exact={true} to="/" activeClassName="selected">Current To-do's</NavLink>
          </li>
          <li>
            <NavLink to="/create" activeClassName="selected">Create a To-do</NavLink> 
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
