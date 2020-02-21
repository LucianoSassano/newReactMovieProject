import React, { Fragment } from "react";

export default class MovieContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: [],
      results: [],
      initial_state: "avengers",
      flag:0
    };
  }

  componentDidMount() {
    this.performSearch(this.state.initial_state);
  }

 /* shouldComponentUpdate(nextProps,nextState) {
    if(nextState.flag === this.state.flag){
      return false;
    }else{
      return true;
    }
   
  }*/



  performSearch = async searchTerm => {
    console.log("Performing search");

    const urlString =
      "https://api.themoviedb.org/3/search/movie?api_key=16e4c7896761f5945c9296a93ce5703f&query=" +
      searchTerm;

    try {
      const response = await fetch(urlString);
      const resJson = response.json();
      const { results } = await resJson;
      this.setState({flag : 1})

      this.setState({
        results
      });
    } catch (err) {
      console.error("fail");
    }
  };

  render() {
    const { results } = this.state;
    return (
      <div className="container">
        {results &&
          results.map((movie, key) => (
            <Fragment key={key}>
              <div className="card mb-3" style={{ maxWidth: "540px" }}>
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img
                      src={
                        "https://image.tmdb.org/t/p/w200" + movie.poster_path
                      }
                      alt="poster"
                      className="card-img"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{movie.title}</h5>
                      <p className="card-text">{movie.overview}</p>
                      <p className="card-text">
                        <small className="text-muted">
                          {movie.release_date}
                        </small>
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
