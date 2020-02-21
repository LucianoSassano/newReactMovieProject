import React from "react";
import NavBar from "../components/NavBar";
import "../pages/Login.css";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
  //  this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    // console.log(event.target.value );
    // console.log(event.target.name );

    this.setState({
      [event.target.name]: event.target.value
    });
    // this.state.email = event.target.value;
    // this.state.password = event.target.value;
  }

  // handleSubmit(event) {
  //   event.preventDefault();
    
  
  //   fetch("http://localhost:3000/users.json")
  //   .then(function(response) {
  //     return response.json();
      
  //   })
  //   .then(function(myJson) {

  //      var data = myJson;
  //     console.log("DATA", data);

  //     data.map((datos) => {
  //       this.state.setState({
  //         users: datos.email,
  //         users: datos.password
  //       })


  //       console.log("DATOS", this.state.users);
  //     })}


  //   )}




    componentWillMount() {
      
      fetch('http://localhost:3000/users.json')
        .then((response) => {
          return response.json()
        })
        .then((users) => {
          this.setState({ users: users })
          console.log("Se cargaron", users);
          console.log("Email", users[0].email);
          
        })
    
      }




  render() {
    return (
      <>
        <NavBar />
        <form className="form-class" onSubmit={this.componentWillMount}>
          <div className="col-auto">
            <div className="form-group">
              <label for="exampleInputEmail1">Email</label>
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
              <label for="exampleInputPassword1">Password</label>
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
