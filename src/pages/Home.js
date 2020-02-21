import React, { Children } from "react";
import NavBar from "../components/NavBar";
import MovieContent from "../components/MoviesContent";
import { getBySearch } from "../services/movieApi";

class Home extends React.Component {
  state = {
    search: "avengers",
    results: []
  };

   
  componentDidMount(){

    getBySearch(this.state.search)
      .then(results => {
        console.log("result", results);
        this.setState({ results: results });
        const jsonMovie = JSON.stringify(results)
        localStorage.setItem("movies",jsonMovie)
      })
      .catch(err => console.log(err));
  }
  



  handleSubmit(e) {
    console.log(e.target.value());
    //this.setState({ search: value });
  }





  render() {
    return (
      <>
        <NavBar
          onSubmit={(e) => this.handleSubmit(e)}
        />
        <MovieContent results={this.state.results} />
      </>
    );
  }
}

export default Home;
