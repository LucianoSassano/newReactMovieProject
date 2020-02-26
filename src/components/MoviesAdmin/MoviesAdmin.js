import React from "react";
import "../Movies/Movies.css";

export default class MoviesAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  makeAvailable() {
    console.log("available" + this.props.title);
    this.setState({ movies: this.props });
    console.log(this.state);
    //una vez logrado setear la peli en el state , escribir en el local storage
  }

  render() {
    return (
      <div className="container">
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img
                src={"https://image.tmdb.org/t/p/w200" + this.props.poster_path}
                alt="poster"
                className="card-img"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{this.props.title}</h5>
                <p className="card-text">{this.props.overview}</p>
                <p className="card-text">
                  <small className="text-muted">
                    {this.props.release_date}
                  </small>
                </p>
                <input
                  type="button"
                  onClick={this.makeAvailable.bind(this)}
                  value="make available"
                ></input>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
