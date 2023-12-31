import React, { useState } from 'react';
import '../Styles/Home.css';
import c1 from '../img/OrganizationBanner.png';
import stugru from '../img/StudentsRecruit.jpg';
import Footer from '../Components/Footer.js';
import { useSpeechSynthesis } from "react-speech-kit";
import VoiceControl from '../Components/VoiceControl.js';
import Testimonial from '../Components/Testimonial.js';
import OrganizationNavbar from '../Components/OrganizationNavbar.js';
import ForumImg1 from '../img/ForumImg.jpg'
import { MdForum } from "react-icons/md";
import { IconContext } from "react-icons";
import { FaGraduationCap } from "react-icons/fa6";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";
import Query from '../Components/Query.js';
import EducatorImg from '../img/TeacherImg.jpeg';
import DisableFriendly from '../img/DisableFriendly.jpg';



function OHome() {
  const { speak } = useSpeechSynthesis()
  const [greet, setGreet] = useState(false);
  const text = 'Some dummy text'

  const handleClickApplication = () => {
    const forumContainer = document.querySelector('.container-xxl.py-5.Application');
    forumContainer.scrollIntoView({ behavior: 'smooth' });
  };

    const handleClickForum = () => {
      const forumContainer = document.querySelector('.container-xxl.py-5.Forum');
      forumContainer.scrollIntoView({ behavior: 'smooth' });
    };

    const handleClickQuery = () => {
      const forumContainer = document.querySelector('.QueryBox');
      forumContainer.scrollIntoView({ behavior: 'smooth' });
    };

  
  
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
                  Empower Unique Minds. <br></br>
                  Transform challenges into triumphs for Specially-abled children's education.
                   </h1>
                    <p style={{fontSize: '1.3rem', textShadow: '2px 2px 4px #000000' }} className=" fw-medium text-white mb-4 pb-2">
                    Welcome to a platform dedicated to fostering inclusive education. <br></br>
                    Join us in building diverse and empowered learning environments, where the barriers at every step are reduced! 
                    </p>
                    <a
                      onClick={handleClickApplication}
                      className="btn btn-primary rounded-pill py-sm-2 px-sm-4 me-3 animated slideInLeft"
                    >
                      New Student and Teacher Applications
                    </a>
                    <a
                    onClick={handleClickForum}
                      className="btn btn-dark rounded-pill py-sm-2 px-sm-4 animated slideInRight"
                    >
                      Forum & Events
                    </a>
                    <a
                      onClick={handleClickQuery}
                      className="btn btn-dark rounded-pill py-sm-2 px-sm-4 animated slideInRight"
                    >
                      Any Queries?
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
            Enrich with our facilities and make the Training experience more Effective.
          </p>
         {/* Service Start */}
       <div className="container-xxl py-5">
       <div className="container">
       <div className="row g-4">
       
           <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
             <div className="service-item text-center pt-3">
               <div className="p-4">
               <FaGraduationCap size={60} />
                 <h5 className="mb-3">Enroll New Students</h5>
                 <p>
                    List of Childs, not being a part of the mainstream education but Transform their Life!

                 </p>
               </div>
             </div>
           </div>
           <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
             <div className="service-item text-center pt-3">
               <div className="p-4">
               <FaChalkboardTeacher size={60}/>
                 <h5 className="mb-3">Recruit Teacher</h5>
                 <p>
                 Applications of teacher role , Post Vacancy and embark on a journey of academic growth together.
                 </p>
               </div>
             </div>
           </div>
           <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
            <a onClick={handleClickForum}>
             <div className="service-item text-center pt-3">
               <div className="p-4">
              <IconContext.Provider value={{ className: "top-react-icons" }}>
              <MdForum  size={60}/>
       
              </IconContext.Provider>
  
             <h5 className="mb-3">Forum</h5>
             <p>            
              Online spaces for All Organization to discuss and share information on various topics.         </p>
              </div>
              </div>
              </a>
           </div>
           <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s" >
            <a onClick={handleClickQuery}>
             <div className="service-item text-center pt-3">
               <div className="p-4" >
               <FaQuestionCircle size={60}/>
      
                 <h5 className="mb-3">Clearing Queries </h5>
                 <p>
                 Connect with Department of Empowerment of Persons with Disabilities
                  to resolve your queries efficiently.
                 </p>
               </div>
             </div>
             </a>
           </div>
         </div>
       </div>
      </div>
         {/* Service End */}
          
        </div>
      </div>
    </div>
      {/* Facilities End */}
      <VoiceControl />

      {/* Application Student and teacher  start*/}

      <div className="container-xxl py-5 Application">
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
                <h1 className="mb-4"> Enroll New Students
                </h1>
                <p className="mb-4">
                Unlock Potential and Transform Lives. 
                Recruit students who are not currently enrolled in mainstream education and provide 
                them with the opportunity to learn and thrive. Click below to explore a list of willing
                 students ready to embark on their educational journey.
                </p>
                <a className="btn btn-primary py-3 px-5" href="/Organization/Student-Application">
                 Show Me the List of Childs
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
               <h1 className="mb-4">Need of Teachers, Training Support!</h1>
               <p className="mb-4">
               Recruit dedicated teachers who are passionate about making a 
               difference in the lives of specially-abled children and Training them.

               </p>
               <a className="btn btn-primary py-3 px-5" href="/Organization/Teacher-Application">
                   Recruit Teachers!
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
                 src={EducatorImg}
                 style={{ objectFit: "cover" }}
               />
             </div>
           </div>
         </div>
       </div>
     </div>
     </div>
      
      {/* Application Teacher and teacher End */}
     
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
                  src={DisableFriendly}
                  alt='student'
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <div className="h-100 d-flex flex-column justify-content-center p-5">
                <h1 className="mb-4">Make Organization , Friendly to Them!!</h1>
                <p className="mb-4">
                Transforming construction practices for inclusivity. 
                JCreate spaces that accommodate diverse abilities—explore universal design, 
                wheelchair-accessible entrances, adaptive restrooms, and safe, navigable pathways. 
                Embrace inclusive signage, design accessible workspaces, and contribute to a future 
                where every space is welcoming to all.
                </p>
                <a className="btn btn-primary py-3 px-5" href="/login">
                  Tap for Guidelines and Tips
                  <i className="fa fa-arrow-right ms-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
    <div className="container-xxl py-5 Forum">
     <div className="container Forum">
       <div className="bg-light rounded">
         <div className="row g-0">
           <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
             <div className="h-100 d-flex flex-column justify-content-center p-5">
               <h1 className="mb-4">Collaborative Exchange Hub: Connect Edu-Centers!</h1>
               <p className="mb-4">
               Connect with your peers in our Special Organization Forum, a lively space where Experts share insights,
                support each other's Training journeys, and excel together. Let's learn and grow as a community!
               </p>
               <a className="btn btn-primary py-3 px-5" href="">
                   Let's get Connected!
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
                 src={ForumImg1}
                 style={{ objectFit: "cover" }}
               />
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
      <div className="QueryBox">
          <Query />
          </div>
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

export default OHome;