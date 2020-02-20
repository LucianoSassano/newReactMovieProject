import React from "react";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Login from "./pages/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import $ from "jquery";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.performSearch()
  } 

  performSearch(){
    console.log("Performing search")
    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=16e4c7896761f5945c9296a93ce5703f&query=marvel"
    $.ajax({
      url: urlString,
      success:(searchResults) =>{
        console.log("performed succesfully");
        console.log(searchResults.results);
        
      },
      error:(xhr,status,err) =>{
        console.error("failed to fetch data");
        
      }
    })
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/admin">
              <Admin />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
