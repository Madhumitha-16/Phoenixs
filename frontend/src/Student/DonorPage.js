import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, doc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import Footer from '../Components/Footer';
import StudentNavbar from '../Components/StudentNavbar';


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
    <StudentNavbar />
      <div className="container-xxl py-5">

        <h2>Donor Details</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Contact Number</th>
              <th>Message</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {donorDetails.map((donor) => (
              <tr key={donor.id}>
                <td>{donor.data.Name}</td>
                <td>{donor.data.Email}</td>
                <td>{donor.data.contactNumber}</td>
                <td>{donor.data.message}</td>
                <td>
                  <button onClick={() => openModal(donor)}>Click here to connect</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default DonorPage;
