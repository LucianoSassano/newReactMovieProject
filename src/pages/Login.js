import React from 'react'
import NavBar from '../components/NavBar'

class Login extends React.Component
{
    render(){
        return(
            <>
        <NavBar />
        <form>
        <div class="row">
    <div class="col">
      <input type="text" class="form-control" placeholder="First name"/>
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Last name"/>
    </div>
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Email</label>
    <input type="text" class="form-control" placeholder="Email"/>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="text" class="form-control" placeholder="Password"/>
  </div>
  <button type="submit" className="btn btn-primary">Ingresar</button>
</form>
    </>
    )}
}


export default Login