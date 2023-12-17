import React, { useState } from 'react';
import Footer from '../Components/Footer';
import '../Styles/Home.css';
import header from '../img/student-home.jpg';
import TeacherQue from '../img/OrganizationQueries.jpeg';
import Studentque from '../img/StuQueries.jpeg';
import SchemeImg from '../img/SchemeScholor.jpeg';
import EngagementImg from '../img/EngagementImg.jpeg';
import { MdForum } from "react-icons/md";
import { IconContext } from "react-icons";
import { FaGraduationCap } from "react-icons/fa6";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";
import { GiEngagementRing, GiTeacher } from "react-icons/gi";
import { PiStudentDuotone } from "react-icons/pi";
import MinistryNavbar from '../Components/MinistryNavbar';


function Mhome() {


  const handleClickStudentQuery = () => {
    const forumContainer = document.querySelector('.container-xxl.py-5.queries');
    forumContainer.scrollIntoView({ behavior: 'smooth' });
  };

    const handleClickScheme = () => {
      const forumContainer = document.querySelector('.container-xxl.py-5.scholor');
      forumContainer.scrollIntoView({ behavior: 'smooth' });
    };

    const handleClickEngagement = () => {
      const forumContainer = document.querySelector('.container.Data');
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
     <MinistryNavbar />

      <div className="container-fluid p-0 mb-5">
            <img src={header} alt="" style={{  objectFit: "cover", width: "100%", height: "550px" }} />
            <div className="overlay">
            <div
              className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
            > 
            
              <div className="container">
              
                <div className="row justify-content-start">
                  <div className="col-10 col-lg-8">
                  <h1 style={{ color: '#ffffff', fontSize: '3rem', textShadow: '2px 2px 4px #000000' }} className="text-white animated slideInDown mb-4">
                  Ministry
                   </h1>
              
              
                    <p style={{fontSize: '1.3rem', textShadow: '2px 2px 4px #000000' }} className=" fw-medium text-white mb-4 pb-2">
                    Promoting inclusive education for differently abled children is a priority for the ministry, emphasizing accessible infrastructure, adaptive curricula, and specialized support services. By prioritizing equality in education, 
                    the ministry aims to create an inclusive and compassionate society that caters to the diverse needs of every child.
                    </p>
                    <a
                      onClick={handleClickStudentQuery}
                      className="btn btn-primary rounded-pill py-sm-3 px-sm-5 me-3 animated slideInLeft"
                    >
                    Queries
                    </a>
                    <a
                      onClick={handleClickScheme}
                      className="btn btn-dark rounded-pill py-sm-3 px-sm-5 animated slideInRight"
                    >
                    Schemes and Scholarship
                    </a>
                    <a
                      onClick={handleClickEngagement}
                      className="btn btn-dark rounded-pill py-sm-3 px-sm-5 animated slideInRight"
                    >
                    Engagement Data
                    </a>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        
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
       <div className="container-xxl py-5 ">
       <div className="container">
       <div className="row g-4">
       
           <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
             <div className="service-item text-center pt-3">
               <div className="p-4">
               <FaGraduationCap size={60} />
                 <h5 className="mb-3">Scheme and Scholarship</h5>
                 <p>
                  Disabled students receive scholarships from government, nonprofits, universities, and corporations.

                 </p>
               </div>
             </div>
           </div>
           <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
             <div className="service-item text-center pt-3">
               <div className="p-4">
                 <GiTeacher  size={60}/>
                 <h5 className="mb-3">Organization Queries</h5>
                 <p>Organization submit questions on the website, 
                    accessible to ministry officials for
                    direct communication and efficient query resolution.
                 </p>
               </div>
             </div>
           </div>
           <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
            <a onClick={handleClickStudentQuery}>
             <div className="service-item text-center pt-3">
               <div className="p-4">
              <IconContext.Provider value={{ className: "top-react-icons" }}>
              <FaChalkboardTeacher    size={60}/>
       
              </IconContext.Provider>
  
             <h5 className="mb-3">Students Queries</h5>
             <p>
             Our team promptly addresses student queries,
             fostering confidence through streamlined communication channels and academic support.
            </p>
              </div>
              </div>
              </a>
           </div>
           <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s" >
            <a onClick={handleClickEngagement}>
             <div className="service-item text-center pt-3">
               <div className="p-4" >
               <FaQuestionCircle size={60}/>
      
                 <h5 className="mb-3">Engagement Numbers</h5>
                 <p>
                 Explore our Enrollment Metrics to gain valuable insights into the vibrant
                 community shaping our inclusive education ecosystem. 

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
      {/* Facilities End */}

       {/* Call To Action Start */}
  <div className="container-xxl py-5 queries">
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
              src={TeacherQue}
              alt='OrgQue'
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
          <div className="h-100 d-flex flex-column justify-content-center p-5">
            <h1 className="mb-4">Organization Queries</h1>
            <p className="mb-4">
            Organization can now fire off their questions on our website. 
            Ministry folks with the access can jump in, check out what's cooking,
             and handle those queries directly. Easy peasy communication for everyone.
            </p>
            <a className="btn btn-primary py-3 px-5" href="/Ministry/Organization-Queries">
              Queries From Organization
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
           <h1 className="mb-4">Students Queries</h1>
           <p className="mb-4">
           Our team is diligently addressing student queries, providing timely responses
          to academic concerns and coursework inquiries. Through streamlined communication
          channels, we strive to empower students, ensuring a supportive and confident academic journey.
           </p>
           <a className="btn btn-primary py-3 px-5" href="/Ministry/Student-Queries">
            Queries From Students
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
             src={Studentque}
             style={{ objectFit: "cover" }}
           />
         </div>
       </div>
     </div>
   </div>
 </div>
 </div>
  
 <div className="container-xxl py-5 scholor">
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
              src={SchemeImg}
              alt='OrgQue'
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
          <div className="h-100 d-flex flex-column justify-content-center p-5">
            <h1 className="mb-4">Schemes and Scholarships</h1>
            <p className="mb-4">
            Disabled students have access to scholarships from governments, nonprofits like the National Federation of the Blind, and universities with dedicated disability resource centers. 
            Corporate social responsibility initiatives also contribute, providing financial support in specific fields. Tailored scholarships for different disabilities address unique challenges, 
            fostering inclusivity in education.
            </p>
            <a className="btn btn-primary py-3 px-5" href="/login">
              Publish Scheme and Scholarship
              <i className="fa fa-arrow-right ms-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> 

<div className="container-xxl py-5">
 <div className="container Data">
   <div className="bg-light rounded">
     <div className="row g-0">
       <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
         <div className="h-100 d-flex flex-column justify-content-center p-5">
           <h1 className="mb-4">Engagement Numbers</h1>
           <p className="mb-4">
           Discover the collective impact of students, teachers, and organizations who have joined our platform.
           </p>
           <a className="btn btn-primary py-3 px-5" href="">
           Check For Enrollment
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
             src={EngagementImg}
             style={{ objectFit: "cover" }}
           />
         </div>
       </div>
     </div>
   </div>
 </div>
 </div>
 
  {/* Call To Action End */}
  
  
          
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
  const handleModal = (problemSubject) => {
    // Implement your modal logic here using the 'problemSubject'
    
  };
}

export default Mhome;