import React, { useEffect, useState } from 'react';
import logo from '../img/logo-SQUARE.png';
import { useSpeechSynthesis } from "react-speech-kit";
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';


export default function Navbar() {
  const { speak } = useSpeechSynthesis()
  const [grayscale, setGrayscale] = useState(false);
  const { t } = useTranslation();
  useEffect(() => {
    const isGrayscale = localStorage.getItem('grayscale');
    if (isGrayscale === 'true') {
      setGrayscale(true);
      document.body.classList.add('grayscale');
    }
  }, []);

  const toggleGrayscale = () => {
    const updatedGrayscale = !grayscale;
    setGrayscale(updatedGrayscale);
    if (updatedGrayscale) {
      localStorage.setItem('grayscale', 'true');
      document.body.classList.add('grayscale');
    } else {
      localStorage.setItem('grayscale', 'false');
      document.body.classList.remove('grayscale');
    }
  };

  const Greet = () => {
    speak({
      text: "Welcome to the Phoeniks. Please checkout the commands!. Say Go to and the page you want to navigate to move between pages and go back to move to previous page. These commands will help you to control website with voice!. Now you are set to use the website!.",
    });
  };
  return (
    <>
    <style>
        {`
          body {
            transition: filter 0.5s ease; /* Add transition effect for smoothness */
          }
          .grayscale {
            filter: grayscale(100%); /* Apply grayscale filter to the entire website */
          }
        `}
      </style>
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
        <a href="#" className="navbar-brand">
          <h1 className="m-0 text-primary ">
          <img src={logo} alt='' width={80} />
            Phoenixs
          </h1>
        </a>
       <LanguageSwitcher />
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav mx-auto">
            <a href="/register" className="nav-item nav-link active" >
              {t('register')} 
            </a>
            <a href="/Student-register" className="nav-item nav-link">
              {t('student')} 
            </a>
            <a href="/Teacher-register" className="nav-item nav-link">
              {t('teacher')}
            </a>
            <a href="/organisation-register" className="nav-item nav-link">
              {t('organization')}
            </a>
            
            {/* <a href="to be coded " className="nav-item nav-link">
              Ministry
            </a>
            <a href="to be coded " className="nav-item nav-link">
              Donor
            </a> */}
          </div>
          <button className="btn btn-primary rounded-pill px-3 my-2 mx-2 d-none d-lg-block" onClick={Greet} style={{ marginRight: '5px' }}>
            Accessibility Mode
          </button>
          <button className="btn btn-primary rounded-pill px-3 my-2 ml-2 d-none d-lg-block" onClick={toggleGrayscale}>
            Toggle Grayscale
          </button>

        </div>
      </nav>
      <hr></hr>
      </body>
    </>
  );
}
