import React, { useState } from 'react';
import '../Styles/Home.css';
import Footer from '../Components/Footer.js';
import { useSpeechSynthesis } from "react-speech-kit";
import OrganizationNavbar from '../Components/OrganizationNavbar.js';
import StudentApplicationList from '../Components/StudentApplicationList.js';

function StudentApplication() {
  const { speak } = useSpeechSynthesis()
  const [greet, setGreet] = useState(false);
  const text = 'Some dummy text'
  
  return (
    <>
      {/* Google Web Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      {/* ... (rest of your head content) */}
      
      <OrganizationNavbar />
      <StudentApplicationList />
      
      {/* footer starts */}
      <Footer />
      {/* footer ends */}
      
      {/* Back to Top */}
      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i className="bi bi-arrow-up" />
      </a>

      {/* JavaScript Libraries */}
      {/* Template Javascript */}
    </>
  );
}

export default StudentApplication;
