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
          <div class="col-auto">
            <div class="name-input">
              <label>name</label>
              <input
                type="text"
                class="form-control"
                placeholder="First name"
                required
              />
            </div>
            <div class="last-name-input">
              <label>last name</label>
              <input
                type="text"
                class="form-control"
                placeholder="Last name"
                required
              />
            </div>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="email"
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
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
