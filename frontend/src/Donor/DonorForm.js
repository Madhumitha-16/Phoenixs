import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig'; 
import donorpic from '../img/disablePic1.png';
import { BiSolidHeart } from 'react-icons/bi';

const DonorForm = () => {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const donorDetailsCollectionRef = collection(db, 'DonorDetails');

      const donorData = {
        Name,
        Email,
        contactNumber,
        message,
      };

      await addDoc(donorDetailsCollectionRef, donorData);

      // Clear the form fields after submission
      setName('');
      setEmail('');
      setContactNumber('');
      setMessage('');

      console.log('Donor data submitted successfully!');
    } catch (error) {
      console.error('Error submitting donor data:', error.message);
    }
  };

  return (
    <div>
      {/* Appointment Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="bg-light rounded">
            <div className="row g-0">
              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                <div className="h-100 d-flex flex-column justify-content-center p-5">
                  <h1 className="mb-4">Open Hearts, Open Pockets: Donate Now <BiSolidHeart   /> </h1>
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      <div className="col-sm-6">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control border-0"
                            id="gname"
                            placeholder="Guardian Name"
                            value={Name}
                            onChange={(e) => setName(e.target.value)}
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
                            placeholder="Guardian Email"
                            value={Email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <label htmlFor="gmail">Email</label>
                        </div>
                      </div>

                      <div className="col-sm-6">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control border-0"
                            placeholder="Contact Number"
                            value={contactNumber}
                            onChange={(e) => setContactNumber(e.target.value)}
                          />
                          <label htmlFor="Contact Number">Contact Number</label>
                        </div>
                      </div>
                     
                      <div className="col-12">
                        <div className="form-floating">
                          <textarea
                            className="form-control border-0"
                            placeholder="Leave a message here"
                            id="message"
                            style={{ height: 100 }}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
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
    </div>
  );
};

export default DonorForm;
