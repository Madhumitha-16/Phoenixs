import React, { useEffect, useState } from "react";
// import "./Styles/login.css";
//import login_img from "../Assets/Images/Secure login.gif";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../src/firebaseConfig";
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();

  const notify = () => toast.success('Login successful');
  const err = () => toast.error('User not found!');

 const loginfunc=(e)=>{
      e.preventDefault();
      signInWithEmailAndPassword(auth,username,password)
      .then((userCredential)=>
      {    
        const user = userCredential.user;
        console.log(user);
        setUserId(user.uid);
        navigate('/forum');
      }).catch((error)=>
      {
        const errorMessage = error.message;
        console.log(errorMessage);
        err();
      });
    };
       
  return (
    <>
      <div className="title">
        <h1> Nalaiyathiran</h1>
      </div>
      <div>
      <Toaster toastOptions={{
        success: {
          iconTheme: {
            primary: 'green',
            secondary: 'white',
          },
        },
      }} />
    </div>
      <div className="body">
        <div className="contentLoginWrap">

          <form className="loginForm" onSubmit={loginfunc}>
            <div className="loginSide">
              <div className="loginWrap">
                <h1>Log in</h1>
                <div className="input-group">
                  <input
                    type="email"
                    className="input"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                  <label
                    className={`${username.length > 0 ? "focusLabel" : ""}`}
                  >
                    Email ID<span className="asterisk"> * </span>
                  </label>
                </div>
                  <div className="input-group">
                    <input
                      type="password"
                      className="input password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <label
                      className={`${password.length > 0 ? "focusLabel" : ""}`}
                    >
                      Password<span className="asterisk"> * </span>
                    </label>
                  </div>
                  <input type="submit" value="Login" className="button"/>
                <h4>Haven't registered yet ? 
                <Link to="/register">
                Register here!
                </Link></h4>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
