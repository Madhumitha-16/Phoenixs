import React from 'react'
import '../Styles/Home.css';
import logo from '../img/logo.png';
import c1 from '../img/carousel-1.jpg';
import c2 from '../img/carousel-2.jpg';
import teacher from '../img/call-to-action.jpg'
import about1 from '../img/about-1.jpg';
import about2 from '../img/about-2.jpg';
import about3 from '../img/about-3.jpg';
import cls1 from '../img/classes-1.jpg';
import cls2 from '../img/classes-2.jpg';
import cls3 from '../img/classes-3.jpg';
import cls4 from '../img/classes-4.jpg';
import t_bg from'../img/Teacher_bg.jpg';
import t1 from'../img/p1.jpg';
import t2 from'../img/p2.jpg';
import t3 from'../img/p3.jpg';
import t4 from'../img/p4.jpg';
import t5 from'../img/p5.jpg';
import t6 from'../img/p6.jpg';
import t7 from'../img/p7.jpg';
import Puzzule from'../img/puzzle.jpg';

export default function THome() {
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
            Get Hired
            </a>
            {/* <a href="classes.html" className="nav-item nav-link">
              Forum
            </a> */}
            <div className="nav-item dropdown">
              <a
                href="www.google.com"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Forum
              </a>
              <div className="dropdown-menu rounded-0 rounded-bottom border-0 shadow-sm m-0">
                <a href="facility.html" className="dropdown-item">
                  Publish Content
                </a>
                <a href="view.html" className="dropdown-item">
                  View Content
                </a>
                
              </div>
            </div>
            <a href="live.html" className="nav-item nav-link">
             Live Sessions
            </a>
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
            <img src={t_bg} alt="" style={{  objectFit: "cover", width: "100%", height: "750px" }} />
            <div
              className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
            >
              <div className="container">
                <div className="row justify-content-start">
                  <div className="col-10 col-lg-8">
                    <h1 className="display-2 text-white animated slideInDown mb-4" >
                    Building Bridges: Dedicated Educator for Children with Disabilities
                    </h1>
                    <p className="fs-5 fw-medium text-white mb-4 pb-2">
                    A Special Education Teacher is an educator who specializes in teaching children with physical, mental, emotional, and learning disabilities.
                     They develop tailored teaching plans, collaborate with parents and support staff, and assess students’ progress to help them achieve important learning milestones.
                    </p>
                    <a
                      href="www.google.com"
                      className="btn btn-primary rounded-pill py-sm-3 px-sm-5 me-3 animated slideInLeft"
                    >
                      Learn More
                    </a>
                    <a
                      href="www.google.com"
                      className="btn btn-dark rounded-pill py-sm-3 px-sm-5 animated slideInRight"
                    >
                     Apply Now
                    </a>
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
            <h1 className="mb-3">Services</h1>
            <p>
            At Phoenixs, we are dedicated to creating a thriving community for teachers, students, and parents committed to inclusive education. 
            Our platform offers a range of services designed to support and empower educators working with children with disabilities.
            </p>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="facility-item">
                <div className="facility-icon bg-primary">
                  <span className="bg-primary" />
                  <i className="fa fa-bus-alt fa-3x text-primary" />
                  <span className="bg-primary" />
                </div>
                <div className="facility-text bg-primary">
                  <h3 className="text-primary mb-3">Job Opportunities</h3>
                  <p className="mb-0">
                  Discover career opportunities tailored for educators passionate about inclusive learning. 
                  Explore open positions, apply with ease, and join a community that values your dedication to making a positive impact.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="facility-item">
                <div className="facility-icon bg-success">
                  <span className="bg-success" />
                  <i className="fa fa-futbol fa-3x text-success" />
                  <span className="bg-success" />
                </div>
                <div className="facility-text bg-success">
                  <h3 className="text-success mb-3">Forums</h3>
                  <p className="mb-0">
                  Engage in meaningful conversations with educators and parents in our inclusive forums. 
                  Share insights, seek advice, <br/>and collaborate to create a supportive learning environment for every child.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="facility-item">
                <div className="facility-icon bg-warning">
                  <span className="bg-warning" />
                  <i className="fa fa-home fa-3x text-warning" />
                  <span className="bg-warning" />
                </div>
                <div className="facility-text bg-warning">
                  <h3 className="text-warning mb-3">Live Sessions</h3>
                  <p className="mb-0">
                  Participate in enriching live sessions, webinars, and workshops conducted by experts in inclusive education.<br/>
                  Stay updated on the latest teaching methodologies and strategies.
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
                  <h3 className="text-info mb-3">Profiles</h3>
                  <p className="mb-0">
                  Create your teacher profile.
                  Build a supportive network of educators who understand the unique challenges <br/>and joys of teaching children with disabilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Facilities End */}
      {/* About Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <h1 className="mb-4">
                Learn More About Our Work And Our Cultural Activities
              </h1>
              <p>
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
                diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
                lorem sit clita duo justo magna dolore erat amet
              </p>
              <p className="mb-4">
                Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No
                stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo
                nonumy clita sit at, sed sit sanctus dolor eos, ipsum labore duo
                duo sit no sea diam. Et dolor et kasd ea. Eirmod diam at dolor est
                vero nonumy magna.
              </p>
              <div className="row g-4 align-items-center">
                <div className="col-sm-6">
                  <a className="btn btn-primary rounded-pill py-3 px-5" href="">
                    Read More
                  </a>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center">
                    {/* <img
                      className="rounded-circle flex-shrink-0"
                      src="img/user.jpg"
                      alt=""
                      style={{ width: 45, height: 45 }}
                    /> */}
                    {/* <div className="ms-3">
                      <h6 className="text-primary mb-1">Jhon Doe</h6>
                      <small>CEO &amp; Founder</small>
                    </div> */}
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
                    src={Puzzule}
                    alt=""
                  />
                </div>
                <div className="col-6 text-start" style={{ marginTop: "-150px" }}>
                  
                </div>
                <div className="col-6 text-end" style={{ marginTop: "-150px" }}>
                  <img
                    className="img-fluid w-100 rounded-circle bg-light p-3"
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
              {/* <div
                className="col-lg-6 wow fadeIn"
                data-wow-delay="0.1s"
                style={{ minHeight: 400 }}
              > */}
                {/* <div className="position-relative h-100">
                  <img
                    className="position-absolute w-100 h-100 rounded"
                    src={teacher}
                    style={{ objectFit: "cover" }}
                  />
                </div> */}
              {/* </div> */}
              {/* <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                <div className="h-100 d-flex flex-column justify-content-center p-5">
                  <h1 className="mb-4">Become A Teacher</h1>
                  <p className="mb-4">
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                    Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                    sed stet lorem sit clita duo justo magna dolore erat amet
                  </p>
                  <a className="btn btn-primary py-3 px-5" href="">
                    Get Started Now
                    <i className="fa fa-arrow-right ms-2" />
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* Call To Action End */}
      {/* Classes Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 600 }}
          >
            <h1 className="mb-3">Teacher Profiles</h1>
            <p>
            "Discover inspiring teacher profiles on our platform, 
            showcasing expertise in inclusive education and fostering a supportive network of like-minded professionals."
            </p>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="classes-item">
                <div className="bg-light rounded-circle w-75 mx-auto p-3">
                  <img
                    className="img-fluid rounded-circle"
                    src={t1}
                    alt=""
                  />
                </div>
                <div className="bg-light rounded p-4 pt-5 mt-n5">
                  <a className="d-block text-center h3 mt-3 mb-4" href="">
                  Ethan
                  </a>
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <div className="d-flex align-items-center">
                      
                      <div className="ms-3">
                        <h6 className="text-primary mb-1">Sign Language Teacher</h6>
                      </div>
                    </div>
                    <span
                      className="bg-primary text-white rounded-pill py-2 px-3 custom-primary"
                      href=""
                    >
                      Contact
                    </span>
                  </div>
                  <div className="row g-1">
                    <div className="col-4">
                      <div className="border-top border-3 border-primary pt-2">
                        <h6 className="text-primary mb-1">Age:</h6>
                        <small>35 Years</small>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="border-top border-3 border-success pt-2">
                        <h6 className="text-success mb-1">Work Time:</h6>
                        <small>9-10 AM</small>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="border-top border-3 border-warning pt-2">
                        <h6 className="text-warning mb-1">Experience:</h6>
                        <small>10yrs</small>
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
                    src={t3}
                    alt=""
                  />
                </div>
                <div className="bg-light rounded p-4 pt-5 mt-n5">
                  <a className="d-block text-center h3 mt-3 mb-4" href="">
                  Mia
                  </a>
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <div className="d-flex align-items-center">
                      
                      <div className="ms-3">
                        <h6 className="text-primary mb-1">Braille Instructors</h6>
                        
                      </div>
                    </div>
                    <span
                      className="bg-primary text-white rounded-pill py-2 px-3 custom-primary"
                      href=""
                    >
                      Contact
                    </span>
                  </div>
                  <div className="row g-1">
                    <div className="col-4">
                      <div className="border-top border-3 border-primary pt-2">
                        <h6 className="text-primary mb-1">Age:</h6>
                        <small>25 Years</small>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="border-top border-3 border-success pt-2">
                        <h6 className="text-success mb-1">Work Time:</h6>
                        <small>9-10 AM</small>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="border-top border-3 border-warning pt-2">
                        <h6 className="text-warning mb-1">Experience:</h6>
                        <small>10yrs</small>
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
                    src={t7}
                    alt=""
                  />
                </div>
                <div className="bg-light rounded p-4 pt-5 mt-n5">
                  <a className="d-block text-center h3 mt-3 mb-4" href="">
                  Ava

                  </a>
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <div className="d-flex align-items-center">
                      
                      <div className="ms-3">
                        <h6 className="text-primary mb-1">Physical Therapists</h6>
                      </div>
                    </div>
                    <span
                      className="bg-primary text-white rounded-pill py-2 px-3 custom-primary"
                      href=""
                    >
                     Contact
                    </span>
                  </div>
                  <div className="row g-1">
                    <div className="col-4">
                      <div className="border-top border-3 border-primary pt-2">
                        <h6 className="text-primary mb-1">Age:</h6>
                        <small>27 Years</small>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="border-top border-3 border-success pt-2">
                        <h6 className="text-success mb-1">Work Time:</h6>
                        <small>9-10 AM</small>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="border-top border-3 border-warning pt-2">
                        <h6 className="text-warning mb-1">Experience:</h6>
                        <small>5yrs</small>
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
                    src={t4}
                    alt=""
                  />
                </div>
                <div className="bg-light rounded p-4 pt-5 mt-n5">
                  <a className="d-block text-center h3 mt-3 mb-4" href="">
                    Drake
                  </a>
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <div className="d-flex align-items-center">
                      
                      <div className="ms-3">
                        <h6 className="text-primary mb-1">Behavioral Therapists</h6>
                        
                      </div>
                    </div>
                    <span
                      className="bg-primary text-white rounded-pill py-2 px-3 custom-primary"
                      href=""
                    >
                      Contact
                    </span>
                  </div>
                  <div className="row g-1">
                    <div className="col-4">
                      <div className="border-top border-3 border-primary pt-2">
                        <h6 className="text-primary mb-1">Age:</h6>
                        <small>30 Years</small>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="border-top border-3 border-success pt-2">
                        <h6 className="text-success mb-1">Work Time:</h6>
                        <small>9-10 AM</small>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="border-top border-3 border-warning pt-2">
                        <h6 className="text-warning mb-1">Experience:</h6>
                        <small>7yrs</small>
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
                    src={t5}
                    alt=""
                  />
                </div>
                <div className="bg-light rounded p-4 pt-5 mt-n5">
                  <a className="d-block text-center h3 mt-3 mb-4" href="">
                  Noah
                  </a>
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <div className="d-flex align-items-center">
                      <div className="ms-3">
                        <h6 className="text-primary mb-1">Vision Specialists</h6>
                      </div>
                    </div>
                    <span
                      className="bg-primary text-white rounded-pill py-2 px-3 custom-primary"
                      href=""
                    >
                      Contact
                    </span>
                  </div>
                  <div className="row g-1">
                    <div className="col-4">
                      <div className="border-top border-3 border-primary pt-2">
                        <h6 className="text-primary mb-1">Age:</h6>
                        <small>35 Years</small>
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
                        <h6 className="text-warning mb-1">Experience:</h6>
                        <small>9yrs</small>
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
                    src={t6}
                    alt=""
                  />
                </div>
                <div className="bg-light rounded p-4 pt-5 mt-n5">
                  <a className="d-block text-center h3 mt-3 mb-4" href="">
                   Dwayne
                  </a>
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <div className="d-flex align-items-center">
                      <div className="ms-3">
                        <h6 className="text-primary mb-1">Mathematician</h6>
                      </div>
                    </div>
                    <span
                      className="bg-primary text-white rounded-pill py-2 px-3 custom-primary"
                      href=""
                    >
                      Contact
                    </span>
                  </div>
                  <div className="row g-1">
                    <div className="col-4">
                      <div className="border-top border-3 border-primary pt-2">
                        <h6 className="text-primary mb-1">Age:</h6>
                        <small>27 Years</small>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="border-top border-3 border-success pt-2">
                        <h6 className="text-success mb-1">Work Time:</h6>
                        <small>9-10 AM</small>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="border-top border-3 border-warning pt-2">
                        <h6 className="text-warning mb-1">Experience:</h6>
                        <small>6yrs</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Classes End */}
      {/* Appointment Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="bg-light rounded">
            <div className="row g-0">
              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                <div className="h-100 d-flex flex-column justify-content-center p-5">
                  <h1 className="mb-4">Make Appointment</h1>
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
                          <label htmlFor="gname">Gurdian Name</label>
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
                          <label htmlFor="gmail">Gurdian Email</label>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control border-0"
                            id="cname"
                            placeholder="Child Name"
                          />
                          <label htmlFor="cname">Child Name</label>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control border-0"
                            id="cage"
                            placeholder="Child Age"
                          />
                          <label htmlFor="cage">Child Age</label>
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
                          Submit
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
                  {/* <img
                    className="position-absolute w-100 h-100 rounded"
                    src={appointment}
                    style={{ objectFit: "cover" }}
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Appointment End */}
  
          
      {/* Footer Start */}
      <div
        className="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h3 className="text-white mb-4">Get In Touch</h3>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt me-3" />
                123 Street, New York, USA
              </p>
              <p className="mb-2">
                <i className="fa fa-phone-alt me-3" />
                +012 345 67890
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope me-3" />
                info@example.com
              </p>
              <div className="d-flex pt-2">
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-twitter" />
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-youtube" />
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h3 className="text-white mb-4">Quick Links</h3>
              <a className="btn btn-link text-white-50" href="">
                About Us
              </a>
              <a className="btn btn-link text-white-50" href="">
                Contact Us
              </a>
              <a className="btn btn-link text-white-50" href="">
                Our Services
              </a>
              <a className="btn btn-link text-white-50" href="">
                Privacy Policy
              </a>
              <a className="btn btn-link text-white-50" href="">
                Terms &amp; Condition
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h3 className="text-white mb-4">Photo Gallery</h3>
              <div className="row g-2 pt-2">
                <div className="col-4">
                  <img
                    className="img-fluid rounded bg-light p-1"
                    src="img/classes-1.jpg"
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid rounded bg-light p-1"
                    src="img/classes-2.jpg"
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid rounded bg-light p-1"
                    src="img/classes-3.jpg"
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid rounded bg-light p-1"
                    src="img/classes-4.jpg"
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid rounded bg-light p-1"
                    src="img/classes-5.jpg"
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid rounded bg-light p-1"
                    src="img/classes-6.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h3 className="text-white mb-4">Newsletter</h3>
              <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
              <div
                className="position-relative mx-auto"
                style={{ maxWidth: 400 }}
              >
                <input
                  className="form-control bg-transparent w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Your email"
                />
                <button
                  type="button"
                  className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                >
                  SignUp
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                ©{" "}
                <a className="border-bottom" href="#">
                  Your Site Name
                </a>
                , All Right Reserved.
                {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
                Designed By{" "}
                <a className="border-bottom" href="https://htmlcodex.com">
                  HTML Codex
                </a>
              </div>
              <div className="col-md-6 text-center text-md-end">
                <div className="footer-menu">
                  <a href="">Home</a>
                  <a href="">Cookies</a>
                  <a href="">Help</a>
                  <a href="">FQAs</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}
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
