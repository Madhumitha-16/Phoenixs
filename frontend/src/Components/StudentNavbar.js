import React from 'react';
import logo from '../img/logo-SQUARE.png';
import { useSpeechSynthesis } from "react-speech-kit";

export default function StudentNavbar() {
  const { speak } = useSpeechSynthesis()
  const Greet = () => {
    speak({
      text: "Welcome to the Voice controllable website. Please chekout the commands!. These commands will help you to controll website with voice!. Click on the Next button to start!.",
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
      <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0 ">
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
            <a href="/forum" className="nav-item nav-link">
              Forum
            </a>
            <a href="/activity" className="nav-item nav-link">
              Activity
            </a>
            <a href="/donators" className="nav-item nav-link">
              Donators
            </a>
            <a href="/schemes-and-scholarships" className="nav-item nav-link">
              Schemes & Scholarships
            </a>
          </div>
          <button className="btn btn-primary rounded-pill px-3 my-2 d-none d-lg-block" onClick={Greet}>
            Accessibility Mode
          </button>
          <a
            href="www.google.com"
            className="btn btn-primary rounded-pill px-3 d-none d-lg-block"
          >
            Logout  
            <i className="fa fa-arrow-right ms-3" />
          </a>
        </div>
      </nav>
      </body>
    </>
  );
}
