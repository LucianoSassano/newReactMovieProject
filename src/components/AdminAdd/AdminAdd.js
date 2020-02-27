import React, { Fragment } from "react";

export default class AdminAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      overview: "",
      genres: [
        {
          id: 28,
          name: "Action"
        },
        {
          id: 12,
          name: "Adventure"
        },
        {
          id: 16,
          name: "Animation"
        },
        {
          id: 35,
          name: "Comedy"
        },
        {
          id: 80,
          name: "Crime"
        },
        {
          id: 99,
          name: "Documentary"
        },
        {
          id: 18,
          name: "Drama"
        },
        {
          id: 10751,
          name: "Family"
        },
        {
          id: 14,
          name: "Fantasy"
        },
        {
          id: 36,
          name: "History"
        },
        {
          id: 27,
          name: "Horror"
        },
        {
          id: 10402,
          name: "Music"
        },
        {
          id: 9648,
          name: "Mystery"
        },
        {
          id: 10749,
          name: "Romance"
        },
        {
          id: 878,
          name: "Science Fiction"
        },
        {
          id: 10770,
          name: "TV Movie"
        },
        {
          id: 53,
          name: "Thriller"
        },
        {
          id: 10752,
          name: "War"
        },
        {
          id: 37,
          name: "Western"
        }
      ],
      genre: "",

      url_pic: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let movie = {
      title: this.state.title,
      overview: this.state.overview,
      genre: this.state.genre,
      url_pic: this.state.url_pic
    };
    const localStorageMovies = JSON.parse(localStorage.getItem("movies"));
    let jsonMovies = [];
    if (Array.isArray(localStorageMovies)) jsonMovies = localStorageMovies;
    jsonMovies.push(movie);
    console.log(jsonMovies);
    localStorage.setItem("movies", JSON.stringify(jsonMovies));
  }

  render() {
    return (
      <Fragment>
        <form>
          <div className="form-group">
            <label>Movie Title</label>
            <input
              onChange={this.handleChange}
              name="title"
              type="text"
              className="form-control"
              id="title-form"
              placeholder="title"
            />
          </div>

          <div className="form-group">
            <label>Overview</label>
            <textarea
              onChange={this.handleChange}
              name="overview"
              className="form-control"
              id="overview-form"
              rows="3"
              placeholder="overview"
            ></textarea>
          </div>
          <div className="form-group">
            <label>Genre</label>
            <select
              name="genre"
              className="custom-selec"
              onChange={this.handleChange}
            >
              {this.state.genres.map((generos, key) => (
                <option key={key}>{generos.name}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Upload a movie poster photo</label>
            <input
              onChange={this.handleChange}
              type="file"
              className="form-control-file"
              id="form-poster"
              name="url_pic"
            />
          </div>
          <button onClick={this.handleSubmit} type="submit">
            Submit
          </button>
        </form>
      </Fragment>
    );
  }
}