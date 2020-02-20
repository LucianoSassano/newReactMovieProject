import React, { Fragment } from "react";
import $ from "jquery";

export default class MovieContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: [],
      results: []
    };
  }
  
  componentDidMount() {
    this.performSearch("avengers");
  }

  // performSearch(searchTerm) {
  //   console.log("Performing search");
  //   const urlString =
  //     "https://api.themoviedb.org/3/search/movie?api_key=16e4c7896761f5945c9296a93ce5703f&query=" +
  //     searchTerm;
  //   $.ajax({
  //     url: urlString,
  //     success: searchResults => {
  //       console.log("performed succesfully");
  //       const results = searchResults.results;
  //       console.log(results);
        
  //       this.setState({
  //         results: results,
  //       })
  //     },
  //     error: (xhr, status, err) => {
  //       console.error("failed to fetch data");
  //     }
  //   });
  // }

  performSearch = async (searchTerm) => {
    console.log("Performing search");
    const urlString =
      "https://api.themoviedb.org/3/search/movie?api_key=16e4c7896761f5945c9296a93ce5703f&query=" +
      searchTerm;

      try{
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=16e4c7896761f5945c9296a93ce5703f&query=avengers`)
        const resJson = response.json()
        const {results} = await resJson
        

        this.setState({
          results,
        })
      } catch(err) {
        console.error('fail')
      }
  }

  render() {
    const { results } = this.state;
    return (
      <div className="container">
        {results && results.map((movie, key) => (
          <Fragment key={key}>
          {console.log('ddasadsads', movie.title)
          }
            <img
              src={
                "https://image.tmdb.org/t/p/w500" + movie.poster_path}
            ></img>
            <h1>{movie.title}</h1>
            <div>
              <p>{movie.overview}</p>
            </div>
            <div>
              <p>Release date : {movie.release_date}</p>
            </div>
          </Fragment>
        ))}
      </div>
    );
  }
}
