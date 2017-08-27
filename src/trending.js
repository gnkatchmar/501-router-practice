import React, { Component } from 'react';

import { trending } from "./api";

class TrendingContainer extends Component {
  state = {
    gifs: [],
  };

  handleTrending = () => {
    trending().then(gifs => {
      this.setState({
        gifs: gifs.data,
      });
    });
  };

  render() {
    return (
      <div>
        Trending Gifs:
        <br />
        {this.handleTrending()}
        {this.state.gifs.map(gif => {
          const imgSrc = gif.images.fixed_width;
          return <img key={gif.id} src={imgSrc.url} />;
        })}
      </div>
    );
  }
}

export default TrendingContainer;
