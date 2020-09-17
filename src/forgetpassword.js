import React,{Component} from "react";
export default class ForgetPassword extends React.Component{
	render(){
		return(
			<div className="container col-md-3 col-xm-3 forgerpassword">
				<form>
				  <div className="text-center"><h3>Forget Password ? </h3></div>
				  <p>Enter below the email that you used to login through to get a password reset code</p>
				  <div className="form-group">
				    <label for="exampleFormControlInput1">Email</label>
				    <input type="email" className="form-control" id="exampleFormControlInput1" />
				  </div>
				  
				  <button className="btn btn-primary w-100">Register</button>
				  <p className="mt-3">Do not have an account? <a href="#">Register</a></p>
				  <p className="mt-3">Remember Password? <a href="#">Login</a></p>
				 </form>
			</div>
		)
	}
}