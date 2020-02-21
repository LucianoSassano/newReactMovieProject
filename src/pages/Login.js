import React from "react";
import NavBar from "../components/NavBar";
import "../pages/Login.css";
import { Redirect } from "react-router-dom"
import backImg from "../images/background2.jpg"

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      email: "",
      password: "",
      isLogin: false
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
    event.preventDefault()
    fetch('http://localhost:3000/users.json')
    .then((response) => {
      return response.json()
    })
    .then((users) => {
      // this.setState({ users: users })
      // console.log("Se cargaron", users);
      // console.log("Email", users[0].email);
      users.forEach( user  => {
        if (user.email === this.state.email && user.password === this.state.password)
          this.setState({isLogin : true});
      });
    })

  }



  render() {
    
    if ( this.state.isLogin ){
      return <Redirect to={'/'} />
    }
    return (
      <>
        <NavBar />
        <div className='father-container' >
          {/* style = {{backgroundImage: `url(${backImg})`}} */}
        <form className="form-class" onSubmit={this.handleSubmit}>
          <div className="col-auto" >
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
              <label className="title" >Password</label>
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
