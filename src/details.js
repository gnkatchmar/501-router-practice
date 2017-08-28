import React, { Component } from "react";
// import { Redirect } from 'react-router';

const API_KEY = "d2da05e5823d4073aa18f6715ca015f8";
const URL = "https://api.giphy.com/v1/gifs";

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    var error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

class PictureDetails extends Component {
  state = {
    loading: true,
    error: false,
    picture: null,
  };
  componentDidMount = () => {
    this.setState({
      loading: true,
      searchValue: "",
      selectedId: null,
    });
   
     fetch(`${URL}/${this.props.id}?api_key=${API_KEY}`).then(checkStatus).then(res => res.json()).then(
      picture => {
        this.setState({
          picture,
          loading: false,
          error: false,
        });
      },
      () => {
        this.setState({
          picture: null,
          loading: false,
          error: true,
        });
      },
    );
  };

  render() {
    return (
      <div className="detail">
        {this.state.loading && <div>Loading...</div>}
        {!this.state.loading &&
          !this.state.error &&
          <div>
            <button className="button" onClick={this.props.onClear}>Clear</button>
            <br />
            <img src={this.state.picture.data.images.original.url} />
            <br />
            Slug: {this.state.picture.data.slug}
            <br />
            User Name: {this.state.picture.data.username}
            <br />
              Imported: {this.state.picture.data.import_datetime}
            <br />
              Source: {this.state.picture.data.source}
          </div>}
      </div>
    );
  }
}

export default PictureDetails;

// <Redirect push to={`/image/${this.props.id}`} /> 

