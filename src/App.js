import React from "react";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import $ from 'jquery';


function App() {

 

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