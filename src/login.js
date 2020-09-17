import React,{Component} from "react";
export default class Login extends React.Component{
	render(){
		return(
			<div className="container col-md-4 col-xm-6 login">
				<form>
				  <div className="text-center"><h3>Welcome Back!</h3></div>
				  <div className="form-group">
				    <label for="exampleFormControlInput1">Email</label>
				    <input type="email" className="form-control" id="exampleFormControlInput1" />
				  </div>
				  <div className="form-group">
				    <label for="exampleFormControlInput1">Password</label>
				    <input type="email" className="form-control" id="exampleFormControlInput1"  />
				  </div>
				  <button className="btn btn-primary w-100">Login</button>
				  <p className="mt-3">Do not have an account? <a href="#">Register</a></p>
				  <p className="mt-3">Forget Password? <a href="#">Forget Password</a></p>
				 </form>
			</div>
		)
	}
}