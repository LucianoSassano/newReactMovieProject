import React from "react";
import "../Movies/Movies.css";

export default class MoviesAdmin extends React.Component {
  constructor(props) {
    super(props);
  }

  makeAvailable() {
    const localStorageMovies = JSON.parse(localStorage.getItem("movies"));
    let jsonMovies = [];
    if (Array.isArray(localStorageMovies)) jsonMovies = localStorageMovies;
    if (
      jsonMovies.findIndex(movie => movie.title === this.props.title) !== -1
    ) {
      alert("se encuentra agregada");
    } else {
      jsonMovies.push(this.props);
      console.log(jsonMovies);
      localStorage.setItem("movies", JSON.stringify(jsonMovies));
    }
  }

  removeMovie() {
    const localStorageMovies = JSON.parse(localStorage.getItem("movies"));
    let jsonMovies = [];
    if (Array.isArray(localStorageMovies)) jsonMovies = localStorageMovies;
    jsonMovies = jsonMovies.filter(movie => movie.title !== this.props.title);
    console.log(jsonMovies);
    localStorage.setItem("movies", JSON.stringify(jsonMovies));
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
                  className="btn btn-success"
                  onClick={this.makeAvailable.bind(this)}
                  value="make available"
                ></input>
                <input
                  type="button"
                  className="btn btn-danger"
                  onClick={this.removeMovie.bind(this)}
                  value="remove movie"
                ></input>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}