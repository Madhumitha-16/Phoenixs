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
// User signed in successfully.
const user = result.user;
console.log(user)
// ...
}).catch((error) => {
// User couldn't sign in (bad verification code?)
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
  function onCaptchVerify(){
    if(!window.recaptchaVerifier){
    console.log("Clicked")
  window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
    'size': 'invisible',
    callback: (response) => {
      
      console.log("Entered here")
     signIn()
    },
    'expired-callback': () => {
      console.log("WHATS THE ERROR")
 }
});
}
}
       
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
                    type="number"
                    className="input"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    required
                  />
                  <label
                  >
                    Phone No.<span className="asterisk"> * </span>
                  </label>
                </div>
                  <div className="input-group">
                    <input
                      type="number"
                      className="input password"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      required
                    />
                    <label
                      
                    >
                      OTP<span className="asterisk"> * </span>
                    </label>
                  </div>
                  <button onClick={signIn}>Send OTP</button>
                  <button onClick={login}>Signup</button>
                  <input type="submit" value="Login" className="btn btn-primary rounded-pill w-25 py-2"/>
               
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