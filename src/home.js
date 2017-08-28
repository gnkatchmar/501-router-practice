import React, { Component } from "react";
import { search } from "./api";
import Details from "./details";
import "./home.css";

class HomeContainer extends Component {
  state = {
    value: "",
    gifs: [],
    selectedId: null,
  };

  handleSearch = e => {
    if (!e.key === "Enter") return;
    search(this.state.value).then(gifs => {
      this.setState({
        gifs: gifs.data,
      });
    });
  };

  clear = () => {
    this.setState({
      selectedId: null,
    })
  }

  render() {
    return (
      <div>
        <br />
        Type search word here:&nbsp;
        <input
          value={this.state.value}
          onChange={e => this.setState({ value: e.target.value })}
          onKeyUp={this.handleSearch}
        />
        <div>
          <br />
          {!this.state.selectedId && this.state.gifs.map(gif => {
            const imgSrc = gif.images.fixed_width;
            return <img key={gif.id} src={imgSrc.url} onClick={() => this.setState({selectedId: gif.id})} />;
          })}
        </div>
        {
          this.state.selectedId && <Details id={this.state.selectedId} onClear={this.clear} />         
        }
      </div>
    );
  }
}

export default HomeContainer;