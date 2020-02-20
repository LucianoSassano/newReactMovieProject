import React from "react";
import NavBar from "../components/NavBar";
import "../pages/Login.css";

class Login extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <form className="form-class">
          <div className="col-auto">
          <div className="col-auto">
            <div className="name-input">
              <label>name</label>
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                required
              />
            </div>
            <div className="last-name-input">
              <label>last name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Ingresar
          </button>
          </div>
        </form>
      </>
    );
  }
}

export default Login;
