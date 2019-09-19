import React, { Component } from 'react';
import './navbar.less'

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <span> LOGO OR SOMETHINGS</span>
        <ul>
          <li>
            Current To-do's
          </li>
          <li>
            Create a To-do
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
