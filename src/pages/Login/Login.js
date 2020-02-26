import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import "../Login/Login.css";
import { Redirect } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      email: "",
      password: "",
      isLogin: false,
      isAdmin: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // console.log(event.target.value );
    // console.log(event.target.name );

    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:3000/users.json")
      .then(response => {
        return response.json();
      })
      .then(users => {
        users.forEach(user => {
          if (
            user.email === this.state.email &&
            user.password === this.state.password &&
            user.admin === true
          ) {
            console.log("admin");

            this.setState({ isLogin: true, isAdmin: true });
          } else if (
            user.email === this.state.email &&
            user.password === this.state.password &&
            user.admin === false
          ) {
            console.log("user");

            this.setState({ isLogin: true, isAdmin: false });
          }
        });
      });
  }

  render() {
    if (this.state.isLogin === true && this.state.isAdmin === false) {
      return <Redirect to={"/home"} />;
    }
    if (this.state.isLogin === true && this.state.isAdmin === true) {
      return <Redirect to={"/admin"} />;
    }
    return (
      <>
        <NavBar />

        <div className="father-container">
          <form className="form-class" onSubmit={this.handleSubmit}>
            <div className="col-auto">
              <div className="form-group">
                <label className="title">Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={this.state.email}
                  aria-describedby="emailHelp"
                  placeholder="Email"
                  required
                  name="email"
                  onChange={this.handleChange}
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label className="title">Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={this.state.password}
                  placeholder="Password"
                  required
                  name="password"
                  onChange={this.handleChange}
                />
              </div>
              <button type="submit" className="btn">
                Ingresar
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default Login;
