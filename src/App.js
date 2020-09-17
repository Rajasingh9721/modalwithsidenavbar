import React,{useState} from "react";
import Signup from './signup.js'
const App = ()=>{
  const openNav = ()=>{
    document.getElementById("mySidenav").style.width = "250px";
  };
  const closeNav = ()=>{
    document.getElementById("mySidenav").style.width = "0";
  };
  const Signup=()=>{
    document.getElementById("myModal").style.width="400px";
    document.getElementById("myModal").style.display="block";
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("login").style.display="none";
    document.getElementById("forgetpassword").style.display = "none";
  }
  const Login=()=>{
    document.getElementById("login").style.width="400px";
    document.getElementById("login").style.display="block";
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("myModal").style.display="none";
    document.getElementById("forgetpassword").style.display = "none";
  }

  const forgetpassword=()=>{
    document.getElementById("forgetpassword").style.width="400px";
    document.getElementById("forgetpassword").style.display="block";
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("login").style.width="0";
    document.getElementById("login").style.display="none";
    document.getElementById("myModal").style.display="none";


  }
  const close=()=>{
    document.getElementById("myModal").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("forgetpassword").style.display = "none";
  }
    return(
      <>
        <div className="mainbody">
          <div id="mySidenav" className="sidenav">
            <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
            <a href="#" className="mt-5">Home</a>
            <a href="#">Find Experts</a>
            <a href="#">Astrology</a>
            <a href="#">Health & Fitness</a>
            <a href="#">Law</a>
            <a href="#" onClick={Login} className="mt-5">Login</a>
            <a href="#" onClick={Signup}>Signup</a>
            <a href="#">Become an Expert</a>
          </div>
          <div className="navcross1">
             <span className="navcross"  onClick={openNav}>&#9776; </span>
          </div>

        {/*    Signup myModal        */}

          <div className="container col-md-4 col-xm-6 signup" id="myModal">
            <form>
              <a href="javascript:void(0)" className="closebtn2" onClick={close}>&times;</a>
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
              <p className="mt-3">Have an account?<a href="#" onClick={Login}>Login</a></p>
             </form>
            </div>

         {/*    Login myModal        */}


         <div className="container col-md-4 col-xm-6 login" id="login">
            <form>
              <a href="javascript:void(0)" className="closebtn2" onClick={close}>&times;</a>
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
              <p className="mt-3">Do not have an account? <a href="#" onClick={Signup}>Register</a></p>
              <p className="mt-3">Forget Password? <a href="#" onClick={forgetpassword}>Forget Password</a></p>
             </form>
          </div>

          {/*    forgetpassword         */}


          <div className="container col-md-3 col-xm-3 forgetpassword"  id="forgetpassword">
            <form>
              <a href="javascript:void(0)" className="closebtn2" onClick={close}>&times;</a>
              <div className="text-center"><h3>Forget Password ? </h3></div>
              <p>Enter below the email that you used to login through to get a password reset code</p>
              <div className="form-group">
                <label for="exampleFormControlInput1">Email</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" />
              </div>              
              <button className="btn btn-primary w-100">Register</button>
              <p className="mt-3">Do not have an account? <a href="#" onClick={Signup}>Register</a></p>
              <p className="mt-3">Remember Password? <a href="#"  onClick={Login}>Login</a></p>
             </form>
          </div>      
        </div>     
      </>
    )
  }

export default App;