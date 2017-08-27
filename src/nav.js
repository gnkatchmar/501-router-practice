import React, { Component } from 'react';
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div className = "Nav">
        <Link to="/"> Home </Link>
        <Link to="/trending"> Trending </Link>
        <Link to="/random"> Random </Link>
      </div>
    );
  }
}

export default NavBar;