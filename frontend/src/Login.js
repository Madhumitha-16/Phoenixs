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
import { signInWithPhoneNumber } from "firebase/auth";
import { RecaptchaVerifier } from 'firebase/auth';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();
  const [number,setNumber] = useState()
  const [code,setCode] = useState()

  const notify = () => toast.success('Login successful');
  const err = () => toast.error('User not found!');
  const signIn = ()=>{
    onCaptchVerify();
    const appVerifier = window.recaptchaVerifier;
    const phnum = "+91" + number
    console.log(appVerifier)
    signInWithPhoneNumber(auth, phnum, appVerifier)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
          // ...
        }).catch((error) => {
          // Error; SMS not sent
          console.log(error)
          console.log("SMS not sent")
          // ...
 });
}

const login = ()=>{

  console.log(code);
  window.confirmationResult.confirm(code).then((result) => {
    const user = result.user;
    console.log(user)
    if(user.uid){
      navigate('/student/home');
    }
    // ...
  }).catch((error) => {
console.log("Wrong code")
 // ...
});
}
  

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
                  navigate('/Organization/home');
                  break;
                case 'Minis':
                  navigate('/Ministry/home');
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
  function onCaptchVerify(){
    if(!window.recaptchaVerifier){
    console.log("Clicked")
  window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
    'size': 'invisible',
    callback: (response) => {
      // reCAPTCHA solved, allow signInWithPhoneNumber.
      console.log("Entered here")
     signIn()
      // ...
    },
    'expired-callback': () => {
      // Response expired. Ask user to solve reCAPTCHA again.
      console.log("WHATS THE ERROR")
      // ...
 }
});
}
}
       
  return (
    <>
     <Navbar />
      <div>
      {/* <Toaster toastOptions={{
        success: {
          iconTheme: {
            primary: 'green',
            secondary: 'white',
          },
        },
      }} /> */}
    </div>
      <div className="body">
        <div className="contentLoginWrap">

          <form className="loginForm" onSubmit={loginfunc}>
            <div className="loginSide">
              <div className="loginWrap">
              <VoiceControl />
                <h1>Log in</h1>
                <div className="input-group">
                <label
                    // className={${number.length > 0 ? "focusLabel" : ""}}
                  >
                    Phone No.<span className="asterisk"> * </span>
                  </label>
                  <input
                    type="number"
                    className="input"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    required
                  />
                  
                </div>
                  <div className="input-group">
                  <label
                      // className={${code.length > 0 ? "focusLabel" : ""}}
                    >
                      OTP<span className="asterisk"> * </span>
                    </label>
                    <input
                      type="number"
                      className="input password"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      required
                    />
                   
                  </div>
                  <button className="btn btn-dark rounded-pill py-sm-3 px-sm-4 animated slideInRight" style={{marginRight:"20px"}} onClick={signIn}>Send OTP</button>
                  <button className="btn btn-primary rounded-pill py-sm-3 px-sm-4 animated slideInRight" onClick={login}>Login</button>
                  {/* <input type="submit" value="Login" className="btn btn-primary rounded-pill w-25 py-2"/> */}
               
               <br></br>
                <p>Haven't registered yet ? 
                <Link to="Teacher-register">
                Register here!
                </Link></p>
                <div id='recaptcha-container'></div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;