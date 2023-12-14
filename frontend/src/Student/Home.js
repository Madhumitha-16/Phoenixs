import React from 'react';
import '../Styles/Home.css';
import logo from '../img/logo.png';
import c1 from '../img/StudentHeaderImg.jpeg';
import teacher from '../img/call-to-action.jpg'
import donorpic from '../img/disablePic1.png';
import cls1 from '../img/classes-1.jpg';
import cls2 from '../img/classes-2.jpg';
import cls3 from '../img/classes-3.jpg';
import cls4 from '../img/classes-4.jpg';
import Footer from '../Components/Footer';
import header from '../img/student-home.jpg'; 
import orgcenter from '../img/educenter.jpg';
import stugru from '../img/StudentsGrp.jpeg'
import { MdSportsEsports } from "react-icons/md";
import { FaSchool } from "react-icons/fa6";
import { MdOutlineMenuBook } from "react-icons/md";
import { BiSolidDonateHeart } from "react-icons/bi";
import { MdForum } from "react-icons/md";
import { IconContext } from "react-icons";
import { FaGraduationCap } from "react-icons/fa6";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";


function Home() {
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
      <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0 ">
        <a href="index.html" className="navbar-brand">
          <h1 className="m-0 text-primary ">
            <img src={logo} alt=''  width={100} />
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
            <a href="index.html" className="nav-item nav-link active">
              Home
            </a>
            <a href="about.html" className="nav-item nav-link">
              About Us
            </a>
            <a href="classes.html" className="nav-item nav-link">
              Classes
            </a>
            <div className="nav-item dropdown">
              <a
                href="www.google.com"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Pages
              </a>
              <div className="dropdown-menu rounded-0 rounded-bottom border-0 shadow-sm m-0">
                <a href="facility.html" className="dropdown-item">
                  School Facilities
                </a>
                <a href="team.html" className="dropdown-item">
                  Popular Teachers
                </a>
                <a href="call-to-action.html" className="dropdown-item">
                  Become A Teachers
                </a>
                <a href="appointment.html" className="dropdown-item">
                  Make Appointment
                </a>
                <a href="testimonial.html" className="dropdown-item">
                  Testimonial
                </a>
                <a href="404.html" className="dropdown-item">
                  404 Error
                </a>
              </div>
            </div>
            <a href="contact.html" className="nav-item nav-link">
              Contact Us
            </a>
          </div>
          <a
            href="www.google.com"
            className="btn btn-primary rounded-pill px-3 d-none d-lg-block"
          >
            Join Us
            <i className="fa fa-arrow-right ms-3" />
          </a>
        </div>
      </nav>

          <div className="container-fluid p-0 mb-5">
            <img src={header} alt="" style={{  objectFit: "cover", width: "100%", height: "650px" }} />
            <div className="overlay">
            <div
              className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
            > 
            
              <div className="container">
              
                <div className="row justify-content-start">
                  <div className="col-10 col-lg-8">
                  <h1 style={{ color: '#ffffff', fontSize: '3rem', textShadow: '2px 2px 4px #000000' }} className="text-white animated slideInDown mb-4">
                  You are capable of amazing things
                   </h1>
              
              
                    <p style={{fontSize: '1.3rem', textShadow: '2px 2px 4px #000000' }} className=" fw-medium text-white mb-4 pb-2">
                    Success begins with a single determined step, & We are here to help you take it.
                    Embrace the challenges, celebrate the victories, and unfold the incredible potential within you with Phoenixs.
                    </p>
                    <a
                      href="www.google.com"
                      className="btn btn-primary rounded-pill py-sm-3 px-sm-5 me-3 animated slideInLeft"
                    >
                    Jump to Courses
                    </a>
                    <a
                      href="www.google.com"
                      className="btn btn-dark rounded-pill py-sm-3 px-sm-5 animated slideInRight"
                    >
                    Discover other features
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
            
          >
            <h1 className="mb-3">Facilities For You!!</h1>
            <p>
              Enrich with our facilities and make your learning experience more fun and interactive.
            </p>
           {/* Service Start */}
           <div className="container-xxl py-5">
           <div className="container">
             <div className="row g-4">
               <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                 <div className="service-item text-center pt-3">
                   <div className="p-4">
                   <FaSchool size={60}/>
                     <h5 className="mb-3">School</h5>
                     <p>
                     Embrace the opportunity to educate yourself and graduate with grace
                     </p>
                   </div>
                 </div>
               </div>
               <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                 <div className="service-item text-center pt-3">
                   <div className="p-4">
                   <MdOutlineMenuBook size={60} />
                     <h5 className="mb-3">Course</h5>
                     <p>
                     Enroll now for courses and gain valuable new skills today
                     </p>
                   </div>
                 </div>
               </div>
               <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                 <div className="service-item text-center pt-3">
                   <div className="p-4">
                   <MdSportsEsports size={60} />
                     <h5 className="mb-3">Activity</h5>
                     <p>
                     Inclusive activities designed for disabled kids to have fun and thrive
         
                     </p>
                   </div>
                 </div>
               </div>
               <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                 <div className="service-item text-center pt-3">
                   <div className="p-4">
                   <BiSolidDonateHeart size={60} />
                     <h5 className="mb-3">Donation</h5>
                     <p>
                     Give a hand to disabled kids, support their journey with your kindness
                     </p>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
         <div className="container-xxl py-5">
         <div className="container">
           <div className="row g-4">
             <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
               <div className="service-item text-center pt-3">
                 <div className="p-4">
                 <IconContext.Provider value={{ className: "top-react-icons" }}>
            <MdForum  size={60}/>
             
          </IconContext.Provider>
        
                   <h5 className="mb-3">Forum</h5>
                   <p>            
        Forums are online spaces where people discuss and share information on various topics          </p>
                 </div>
               </div>
             </div>
             <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
               <div className="service-item text-center pt-3">
                 <div className="p-4">
                 <FaGraduationCap size={60} />
                   <h5 className="mb-3">Schemes and Scholarship</h5>
                   <p>
                   
        Schemes and scholarships empower academic potential by overcoming financial barriers.
                   </p>
                 </div>
               </div>
             </div>
             <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
               <div className="service-item text-center pt-3">
                 <div className="p-4">
                 <FaChalkboardTeacher size={60}/>
                   <h5 className="mb-3">Connect with the Teacher</h5>
                   <p>
                   connect with the teacher, unlock knowledge, and embark on a journey of academic growth together
                   </p>
                 </div>
               </div>
             </div>
             <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
               <div className="service-item text-center pt-3">
                 <div className="p-4">
                 <FaQuestionCircle size={60}/>
        
                   <h5 className="mb-3">Clearing Queries </h5>
                   <p>
                   Connect with our organization's expert team to ask and resolve your queries efficiently
                   </p>
                 </div>
               </div>
             </div>
           </div>
         </div>
        </div>
           {/* Service End */}
            
          </div>
        </div>
      </div>
      {/* Facilities End */}
      
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
                 style={{ objectFit: "cover" }}
               />
             </div>
           </div>
           <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
             <div className="h-100 d-flex flex-column justify-content-center p-5">
               <h1 className="mb-4">Enroll Now for Diverse Education in Schools and Colleges!</h1>
               <p className="mb-4">
               Explore a realm of diverse learning opportunities for all abilities!
                Enroll yourself in schools and colleges through our inclusive education platform,
                where education aligns with your unique needs.
               </p>
               <a className="btn btn-primary py-3 px-5" href="">
               Unlock Opportunities! Enroll here!
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
               <h1 className="mb-4">Explore Scholorships and Schemes!</h1>
               <p className="mb-4">
               Dive in to explore exclusive schemes and scholarships designed for exceptional individuals—check out the possibilities waiting for you!
               </p>
               <a className="btn btn-primary py-3 px-5" href="">
               Discover now!!
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
                   style={{ objectFit: "cover" }}
                 />
               </div>
             </div>
             <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
               <div className="h-100 d-flex flex-column justify-content-center p-5">
                 <h1 className="mb-4">Connect with Educators!</h1>
                 <p className="mb-4">
                 Engage with Teachers! Reach out, excel, and turn learning into a lively conversation. 
                 Your academic journey is now more personal and interactive!
                 </p>
                 <a className="btn btn-primary py-3 px-5" href="">
                 Learn With Us!
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
               <h1 className="mb-4">Peer-Powered Learning</h1>
               <p className="mb-4">
               Connect with your peers in our Special Student Forum, a lively space where students share insights,
                support each other's educational journeys, and excel together. Let's learn and grow as a community!
               </p>
               <a className="btn btn-primary py-3 px-5" href="">
                   Let's start!
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
                 style={{ objectFit: "cover" }}
               />
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
     
     {/* Call To Action End */}
      
      {/* Classes Start */}
      {/* <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 600 }}
          >
            <h1 className="mb-3">School Classes</h1>
            <p>
              Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore
              lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum
              vero dolor duo.
            </p>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="classes-item">
                <div className="bg-light rounded-circle w-75 mx-auto p-3">
                  <img
                    className="img-fluid rounded-circle"
                    src={cls1}
                    alt=""
                  />
                </div>
                <div className="bg-light rounded p-4 pt-5 mt-n5">
                  <a className="d-block text-center h3 mt-3 mb-4" href="">
                    Art &amp; Drawing
                  </a>
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <div className="d-flex align-items-center">
                      <img
                        className="rounded-circle flex-shrink-0"
                        src={cls2}
                        alt=""
                        style={{ width: 45, height: 45 }}
                      />
                      <div className="ms-3">
                        <h6 className="text-primary mb-1">Jhon Doe</h6>
                        <small>Teacher</small>
                      </div>
                    </div>
                    <span
                      className="bg-primary text-white rounded-pill py-2 px-3 custom-primary"
                      href=""
                    >
                      $99
                    </span>
                  </div>
                  <div className="row g-1">
                    <div className="col-4">
                      <div className="border-top border-3 border-primary pt-2">
                        <h6 className="text-primary mb-1">Age:</h6>
                        <small>3-5 Years</small>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="border-top border-3 border-success pt-2">
                        <h6 className="text-success mb-1">Time:</h6>
                        <small>9-10 AM</small>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="border-top border-3 border-warning pt-2">
                        <h6 className="text-warning mb-1">Capacity:</h6>
                        <small>30 Kids</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="classes-item">
                <div className="bg-light rounded-circle w-75 mx-auto p-3">
                  <img
                    className="img-fluid rounded-circle"
                    src={cls3}
                    alt=""
                  />
                </div>
                <div className="bg-light rounded p-4 pt-5 mt-n5">
                  <a className="d-block text-center h3 mt-3 mb-4" href="">
                    Color Management
                  </a>
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <div className="d-flex align-items-center">
                      <img
                        className="rounded-circle flex-shrink-0"
                        src="img/user.jpg"
                        alt=""
                        style={{ width: 45, height: 45 }}
                      />
                      <div className="ms-3">
                        <h6 className="text-primary mb-1">Jhon Doe</h6>
                        <small>Teacher</small>
                      </div>
                    </div>
                    <span
                      className="bg-primary text-white rounded-pill py-2 px-3 custom-primary"
                      href=""
                    >
                      $99
                    </span>
                  </div>
                  <div className="row g-1">
                    <div className="col-4">
                      <div className="border-top border-3 border-primary pt-2">
                        <h6 className="text-primary mb-1">Age:</h6>
                        <small>3-5 Years</small>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="border-top border-3 border-success pt-2">
                        <h6 className="text-success mb-1">Time:</h6>
                        <small>9-10 AM</small>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="border-top border-3 border-warning pt-2">
                        <h6 className="text-warning mb-1">Capacity:</h6>
                        <small>30 Kids</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="classes-item">
                <div className="bg-light rounded-circle w-75 mx-auto p-3">
                  <img
                    className="img-fluid rounded-circle"
                    src={cls4}
                    alt=""
                  />
                </div>
                <div className="bg-light rounded p-4 pt-5 mt-n5">
                  <a className="d-block text-center h3 mt-3 mb-4" href="">
                    Athletic &amp; Dance
                  </a>
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <div className="d-flex align-items-center">
                      <img
                        className="rounded-circle flex-shrink-0"
                        src="img/user.jpg"
                        alt=""
                        style={{ width: 45, height: 45 }}
                      />
                      <div className="ms-3">
                        <h6 className="text-primary mb-1">Jhon Doe</h6>
                        <small>Teacher</small>
                      </div>
                    </div>
                    <span
                      className="bg-primary text-white rounded-pill py-2 px-3 custom-primary"
                      href=""
                    >
                      $99
                    </span>
                  </div>
                  <div className="row g-1">
                    <div className="col-4">
                      <div className="border-top border-3 border-primary pt-2">
                        <h6 className="text-primary mb-1">Age:</h6>
                        <small>3-5 Years</small>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="border-top border-3 border-success pt-2">
                        <h6 className="text-success mb-1">Time:</h6>
                        <small>9-10 AM</small>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="border-top border-3 border-warning pt-2">
                        <h6 className="text-warning mb-1">Capacity:</h6>
                        <small>30 Kids</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="classes-item">
                <div className="bg-light rounded-circle w-75 mx-auto p-3">
                  <img
                    className="img-fluid rounded-circle"
                    src={cls2}
                    alt=""
                  />
                </div>
                <div className="bg-light rounded p-4 pt-5 mt-n5">
                  <a className="d-block text-center h3 mt-3 mb-4" href="">
                    Language &amp; Speaking
                  </a>
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <div className="d-flex align-items-center">
                      <img
                        className="rounded-circle flex-shrink-0"
                        src="img/user.jpg"
                        alt=""
                        style={{ width: 45, height: 45 }}
                      />
                      <div className="ms-3">
                        <h6 className="text-primary mb-1">Jhon Doe</h6>
                        <small>Teacher</small>
                      </div>
                    </div>
                    <span
                      className="bg-primary text-white rounded-pill py-2 px-3 custom-primary"
                      href=""
                    >
                      $99
                    </span>
                  </div>
                  <div className="row g-1">
                    <div className="col-4">
                      <div className="border-top border-3 border-primary pt-2">
                        <h6 className="text-primary mb-1">Age:</h6>
                        <small>3-5 Years</small>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="border-top border-3 border-success pt-2">
                        <h6 className="text-success mb-1">Time:</h6>
                        <small>9-10 AM</small>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="border-top border-3 border-warning pt-2">
                        <h6 className="text-warning mb-1">Capacity:</h6>
                        <small>30 Kids</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="classes-item">
                <div className="bg-light rounded-circle w-75 mx-auto p-3">
                  <img
                    className="img-fluid rounded-circle"
                    src={cls4}
                    alt=""
                  />
                </div>
                <div className="bg-light rounded p-4 pt-5 mt-n5">
                  <a className="d-block text-center h3 mt-3 mb-4" href="">
                    Religion &amp; History
                  </a>
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <div className="d-flex align-items-center">
                      <img
                        className="rounded-circle flex-shrink-0"
                        src="img/user.jpg"
                        alt=""
                        style={{ width: 45, height: 45 }}
                      />
                      <div className="ms-3">
                        <h6 className="text-primary mb-1">Jhon Doe</h6>
                        <small>Teacher</small>
                      </div>
                    </div>
                    <span
                      className="bg-primary text-white rounded-pill py-2 px-3 custom-primary"
                      href=""
                    >
                      $99
                    </span>
                  </div>
                  <div className="row g-1">
                    <div className="col-4">
                      <div className="border-top border-3 border-primary pt-2">
                        <h6 className="text-primary mb-1">Age:</h6>
                        <small>3-5 Years</small>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="border-top border-3 border-success pt-2">
                        <h6 className="text-success mb-1">Time:</h6>
                        <small>9-10 AM</small>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="border-top border-3 border-warning pt-2">
                        <h6 className="text-warning mb-1">Capacity:</h6>
                        <small>30 Kids</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="classes-item">
                <div className="bg-light rounded-circle w-75 mx-auto p-3">
                  <img
                    className="img-fluid rounded-circle"
                    src={cls4}
                    alt=""
                  />
                </div>
                <div className="bg-light rounded p-4 pt-5 mt-n5">
                  <a className="d-block text-center h3 mt-3 mb-4" href="">
                    General Knowledge
                  </a>
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <div className="d-flex align-items-center">
                      <img
                        className="rounded-circle flex-shrink-0"
                        src="img/user.jpg"
                        alt=""
                        style={{ width: 45, height: 45 }}
                      />
                      <div className="ms-3">
                        <h6 className="text-primary mb-1">Jhon Doe</h6>
                        <small>Teacher</small>
                      </div>
                    </div>
                    <span
                      className="bg-primary text-white rounded-pill py-2 px-3 custom-primary"
                      href=""
                    >
                      $99
                    </span>
                  </div>
                  <div className="row g-1">
                    <div className="col-4">
                      <div className="border-top border-3 border-primary pt-2">
                        <h6 className="text-primary mb-1">Age:</h6>
                        <small>3-5 Years</small>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="border-top border-3 border-success pt-2">
                        <h6 className="text-success mb-1">Time:</h6>
                        <small>9-10 AM</small>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="border-top border-3 border-warning pt-2">
                        <h6 className="text-warning mb-1">Capacity:</h6>
                        <small>30 Kids</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* Classes End */}
      {/* Appointment Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="bg-light rounded">
            <div className="row g-0">
              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                <div className="h-100 d-flex flex-column justify-content-center p-5">
                  <h1 className="mb-4">Share Your Queries </h1>
                  <form>
                    <div className="row g-3">
                      <div className="col-sm-12">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control border-0"
                            id="gname"
                            placeholder="Gurdian Name"
                          />
                          <label htmlFor="gname">Problem </label>
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
                          <label htmlFor="message">Description of the problem</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <button
                          className="btn btn-primary w-100 py-3"
                          type="submit"
                        >
                          Submit to Resolve!
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

export default Home;