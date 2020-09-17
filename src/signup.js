import React,{Component} from "react";
export default class Signup extends React.Component{
	render(){
		return(
			<div className="container col-md-4 col-xm-6 signup" id="myModal">
				<form>
				  <div className="text-center"><h3>Register</h3></div>
				  <div className="form-group">
				    <label for="exampleFormControlInput1">Name</label>
				    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Name" />
				  </div>
				  <div className="form-group">
				    <label for="exampleFormControlInput1">Email</label>
				    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email" />
				  </div>
				  <div className="form-group">
				    <label for="exampleFormControlInput1">Password</label>
				    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Password" />
				  </div>
				  <button className="btn btn-primary w-100">Register</button>
				  <p className="mt-3">Have an account?<a href="#">Login</a></p>
				 </form>
			</div>
		)
	}
}