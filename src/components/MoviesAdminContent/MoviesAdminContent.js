import "../MoviesContent/MoviesContent.css";
import React from "react";
import MoviesAdmin from "../MoviesAdmin/MoviesAdmin";
import AdminAdd from "../AdminAdd/AdminAdd";

export default class MoviesAdminContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: []
    };
  }

  render() {
    const { results } = this.props;
    return (
      <div className="container">
        {results &&
          results.map((movie, key) => (
            <MoviesAdmin
              key={key}
              title={movie.title}
              poster_path={movie.poster_path}
              overview={movie.overview}
              release_date={movie.release_date}
              id={movie.id}
            />
          ))}
        <AdminAdd/>
      </div>
    );
  }
}
