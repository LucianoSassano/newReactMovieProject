import React, { Fragment } from "react";

export default class MovieContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: [],
      results: []
    };
    this.handleSearchValue = this.handleSearchValue.bind(this);
  }

  componentDidMount() {
    this.performSearch("avengers");
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
    return searchTerm;
  }

  render() {
    const { results } = this.state;
    return (
      <div className="container">
        {results &&
          results.map((movie, key) => (
            <Fragment key={key}>
              <div class="card mb-3" style={{ maxWidth: "540px" }}>
                <div class="row no-gutters">
                  <div class="col-md-4">
                    <img
                      src={
                        "https://image.tmdb.org/t/p/w200" + movie.poster_path
                      }
                      alt="poster"
                      class="card-img"
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">{movie.title}</h5>
                      <p class="card-text">{movie.overview}</p>
                      <p class="card-text">
                        <small class="text-muted">{movie.release_date}</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Fragment>
          ))}
      </div>
    );
  }
}
