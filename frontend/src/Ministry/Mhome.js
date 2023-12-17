import { Modal } from 'antd';
import Link from 'antd/es/typography/Link';
import React, { useState } from 'react';
import Footer from '../Components/Footer';
import '../Styles/Home.css';
import donorpic from '../img/disablePic1.png';
import logo from '../img/logo.png';
import header from '../img/student-home.jpg';
import teacher from '../img/TeacherImg.jpeg'
import orgcenter from '../img/educenter.jpg';
import stugru from '../img/StudentsGrp.jpeg';
import ForumImg1 from '../img/ForumImg.jpg'
import MinistryNavbar from '../Components/MinistryNavbar';


function Mhome() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
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
      <>
    <title>My Table</title>
    <h2>My Table</h2>
    <table>
      <thead>
        <tr>
          <th>S.no</th>
          <th>Mode</th>
          <th>Name</th>
          <th>Locality</th>
          <th>Problem subject</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Student</td>
          <td>John</td>
          <td>Jaipur, Rajasthan</td>
          
          <td>
          <Link type="primary" onClick={showModal}>
          In what ways does technology enhance our learning
      </Link>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Technology enhances learning by providing access to vast information,
        interactive content, personalized learning experiences,and global collaboration.
        It fosters digital skills, inclusivity, and prepares students for the future.</p>
      </Modal>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Organisation</td>
          <td>Jane</td>
          <td>Chennai, TamilNadu</td>
          
          <td>
            <Link type="primary" onClick={showModal}>
            Are progress meetings held to adjust disabled students
      </Link>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Are regular progress meetings conducted to assess the development and
        challenges of disabled students? During these sessions, we analyze the information
         and adjust support strategies to ensure effective and personalized assistance</p>
      </Modal>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>Student</td>
          <td>Doe</td>
          <td>Amaravati, Andhra</td>
          
          <td>
          <Link type="primary" onClick={showModal}>
          Can you help me be more independent
      </Link>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Empower me to navigate my educational journey more independently. Your guidance and understanding of my unique abilities will contribute to fostering self-reliance and achieving academic success</p>
        
      </Modal>
          </td>
        </tr>
        
        
      </tbody>
    </table>
  </>


  {/* Call To Action Start */}
  <div className="container-xxl py-5" style={{ marginTop:'7%' }}>
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
  
{/*Appointment Start */}
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
  const handleModal = (problemSubject) => {
    // Implement your modal logic here using the 'problemSubject'
    
  };
}

export default Mhome;