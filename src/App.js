import React from "react";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {

  // constructor() {
  //   super()
  //   this.state = { 
  //     page: [],
  //     movie: []
  //   }
  // }
  // onChange = event => {
  //   this.setState({ page: event.target.value });
  // };
  // onSearch = event => {
  //   event.preventDefault();
  //   const { page } = this.state;
  //   if (movie === '') {
  //     return;
  //   }
  //   fetch('http://api.themoviedb.org/3/search/movie?query=marvel&api_key=16e4c7896761f5945c9296a93ce5703f')
  //     .then(response => response.json())
  //     .then(result => this.onSetResult(result, page));
  // };
  // onSetResult = (result, key) => {
  //   this.setState({ hits: result.hits });
  // };


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

export default App;