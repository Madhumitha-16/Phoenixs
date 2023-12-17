import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { auth, db } from '../firebaseConfig';
import RegisterNavbar from '../Components/RegisterNavbar';
import VoiceControl from '../Components/VoiceControl';

export default function ORegister() {
  const navigate = useNavigate();
  const [OrganisationName, setOrgName] = useState("");
  const [curpassword, setCurPassword] = useState("");
  const [Phnum, setPhNo] = useState("");
  const [selectedOption, setSelectedOption] = useState('Student');
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [selectedFacilities, setSelectedFacilities] = useState([]);
  const [address, setAddress] = useState("");
  const facilitiesOptions = [
    'Ramp/Railing',
    'Wheel Chair',
    'Ramp in New Building',
    'Railing in New Building',
    'Wheel Chair at Gate',
    'Scribes for Examination',
    'Learning Through Electronics Gadget',
    'Reading Room',
    'Proper seating',
    'Free textbooks and uniform',
    'Specialized Teaching Learning Materials'
  ];
  const notify = () => toast.success('Registration successful');
  const err = () => toast.error('Email already registered!');

  const handleCheckboxChange = (option) => {
    const isSelected = selectedFacilities.includes(option);
    if (isSelected) {
      setSelectedFacilities((prevSelected) =>
        prevSelected.filter((selected) => selected !== option)
      );
    } else {
      setSelectedFacilities((prevSelected) => [...prevSelected, option]);
    }
  };

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

  const signup = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(user);
      setUserId(user.uid);
      const userDocRef = doc(db, 'Users', user.uid);
      const userData = {
        UserID: user.uid,
        OrganisationName: OrganisationName,
        Email: email,
        PhoneNumber: Phnum,
        Role: selectedOption,
        Facilities: selectedFacilities,
        Address: address,
      };

      await setDoc(userDocRef, userData);
    } catch (error) {
      const errorMessage = error.message;
      console.error(errorMessage);
      err();
    }
  };

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin=""
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600&family=Inter:wght@600&family=Lobster+Two:wght@700&display=swap"
        rel="stylesheet"
      />
      <RegisterNavbar />
      <div className="bodyWrap">
        <Toaster
          toastOptions={{
            success: {
              iconTheme: {
                primary: 'green',
                secondary: 'white',
              },
            },
          }}
        />
        <div className="contentRegisterWrap">
          <form className="registerForm" onSubmit={signup}>
            <VoiceControl />
            <div className="RegisterSide">
              <div className="loginWrap">
                <h1 className="m-0 text-primary ">Register</h1>
                <div className="input-row">
                  <div className="input-group">
                    <input
                      type="text"
                      className="input"
                      onChange={(e) => setOrgName(e.target.value)}
                      required
                    />
                    <label
                      className={`input-label ${
                        OrganisationName.length > 0 ? 'focusLabel' : ''
                      }`}
                    >
                      Organization Name
                    </label>
                  </div>
                </div>
                <div className="input-row">
                  <div className="input-group">
                    <input
                      type="email"
                      className="input"
                      onChange={(e) => setemail(e.target.value)}
                      required
                    />
                    <label
                      className={`input-label ${
                        email.length > 0 ? 'focusLabel' : ''
                      }`}
                    >
                      Email
                    </label>
                  </div>
                </div>
                <div className="input-group">
                  <input
                    type="text"
                    className="input"
                    onChange={(e) => setPhNo(e.target.value)}
                    required
                    pattern="[0-9]*"
                    inputMode="numeric"
                  />
                  <label
                    className={`input-label ${
                      Phnum.length > 0 ? 'focusLabel' : ''
                    }`}
                  >
                    Phone No. [Only numbers]
                  </label>
                </div>
                <div className="input-group">
                  <input
                    type="text"
                    className="input"
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                  <label
                    className={`input-label ${
                      address.length > 0 ? 'focusLabel' : ''
                    }`}
                  >
                    Address
                  </label>
                </div>
                <div className='input-group'>
                  <label>Role</label>
                  <br></br>
                  <select
                    className='select'
                    id="dropdown"
                    value={selectedOption}
                    onChange={handleSelectChange}
                  >
                    <option value="Student">Student</option>
                    <option value="Teach">Teacher</option>
                    <option value="Org">Organization</option>
                  </select>
                </div>
                <div className="input-row">
                  <div className="input-group">
                    <label style={{marginRight:"50px"}}>Facilities</label>
                    <br />
                    <div className="checkbox-options">
                      {facilitiesOptions.map((option) => (
                        <div key={option} className="checkbox-option">
                          <input
                            type="checkbox"
                            id={option}
                            value={option}
                            checked={selectedFacilities.includes(option)}
                            onChange={() => handleCheckboxChange(option)}
                          />
                          <label htmlFor={option}>{option}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Display selected options */}
                {selectedFacilities.length > 0 && (
                  <div className="selected-facilities">
                    <h3>Selected Facilities:</h3>
                    <ul>
                      {selectedFacilities.map((selectedOption) => (
                        <li key={selectedOption}>{selectedOption}</li>
                      ))}
                    </ul>
                  </div>
                )}
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
                        password.length > 0 ? 'focusLabel' : ''
                      }`}
                    >
                      Password
                    </label>
                    {passwordError && (
                      <p className="error">{passwordError}</p>
                    )}
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
                        curpassword.length > 0 ? 'focusLabel' : ''
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
                    className="btn btn-primary rounded-pill w-50 py-3"
                    type="submit"
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
