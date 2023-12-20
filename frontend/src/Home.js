import React, { useEffect } from 'react';
import '../src/Styles/Home.css';
import logo1 from '../src/img/logo-SQUARE.png';
import c1 from '../src/img/Header-down-image.jpg';
import teacher from '../src/img/TeacherImg.jpeg'
import orgcenter from '../src/img/educenter.jpg';
import stugru from '../src/img/StudentsGrp.jpeg';
import about1 from '../src/img/Circle-3.jpeg';
import about2 from '../src/img/Circle-2.png';
import about3 from '../src/img/Circle-1.jpg';
import donorpic from '../src/img/disablePic1.png'; 
import Footer from './Components/Footer.js';
import { useState } from 'react';
import { BiSolidDonateHeart } from "react-icons/bi";
import { useSpeechSynthesis } from "react-speech-kit";
import VoiceControl from './Components/VoiceControl.js';
import Navbar from './Components/Navbar.js';
import Testimonial from './Components/Testimonial.js';
import DonorForm from './Donor/DonorForm.js';
import { useTranslation } from 'react-i18next';
// import LanguageSwitcher from './LanguageSwitcher';


function Temp() {
  const { speak } = useSpeechSynthesis()
  const [greet, setGreet] = useState(false);
  const text = 'Some dummy text'
  const { t } = useTranslation();
 
  
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
      <Navbar />

      <div className="container-fluid p-0 mb-5">
            <img src={c1} alt="" style={{  objectFit: "fit", width: "100%", height: "550px" }} />
            <div className="overlay">
            <div
              className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
            > 
            
              <div className="container">
              
                <div className="row justify-content-start">
                  <div className="col-10 col-lg-8">
                  <h1 style={{ color: '#ffffff', fontSize: '3rem', textShadow: '2px 2px 4px #000000' }} className="text-white animated slideInDown mb-4">
                   {t('Bridging')}
                   </h1>
                    <p style={{fontSize: '1.3rem', textShadow: '2px 2px 4px #000000' }} className=" fw-medium text-white mb-4 pb-2">
                   {t('platform')}
                    </p>
                    <a
                      href="/login"
                      className="btn btn-primary rounded-pill py-sm-3 px-sm-5 me-3 animated slideInLeft"
                    >
                      {t('Login')}
                    </a>
                    <a
                      href="/register"
                      className="btn btn-dark rounded-pill py-sm-3 px-sm-5 animated slideInRight"
                    >
                    {t('Register')}
                    
                    </a>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
          {/* <div className="owl-carousel-item position-relative">
            <img className="img-fluid" src={c2} alt="" />
            <div
              className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
              style={{ background: "rgba(0, 0, 0, .2)" }}
            >
              <div className="container">
                <div className="row justify-content-start">
                  <div className="col-10 col-lg-8">
                    <h1 className="display-2 text-white animated slideInDown mb-4">
                      Make A Brighter Future For Your Child
                    </h1>
                    <p className="fs-5 fw-medium text-white mb-4 pb-2">
                      Vero elitr justo clita lorem. Ipsum dolor at sed stet sit
                      diam no. Kasd rebum ipsum et diam justo clita et kasd rebum
                      sea elitr.
                    </p>
                    <a
                      href="www.google.com"
                      className="btn btn-primary rounded-pill py-sm-3 px-sm-5 me-3 animated slideInLeft"
                    >
                      Learn More
                    </a>
                    <a
                      href=""
                      className="btn btn-dark rounded-pill py-sm-3 px-sm-5 animated slideInRight"
                    >
                      Our Classes
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
  
      {/* Carousel End */}
      {/* Facilities Start */}
      <div className="container-xxl py-5">
      <div className="container">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: 600 }}
        >
          <h1 className="mb-3">{t("Features")}</h1>
          <p>{t('Features')}
          {t('Empowering')}
          
          </p>
        </div>
        <div className="row g-4">
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="facility-item">
              <div className="facility-icon bg-primary">
                <span className="bg-primary" />
                <i className="bi bi-person fa-3x text-primary" />
                <span className="bg-primary" />
              </div>
              <div className="facility-text bg-primary">
                <h3 className="text-primary mb-3">{t('student')}</h3>
                <p className="mb-0">
                {t('unlock')}
                </p>
                <p> {t('accessible')}  {t('adapt')}
                      {t('service')}
                      {t('peer')}
                      </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="facility-item">
              <div className="facility-icon bg-success">
                <span className="bg-success" />
                <i className="bi bi-building fa-3x text-success" />
                <span className="bg-success" />
              </div>
              <div className="facility-text bg-success">
                <h3 className="text-success mb-3">Organisation</h3>
                <p className="mb-0">
                {t('huddle')}
                  
                 {t('comprehensive')}
                
                 {t('professional')}
                 {t('Collaboration')}
                 {t('data')}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="facility-item">
              <div className="facility-icon bg-warning">
                <span className="bg-warning" />
                <i className="fa fa-chalkboard-teacher fa-3x text-warning" />
                <span className="bg-warning" />
              </div>
              <div className="facility-text bg-warning">
                <h3 className="text-warning mb-3">Teacher's</h3>
                <p className="mb-0">
                {t('jump')}
               
               {t('IEP')}
      
                {t('assistive')}
                
                 {t('tools')}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
            <div className="facility-item">
              <div className="facility-icon bg-info">
                <span className="bg-info" />
                <i className="fa fa-chalkboard-teacher fa-3x text-info" />
                <span className="bg-info" />
              </div>
              <div className="facility-text bg-info">
                <h3 className="text-info mb-3">
                  <p> {t('Ministry')}</p>
                </h3>
                <p className="mb-0">
                {t('For')}
                
                 {t('Schemes')}
                 {t('Certificates')}
                  {t('Education')}
                 {t('Awareness')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      {/* Facilities End */}
      <VoiceControl />
      <div className="text-center mx-auto mb-5 wow fadeInUp">
        <h1 ><p> {t('Toll')}</p></h1>
        <p style={{ fontSize: '22px' }}>
              <i className="fa fa-phone-alt me-3" />
              
              <a href="tel:1800-11-4515">1800-11-4515</a>
              <br></br><p> {t('Loan')}</p>
              </p>
              <p style={{ fontSize: '22px' }}>
                <i className="fa fa-phone-alt me-3" />
                
                <a href="tel:1800-180-5129">1800-180-5129</a>
                <br></br><p> {t('Aids')}</p>
              </p>
              <p style={{ fontSize: '22px' }}>
                <i className="fa fa-phone-alt me-3" />
                
                <a href="tel:1800-572-6422">1800-572-6422</a>
                <br></br><p> {t('National')}</p><br></br><p> {t('Mental')}</p>
              </p>
      </div>
      {/* About Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <h1 className="mb-4">
                <p>  {t('Learn')}</p>
              </h1>
              <p className="mb-4">
              {t('Welcome')}
              </p>
            
              <div className="row g-4 align-items-center">
                <div className="col-sm-6">
                  <a className="btn btn-primary rounded-pill py-3 px-5" href="">
                   <p> {t('Read')}</p>
                  </a>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center">
                    <img
                      className="rounded-circle flex-shrink-0"
                      src={logo1}
                      alt=""
                      style={{ width: 45, height: 45 }}
                    />
                    <div className="ms-3">
                      <h6 className="text-primary mb-1">Phoenixs</h6>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 about-img wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="row">
                <div className="col-12 text-center">
                  <img
                    className="img-fluid w-75 rounded-circle bg-light p-3"
                    src={about1}
                    alt=""
                  />
                </div>
                <div className="col-6 text-start" style={{ marginTop: "-150px" }}>
                  <img
                    className="img-fluid w-100  rounded-circle bg-light p-3"
                    src={about2}
                    alt=""
                  />
                </div>
                <div className="col-6 text-end" style={{ marginTop: "-150px" }}>
                  <img
                    className="img-fluid w-100 h-100 rounded-circle bg-light p-3"
                    src={about3}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
      {/* Call To Action Start */}
      <div className="container-xxl py-5">
      <div className="container">
        <div className="bg-light rounded">
          <div className="row g-0">
            <div
              className="col-lg-6 wow fadeIn"
              data-wow-delay="0.1s"
              style={{ minHeight: 400 }}
            >
              <div className="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100 rounded"
                  src={stugru}
                  alt='student'
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <div className="h-100 d-flex flex-column justify-content-center p-5">
                <h1 className="mb-4"><p> {t('Unlock')}</p></h1>
                <p className="mb-4">
                {t('Makes')}
                </p>
                <a className="btn btn-primary py-3 px-5" href="/login">
                 <p> {t('Let')}</p>
                  <i className="fa fa-arrow-right ms-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>      
      <div className="container-xxl py-5">
      <div className="container">
        <div className="bg-light rounded">
          <div className="row g-0">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <div className="h-100 d-flex flex-column justify-content-center p-5">
                <h1 className="mb-4"><p> {t('Classroom ')}</p> </h1>
                <p className="mb-4">
                {t('Teachers')}
                </p>
                <a className="btn btn-primary py-3 px-5" href="/login">
                  <p> {t('This')}</p> 
                  <i className="fa fa-arrow-right ms-2" />
                </a>
              </div>
            </div>
            <div
              className="col-lg-6 wow fadeIn"
              data-wow-delay="0.1s"
              style={{ minHeight: 400 }}
            >
              <div className="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100 rounded"
                  src={teacher}
                  alt='teacher'
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      

      <div className="container-xxl py-5">
        <div className="container">
          <div className="bg-light rounded">
            <div className="row g-0">
              <div
                className="col-lg-6 wow fadeIn"
                data-wow-delay="0.1s"
                style={{ minHeight: 400 }}
              >
                <div className="position-relative h-100">
                  <img
                    className="position-absolute w-100 h-100 rounded"
                    src={orgcenter}
                    alt='organization'
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                <div className="h-100 d-flex flex-column justify-content-center p-5">
                  <h1 className="mb-4">Organizations</h1>
                  <p className="mb-4">
                  This year, we're on a mission to expand our horizons,
                  and we need YOUR passion and skills to make it happen.
                  Whether you're interested in recruiting staff to enhance our organization,
                  lending a helping hand to support disabled kids in our community,
                  establishing connections with other incredible organizations,
                  or getting notified about the latest schemes and government requests
                    - we have a place for you!
                  </p>
                  <a className="btn btn-primary py-3 px-5" href="/login">
                   <p> {t('Enroll')}</p>
                    <i className="fa fa-arrow-right ms-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Call To Action End */}
      <div className="container-xxl py-5">
      <Testimonial />
      </div>
          <DonorForm/>

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

export default Temp;