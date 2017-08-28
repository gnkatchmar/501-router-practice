import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./nav.css";

class NavBar extends Component {
  random() {
    window.location = "https://giphy.com/search/random-gif";
  }
  render() {
    return (
      <div className = "Nav">
        <Link to="/"> Home </Link>
        <Link to="/trending"> Trending </Link>
        <button onClick={this.random}> Random </button>
      </div>
    );
  }
}

export default NavBar;