import React, { Fragment } from "react";

export default class MovieContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: [],
      results: []
    };
  }

  componentDidMount() {
    this.performSearch("batman");
  }

  performSearch = async searchTerm => {
    console.log("Performing search");
    const urlString =
      "https://api.themoviedb.org/3/search/movie?api_key=16e4c7896761f5945c9296a93ce5703f&query=" +
      searchTerm;

    try {
      const response = await fetch(urlString);
      const resJson = response.json();
      const { results } = await resJson;

      this.setState({
        results
      });
    } catch (err) {
      console.error("fail");
    }
  };

  handleSearchValue() {
    const searchTerm = this.props.search;
    this.performSearch(searchTerm);
  }

  render() {
    const { results } = this.state;
    return (
      <div className="container">
        {results &&
          results.map((movie, key) => (
            <div className="row">
              <Fragment key={key}>
                <div className="col">
                  <img
                    src={"https://image.tmdb.org/t/p/w200" + movie.poster_path}
                  ></img>
                </div>
                <div className="col">
                  <h1>{movie.title}</h1>
                  <div>
                    <p>{movie.overview}</p>
                  </div>
                  <div>
                    <p>Release date : {movie.release_date}</p>
                  </div>
                </div>
              </Fragment>
            </div>
          ))}
      </div>
    );
  }
}
