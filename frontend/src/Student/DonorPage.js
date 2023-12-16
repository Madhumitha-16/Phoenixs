import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, doc } from 'firebase/firestore';
import { db } from '../firebaseConfig';


const DonorPage = () => {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [message, setMessage] = useState('');
  const [donorDetails, setDonorDetails] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDonor, setSelectedDonor] = useState(null);

  const fetchDonorDetails = async () => {
    try {
      const donorDetailsCollectionRef = collection(db, 'DonorDetails');
      const donorDetailsSnapshot = await getDocs(donorDetailsCollectionRef);

      const donorDetailsData = donorDetailsSnapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));

      setDonorDetails(donorDetailsData);
    } catch (error) {
      console.error('Error fetching donor details:', error.message);
    }
  };

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
      setName('');
      setEmail('');
      setContactNumber('');
      setMessage('');

      console.log('Donor data submitted successfully!');
      fetchDonorDetails();
    } catch (error) {
      console.error('Error submitting donor data:', error.message);
    }
  };

  // Open Modal
  const openModal = (donor) => {
    setSelectedDonor(donor);
    setIsModalOpen(true);
  };

  // Close Modal
  const closeModal = () => {
    setSelectedDonor(null);
    setIsModalOpen(false);
  };


  useEffect(() => {
    fetchDonorDetails();
  }, []);

  return (
    <div>
      <div className="container-xxl py-5">

        <h2>Donor Details</h2>
        <ul>
          {donorDetails.map((donor) => (
            <li key={donor.id}>
              <strong>Name:</strong> {donor.data.Name} | 
              <strong>Email:</strong> {donor.data.Email} | 
              <strong>Contact Number:</strong> {donor.data.contactNumber} | 
              <strong>Message:</strong> {donor.data.message}
              <button onClick={() => openModal(donor)}>Click here to connect</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DonorPage;
