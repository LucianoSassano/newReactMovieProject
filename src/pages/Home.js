import React from "react";
import NavBar from "../components/NavBar";
import MovieContent from "../components/MoviesContent";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    search: ""
  };


  handleSearch(value){
    console.log(value);
    
    this.setState({search : value});
  }


    render(){
        return(
        <>
        
        <NavBar />
        <h1>home</h1>
        <MovieContent/>
        </>
        )
    }

  render() {
    return (
      <>
        <NavBar
          onSearch={(e)=> this.handleSearch(e.target.value) }
          search={this.state.search}
        />
        <MovieContent queryValue={this.state.search}/>
      </>
    );
  }
>
}

export default Home;
