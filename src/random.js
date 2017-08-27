import React, { Component } from 'react';

import { random } from "./api";

class RandomContainer extends Component {
  state = {
    gif: {},
  };

  handleRandom = () => {
    random().then(gif => {
      this.setState({
        gif: gif.data,
      });
    });
  };

  render() {
    return (
      <div>
        <br />
        Random Gifs:
        <br />
        {this.handleRandom()}
        {console.log(this.state.gif)}
      </div>
    );
  }
}

export default RandomContainer;
