import React from "react";
import $ from "jquery";
import Movie from "../components/Movie"

export default class MovieContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: []
    };
    this.performSearch();
  }

  performSearch() {
    console.log("Performing search");
    const urlString =
      "https://api.themoviedb.org/3/search/movie?api_key=16e4c7896761f5945c9296a93ce5703f&query=marvel";
    $.ajax({
      url: urlString,
      success: searchResults => {
        console.log("performed succesfully");
        const results = searchResults.results;

        results.forEach(movie => {
          console.log(movie.title);
        });
      },
      error: (xhr, status, err) => {
        console.error("failed to fetch data");
      }
    });
  }

  render() {
      return(
          this.state.results.map((movie,key) => {
              <Movie
              img = {movie.poster_path}
              title = {movie.title}
              overview = {movie.overview}
              release = {movie.release_date}
          })
      )
  }
}
