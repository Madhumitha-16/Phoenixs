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



function Temp() {
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
      <Navbar />

      <div className="container-fluid p-0 mb-5">
            <img src={c1} alt="" style={{  objectFit: "fit", width: "100%", height: "750px" }} />
            <div className="overlay">
            <div
              className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
            > 
            
              <div className="container">
              
                <div className="row justify-content-start">
                  <div className="col-10 col-lg-8">
                  <h1 style={{ color: '#ffffff', fontSize: '3rem', textShadow: '2px 2px 4px #000000' }} className="text-white animated slideInDown mb-4">
                  Bridging Gaps, Fostering Dreams:<br></br> A Journey to Inclusive Education
                   </h1>
                    <p style={{fontSize: '1.3rem', textShadow: '2px 2px 4px #000000' }} className=" fw-medium text-white mb-4 pb-2">
                    This platform unites students, institutions, teachers, and government ministries, 
                    an Edu-ecosystem that empowers, informs, and transforms lives.
                    </p>
                    <a
                      href="/login"
                      className="btn btn-primary rounded-pill py-sm-3 px-sm-5 me-3 animated slideInLeft"
                    >
                      Login
                    </a>
                    <a
                      href="/register"
                      className="btn btn-dark rounded-pill py-sm-3 px-sm-5 animated slideInRight"
                    >
                      New? Register Now!
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
          <h1 className="mb-3">Explore Our Features!</h1>
          <p>
          Empowering Students!!
         Inclusive Education is Here.Happy Learning!!
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
                <h3 className="text-primary mb-3">Student's</h3>
                <p className="mb-0">
                Unlock your learning journey!</p>
                <p></p>
                <p> Accessible course materials </p><p>Adaptive learning tools</p>
                     <p>Support services</p>
                      <p>Peer support</p>
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
                  Decrease the Huddles and Overcome It!</p>
                  <p></p>
                <p>Comprehensive Curriculum</p>
                
                <p>Professional Development</p>
                <p>Collaboration and Advocacy</p>
                <p>Data and Reporting</p>
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
                Jump In ! To Train and help Our Special Kids</p>
                <p></p>
               <p>Individualized Education Plans (IEPs)</p>
      
                <p>Assistive technology resources
                </p>
                <p>Collaboration tools
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
                <h3 className="text-info mb-3">Ministry</h3>
                <p className="mb-0">
                  For the People!
                </p>
                <p></p>
                <p>Schemes and Scholarship</p>
                <p>Certificates and Services</p>
                <p>Education and Employment Resources</p>
                <p>Awareness Campaigns</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      {/* Facilities End */}
      <VoiceControl />
      {/* About Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <h1 className="mb-4">
                Learn More About Our Work And Activities Here!
              </h1>
              <p className="mb-4">
              Welcome to our transformative platform dedicated to inclusive education.
              At the heart of our mission is the empowerment of special children with disabilities, 
              offering a seamless registration process and access to mainstream education. We connect 
              students with local education centers and enrich their learning experience through a 
              gamified educational platform. Educational institutions benefit from proactive notifications, 
              keeping them informed about potential enrollees and government schemes. For teachers, 
              we provide not just job opportunities but a collaborative space to share resources 
              and enhance their impact. Government ministries find a secure gateway to manage requests,
               upload schemes, and contribute to the collective advancement of inclusive education. 
               Join us in building a future where every child, regardless of ability, has access 
               to quality education and limitless possibilities.
              </p>
            
              <div className="row g-4 align-items-center">
                <div className="col-sm-6">
                  <a className="btn btn-primary rounded-pill py-3 px-5" href="">
                    Read More
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
                      <small>IT, RMKEC</small>
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
                <h1 className="mb-4">Unlock Learning!!</h1>
                <p className="mb-4">
                Makes learning easy by giving students personal profiles, real-time updates, and clear communication for parents. It's secure and lets everyone work together with shared resources, 
          online meetings, and a helpful library. You can give feedback to make it better and ensure a complete learning experience for students and their families.
                </p>
                <a className="btn btn-primary py-3 px-5" href="/login">
                  Let's Get Educated ! Enroll here
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
                <h1 className="mb-4">Classroom Navigator </h1>
                <p className="mb-4">
                Teachers play a crucial role in the holistic development of disabled individuals by fostering inclusive education, providing tailored support, and nurturing an environment that promotes their unique strengths.
                These professionals employ personalized strategies, create inclusive environments, and advocate for the unique needs of disabled learners. Through their guidance and encouragement, disabled individuals can overcome obstacles, gain confidence, and actively engage in society, promoting inclusivity and diversity.
                </p>
                <a className="btn btn-primary py-3 px-5" href="/login">
                  Register As a Teacher Now 
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
                    Enroll Your Edu-Center!
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
      {/* Appointment Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="bg-light rounded">
            <div className="row g-0">
              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                <div className="h-100 d-flex flex-column justify-content-center p-5">
                  <h1 className="mb-4">Open Hearts, Open Pockets: Donate Now <BiSolidDonateHeart /> </h1>
                  <form>
                    <div className="row g-3">
                      <div className="col-sm-6">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control border-0"
                            id="gname"
                            placeholder="Gurdian Name"
                          />
                          <label htmlFor="gname">Your Name</label>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-floating">
                          <input
                            type="email"
                            className="form-control border-0"
                            id="gmail"
                            placeholder="Gurdian Email"
                          />
                          <label htmlFor="gmail">Email</label>
                        </div>
                      </div>
                     
                      <div className="col-12">
                        <div className="form-floating">
                          <textarea
                            className="form-control border-0"
                            placeholder="Leave a message here"
                            id="message"
                            style={{ height: 100 }}
                            defaultValue={""}
                          />
                          <label htmlFor="message">Message</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <button
                          className="btn btn-primary w-100 py-3"
                          type="submit"
                        >
                          Click Here for Helping!
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div
                className="col-lg-6 wow fadeIn"
                data-wow-delay="0.5s"
                style={{ minHeight: 400 }}
              >
                <div className="position-relative h-100">
                  <img
                  alt='donor'
                    className="position-absolute w-100 h-100 rounded"
                    src={donorpic}
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Appointment End */}

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