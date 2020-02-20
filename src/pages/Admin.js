import React from "react";
import NavBar from "../components/NavBar";

class Admin extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Ingresar
          </button>
        </form>
      </>
    );
  }
}

export default Admin;
