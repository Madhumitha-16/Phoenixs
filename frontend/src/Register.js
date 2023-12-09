import React, {useRef, useState} from 'react';
import {auth} from "../src/firebaseConfig";
import {createUserWithEmailAndPassword} from 'firebase/auth';
import { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../src/firebaseConfig';

export default function Register()
{

  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [curpassword, setCurPassword] = useState("");
  const [Phnum, setPhNo] = useState("");
  const [selectedOption, setSelectedOption] = useState('Student');
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const notify = () => toast.success('Registration successful');
  const err = () => toast.error('Email already registered!');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    if (!validatePassword(newPassword)) {
      setPasswordError("Password must be at least 6 characters long.");
    } else {
      setPasswordError("");
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setCurPassword(newConfirmPassword);

    if (newConfirmPassword !== password) {
      setConfirmPasswordError("Passwords do not match.");
    } else {
      setConfirmPasswordError("");
    }
  };

  useEffect(() => {
    if (userId) {
      notify();
      setTimeout(() => {
        navigate(`/login`);
      }, 1000);
    }
  }, [userId, navigate]);

  const signup = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setUserId(user.uid);
        const userDocRef = doc(db, 'Users', user.uid);

        // Set the document data
        const userData = {
          UserID: user.uid, 
          Firstname: firstName,
          Lastname: lastName,
          Email: email,
          Role: selectedOption,
          
        };

        await setDoc(userDocRef, userData);

      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error(errorMessage);
        err();
      });
  };

  return (<div className="bodyWrap">
   <Toaster toastOptions={{
        success: {
          iconTheme: {
            primary: 'green',
            secondary: 'white',
          },
        },
      }} />
    <div className="contentRegisterWrap">
    <form className="registerForm" 
     onSubmit={signup}
    >
      <div className="RegisterSide">
        <div className="loginWrap">
          <h1>Register</h1>
          <div className="input-row">
            <div className="input-group">
                <input type="text" className="input" 
                 onChange={e => setFirstName(e.target.value)} 
                required/>
                <label className={`input-label ${firstName.length > 0 ? "focusLabel" : ""}`}>First Name</label>
            </div>
            <div className="input-group">
                <input type="text" className="input" onChange={e => setLastName(e.target.value)}  required />
                <label className={`input-label ${lastName.length > 0 ? "focusLabel" : ""}`}>Last Name</label>
            </div>
            </div>
            <div className="input-row">

        <div className="input-group">
        <input type="email" className="input" onChange={e => setemail(e.target.value)} required/>
        <label className={`input-label ${email.length > 0 ? "focusLabel" : ""}`}>Email</label>
        </div>
        </div>
        <div className="input-group">
        <input
        type="text"
        className="input"
         onChange={e => setPhNo(e.target.value)}
        required
        pattern="[0-9]*"
        inputMode="numeric"
        />
        <label className={`input-label ${Phnum.length > 0 ? "focusLabel" : ""}`}>Phone No. [Only numbers]</label>
        </div>
        <div className='input-group'>
        <label>Role</label>
        <select className='select' id="dropdown"  value={selectedOption} 
         onChange={handleSelectChange} 
        > <option value="Student">Student</option>
            <option value=" Teacher">Teachers / NGO</option>
            <option value="Org">Organization</option>
        </select>
        
        </div>
        </div>
        <div className="input-row">
            <div className="input-group">
            <input
              type="password"
              className="input"
              onChange={handlePasswordChange}
              required
            />
            <label
              className={`input-label ${
                password.length > 0 ? "focusLabel" : ""
              }`}
            >
              Password
            </label>
            {passwordError && <p className="error">{passwordError}</p>}
            </div>
            <div className="input-group">
            <input
              type="password"
              className="input"
              onChange={handleConfirmPasswordChange}
              required
            />
            <label
              className={`input-label ${
                curpassword.length > 0 ? "focusLabel" : ""
              }`}
            >
              Confirm Password
            </label>
            {confirmPasswordError && (
              <p className="error">{confirmPasswordError}</p>
            )}
            </div>
            </div>
        <div>
       
        <button 
        >Register</button>
        </div>
       
        </div>
        </form>
      </div>
      <div className="infoSide">
        <div className="loginWrap">
          <h2>Nalaiyathiran</h2>
          <hr></hr>
          <h5>Log in, collaborate with your team and submit your innovations here!  .</h5>
          {/* <img src={register} /> */}
        </div>
      </div>
    </div>
  )
}
