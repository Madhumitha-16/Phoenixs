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
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
    <link
      href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600&family=Inter:wght@600&family=Lobster+Two:wght@700&display=swap"
      rel="stylesheet"
    />
    {/* Icon Font Stylesheet */}
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
      rel="stylesheet"
    />

    <body>
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
    </body>
    </>
  
  );
}

export default StudentApplication;