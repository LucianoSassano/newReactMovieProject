import React from "react";
import MovieLogo from "../../images/movie-logo.png";

class Navbar extends React.Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-inverse bg-inverse navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand" href="./Home">
              <img src={MovieLogo} width="50" height="50" alt="page icon"></img>
            </a>
            <form
              onChange={this.props.onChange}
              onSubmit={this.props.onSubmit}
              className="form-inline"
              id="search-bar"
            >
              <input
                className="form-control mr-sm-2"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="./Home">
                    Home{" "}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./Login">
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
