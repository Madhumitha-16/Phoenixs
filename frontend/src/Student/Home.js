import React from 'react';
import '../Styles/Home.css';
import c1 from '../img/StuHeader.jpeg';
import scholor from '../img/ScholorImg.jpg'
import ForumImg1 from '../img/ForumImg.jpg'
import donorpic from '../img/disablePic1.png';
import Footer from '../Components/Footer';
import EducatorImg from '../img/EducatorImg1.jpg';
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
import StudentNavbar from '../Components/StudentNavbar';
import Testimonial from '../Components/Testimonial';
import Query from '../Components/Query';
import VoiceControl from '../Components/VoiceControl';


function Home() {
  const handleClickForum = () => {
    const forumContainer = document.querySelector('.container-xxl.py-5.Forum');
    forumContainer.scrollIntoView({ behavior: 'smooth' });
  };
  const handleClickScheme = () => {
    const forumContainer = document.querySelector('.container-xxl.py-5.ss');
    forumContainer.scrollIntoView({ behavior: 'smooth' });
  };
  const handleClickSchool = () => {
    const forumContainer = document.querySelector('.container-xxl.py-5.school');
    forumContainer.scrollIntoView({ behavior: 'smooth' });
  };
  const handleClickTeacher = () => {
    const forumContainer = document.querySelector('.container-xxl.py-5.Teacher');
    forumContainer.scrollIntoView({ behavior: 'smooth' });
  };
  const handleClickQuery = () => {
    const forumContainer = document.querySelector('.container-xxl.py-5.query');
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
       <StudentNavbar />
      

          <div className="container-fluid p-0 mb-5">
            <img src={c1} alt="" style={{  objectFit: "cover", width: "100%", height: "550px" }} />
            <div className="overlay">
            <div
              className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
              style={{ top: '-20px' }}
            > 
            
              <div className="container">
              
                <div className="row justify-content-end">
                  <div className="col-10 col-rg-8 text-end"> {/* Add 'text-end' class */}
                    <h1 style={{ color: '#ffffff', fontSize: '3.25rem', textShadow: '2px 2px 4px #000000', }} className="text-white animated slideInDown mb-2">
                      You are capable of Amazing things !
                    </h1>
                    <p style={{fontSize: '1.5rem', textShadow: '2px 2px 4px #000000' }} className=" fw-medium text-white mb-0 pb-0">
                      Success begins with a single determined step, & We are here to help you take it.
                      Embrace the challenges, celebrate the victories, and unfold the incredible potential.
                    </p>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
         <VoiceControl />
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
           <div className="container-xxl animated shake py-5">
          <div className="container animated shake">
            <div className="row g-4">
              <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                <a onClick={handleClickSchool}>
                  <div className="service-item text-center pt-3">
                    <div className="p-4">
                      <FaSchool size={60} />
                      <h5 className="mb-3">School</h5>
                      <p>
                        Embrace the opportunity to educate yourself and graduate with grace
                      </p>
                    </div>
                  </div>
                </a>
             
          </div>
               <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
               <a onClick={handleClickScheme}>
               <div className="service-item text-center pt-3">
                 <div className="p-4">
                 <FaGraduationCap size={60} />
                   <h5 className="mb-3">Schemes and Scholarship</h5>
                   <p>
                    Getting It in Digitalized and Friendly Way
       
                   </p>
                 </div>
               </div>
               </a>
             </div>
              
               <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
              <a onClick={() => { window.location.href = "/student/AHome"; }}>
                 <div className="service-item text-center pt-3">
                   <div className="p-4">
                   <MdSportsEsports size={60} />
                     <h5 className="mb-3">Activity</h5>
                     <p>
                     Inclusive activities designed for disabled kids to have fun and thrive
         
                     </p>
                   </div>
                 </div>
                 </a>
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
             <a onClick={handleClickForum}>
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
               </a>
             </div>
             <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
             <a onClick={() => { window.location.href = "/Student/Ar"; }}>
             <div className="service-item text-center pt-3">
               <div className="p-4">
               <MdOutlineMenuBook size={60} />
                 <h5 className="mb-3">Augmented Reality</h5>
                 <p>
                 Bring everything to the Place where you are and learn with fun !
                 </p>
               </div>
             </div>
             </a>
           </div> 
             <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
             <a onClick={handleClickTeacher}>
               <div className="service-item text-center pt-3">
                 <div className="p-4">
                 <FaChalkboardTeacher size={60}/>
                   <h5 className="mb-3">Connect with the Teacher</h5>
                   <p>
                   connect with the teacher and embark on a journey of academic growth together
                   </p>
                 </div>
               </div>
               </a>
             </div>
             <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
             <a onClick={handleClickQuery}>
               <div className="service-item text-center pt-3">
                 <div className="p-4">
                 <FaQuestionCircle size={60}/>
        
                   <h5 className="mb-3">Clearing Queries </h5>
                   <p>
                   Connect with our organization's expert team to ask and resolve your queries efficiently
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
      
     {/* Call To Action Start */}
     <div className="container-xxl py-5 school">
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
               <a className="btn btn-primary py-3 px-5" href="/ApplyToEducation">
               Unlock Opportunities! Enroll here!
                 <i className="fa fa-arrow-right ms-2" />
               </a>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>


     
     <div className="container-xxl py-5 ss">
     <div className="container">
       <div className="bg-light rounded">
         <div className="row g-0">
           <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
             <div className="h-100 d-flex flex-column justify-content-center p-5">
               <h1 className="mb-4">Explore Scholorships and Schemes!</h1>
               <p className="mb-4">
               Dive in to explore exclusive schemes and scholarships designed for exceptional individuals—check out the possibilities waiting for you!
               </p>
               <a className="btn btn-primary py-3 px-5" href="/Student/Schemes-and-scholoship">
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
                 src={scholor}
                 style={{ objectFit: "cover" }}
               />
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
     

     <div className="container-xxl py-5 Teacher">
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
                   src={EducatorImg}
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
                 <a className="btn btn-primary py-3 px-5" href="/Videochat">
                 Connect with Teacher/Trainee
                   <i className="fa fa-arrow-right ms-2" />
                 </a>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
     <div className="container-xxl py-5 Forum">
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
               <a className="btn btn-primary py-3 px-5" href="/forum">
                   Let's Engage with others!
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
   <div className="container-xxl py-5">
      <Testimonial />
      </div>
      {/* Appointment Start */}
      <div className="container-xxl py-5 query">
      <Query />
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