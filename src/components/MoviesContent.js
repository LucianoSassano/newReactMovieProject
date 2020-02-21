import React, { Fragment } from "react";
import Movies from "./Movies";
import { getBySearch } from "../services/movieApi";

export default class MovieContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: [],
    };

  }

 
  

  render() {
    const { results } = this.props;
    return (
      <div className="container">
        {results &&
          results.map((movie, key) => (
            <Movies
              key={key}
              title={movie.title}
              poster_path={movie.poster_path}
              overview={movie.overview}
              release_date={movie.release_date}
            />
          ))}
      </div>
    );
  }
}
