import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Styles/register.css';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../src/firebaseConfig";
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { doc, getDoc } from "firebase/firestore";
import Navbar from "./Components/Navbar";
import VoiceControl from "./Components/VoiceControl";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();

  const notify = () => toast.success('Login successful');
  const err = () => toast.error('User not found!');

  const loginfunc = (e) => {
    e.preventDefault();
    
    signInWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setUserId(user.uid);
  
        // Fetch the user document from Firestore based on the user's UID
        const userDocRef = doc(db, 'Users', user.uid);
        getDoc(userDocRef)
          .then((userDoc) => {
            if (userDoc.exists()) {
              const userData = userDoc.data();
              const userRole = userData.Role;
              console.log(userRole);
              // Navigate based on the user's role
              switch (userRole) {
                case 'Student':
                  navigate('/student/home');
                  break;
                case 'Teach':
                  navigate('/teacher/home');
                  break;
    
                case 'Org':
                  navigate('/student/home');
                  break;
                case 'Minis':
                  navigate('/ministry/home');
                  break;
                default:
                  // Handle default case or error
                  break;
              }
            } else {
              console.error('User document not found.');
            }
          })
          .catch((error) => {
            console.error('Error fetching user document:', error.message);
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        err();
      });
  };
  
       
  return (
    <>
     <Navbar />
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
              <VoiceControl />
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
                  <input type="submit" value="Login" className="btn btn-primary rounded-pill w-25 py-2"/>
               <br></br>
                <p>Haven't registered yet ? 
                <Link to="/register">
                Register here!
                </Link></p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
