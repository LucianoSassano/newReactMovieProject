import React from "react";

export default class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="movie-image">
            <img
              src={require("https://image.tmdb.org/t/p/w185" +
                this.props.img)}
              alt="my movie image"
            />
          </div>
          <span>{this.props.title}</span>
          <div className="movie-overview">
            <p>{this.props.overview}</p>
          </div>
    <div><p>{this.props.release}</p></div>
        </div>
      </div>
    );
  }
}
