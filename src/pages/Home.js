import React, { Children } from "react";
import NavBar from "../components/NavBar";
import MovieContent from "../components/MoviesContent";

class Home extends React.Component {
  
  state = {
    search: ""
  };


  handleSearch(value){
    console.log(value);
    this.setState({search : value});
  }

  render() {
    return (
      <>
        <NavBar
          onSearch={(e)=> this.handleSearch(e.target.value) }
          search={this.state.search}
        />
        <MovieContent search={this.state.search}/>
      </>
    );
  }
}

export default Home;
