import React from 'react'
import StudentNavbar from '../Components/StudentNavbar'
import toddler from '../img/toddler.jpg'
import { Link } from 'react-router-dom';

const Schools = () => {
  return (
   <>
   <StudentNavbar />
    <div class="container">
  <div class="row g-3">
    <div class="col-sm">
    <Link to="/school" style={{    textDecoration: 'none', // Remove underline
    color: 'inherit', }}>
    <div className="service-item text-center pt-3"  style={{backgroundImage:`url(${toddler})`, backgroundSize: 'cover',
    backgroundPosition: 'center', width: '100%',
    height: '300px',}}>
                   <div className="p-4">
                   {/* <FaSchool size={60}/> */}
                     <h5 className="mb-3">Early Intervention Centers- Age 0-6 Years</h5>
                     <p>
                     Embrace the opportunity to educate yourself and graduate with grace
                     </p>
                   </div>
                   </div>
                   </Link>
    </div>
    
    <div class="col-sm">
    <div className="service-item text-center pt-3">
                   <div className="p-4">
                   {/* <FaSchool size={60}/> */}
                     <h5 className="mb-3">Special School  for Intellectual Disability / Autism  and Vocational Training</h5>
                     <p>
                     Embrace the opportunity to educate yourself and graduate with grace
                     </p>
                   </div>
                   </div>
    </div>
    <div class="col-sm">
    <div className="service-item text-center pt-3">
                   <div className="p-4">
                   {/* <FaSchool size={60}/> */}
                     <h5 className="mb-3">Special School / Vocational Training Center For  Persons with Hearing Impairment</h5>
                     <p>
                     Embrace the opportunity to educate yourself and graduate with grace
                     </p>
                   </div>
                   </div>
    </div>
  </div>
</div>
<div class="container">
  <div class="row g-3">
    <div class="col-sm">
    <div className="service-item text-center pt-3">
                   <div className="p-4">
                   {/* <FaSchool size={60}/> */}
                     <h5 className="mb-3">Early Intervention Centers- Age 0-6 Years</h5>
                     <p>
                     Embrace the opportunity to educate yourself and graduate with grace
                     </p>
                   </div>
                   </div>
    </div>
    <div class="col-sm">
    <div className="service-item text-center pt-3">
                   <div className="p-4">
                   {/* <FaSchool size={60}/> */}
                     <h5 className="mb-3">Special School  for Intellectual Disability / Autism  and Vocational Training</h5>
                     <p>
                     Embrace the opportunity to educate yourself and graduate with grace
                     </p>
                   </div>
                   </div>
    </div>
    <div class="col-sm">
    <div className="service-item text-center pt-3">
                   <div className="p-4">
                   {/* <FaSchool size={60}/> */}
                     <h5 className="mb-3">Special School / Vocational Training Center For  Persons with Hearing Impairment</h5>
                     <p>
                     Embrace the opportunity to educate yourself and graduate with grace
                     </p>
                   </div>
                   </div>
    </div>
  </div>
</div>


   </>
  )
}

export default Schools