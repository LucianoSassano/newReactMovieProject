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
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit(event) {
    event.preventDefault();
    
    // buscar el mail y la contrase;a que est;an en el estado, dentro del arreglo de users
    
    fetch("http://localhost:3000/users.json")
    .then(function(response) {
      return response.json();
      
    })
    .then(function(myJson) {
      console.log(myJson);
      // var data = JSON.parse(myJson);
      // console.log("DATA", data);
      // var jsonCant = JSON.stringify( myJson.lenght);

      this.setState({
      [this.state.users] : myJson
      });

      /// https://www.google.com/search?q=setstate+json&oq=setstate+json&aqs=chrome..69i57j0l7.3505j0j7&sourceid=chrome&ie=UTF-8
      /// https://www.freecodecamp.org/forum/t/reactjs-using-setstate-to-update-a-single-property-on-an-object/146772/3
      

      console.log("asdfafa", this.state.users);
      
    });


    console.log("Ingreso concedido");
  }

  render() {
    return (
      <>
        <NavBar />
        <form className="form-class" onSubmit={this.handleSubmit}>
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
