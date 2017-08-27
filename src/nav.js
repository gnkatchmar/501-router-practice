import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./nav.css";


class NavBar extends Component {
  render() {
    return (
      <div className = "Nav">
        <Link to="/"> Home </Link>
        <Link to="/trending"> Trending </Link>
        <button> Random </button>
      </div>
    );
  }
}

export default NavBar;