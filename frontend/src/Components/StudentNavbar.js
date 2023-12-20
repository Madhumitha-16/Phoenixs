import React from 'react';
import logo from '../img/logo-SQUARE.png';
import { useSpeechSynthesis } from "react-speech-kit";
import { useNavigate } from 'react-router-dom';

export default function StudentNavbar() {
  const { speak } = useSpeechSynthesis()
  const navigate = useNavigate();
  const Greet = () => {
    speak({
      text: "Welcome to the Phoeniks. Please checkout the commands!. Say Go to and the page you want to navigate to move between pages and go back to move to previous page. These commands will help you to control website with voice!. Now you are set to use the website!.",
    });
  };
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600&family=Inter:wght@600&family=Lobster+Two:wght@700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
        rel="stylesheet"
      />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
        rel="stylesheet"
      />

      <body>
      <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 my-2" >
        <a href="/" className="navbar-brand">
          <h1 className="m-0 text-primary ">
          <img src={logo} alt=''  width={80} />
            Phoenixs
          </h1>
        </a>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav mx-auto">
            <a href="/student/home" className="nav-item nav-link active">
              Home
            </a>
            <a href="/forum" className="nav-item nav-link active">
              Forum
            </a>
            <a href="/student/AHome" className="nav-item nav-link active">
              Activity
            </a>
            <a href="/Videochat" className="nav-item nav-link">
            Connect to teacher
            </a>
            <a href="/Scheme-details" className="nav-item nav-link active " >
              Schemes & Scholarships
            </a>
          </div>
          <button className="btn btn-primary rounded-pill px-3 my-2 d-none d-lg-block" onClick={Greet}>
            Accessibility Mode
          </button>
          <button className="btn btn-primary rounded-pill px-3 my-2 d-none d-lg-block" onClick={()=>navigate("/login")}>
            Logout
          </button>
        </div>
      </nav>
      </body>
    </>
  );
}
