import React, { Fragment } from "react";
import Movies from "./Movies";
import {getBySearch} from "../services/MovieApi" 


export default class MovieContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: [],
      results: [],
      initial_state: "avengers",
      flag: 0
    };
  }

  componentDidMount() {
    getBySearch(this.state.initial_state);
  }

  
  

  render() {
    const { results } = this.state;
    return (
      <div className="container" >
        {results &&
          results.map((movie, key) => (
            <Fragment key={key}>
              <Movies
                title={results.title}
                poster_path={results.poster_path}
                overview={results.overview}
                release_date={results.release_date}
              />
            </Fragment>
          ))}
      </div>
    );
  }
}
