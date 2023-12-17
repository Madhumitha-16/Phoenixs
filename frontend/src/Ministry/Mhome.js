import { Modal } from 'antd';
import Link from 'antd/es/typography/Link';
import React, { useState } from 'react';
import Footer from '../Components/Footer';
import '../Styles/Home.css';
import donorpic from '../img/disablePic1.png';
import logo from '../img/logo.png';
import header from '../img/student-home.jpg';


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
      <>
    <title>My Table</title>
    <style
      dangerouslySetInnerHTML={{
        __html: `
          table {
            border-collapse: collapse;
            width: 100%;
          }

          th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
          }

          th {
            background-color: #f2f2f2;
          }
        `,
      }}
    />
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