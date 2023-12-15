import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import './DetailTable.css';

const db = getFirestore();

const AllDetailsFromSubcollection = () => {
  const [allDetailsA, setAllDetailsA] = useState([]);
  const [allDetailsD, setAllDetailsD] = useState([]);
  const [allDetailsE, setAllDetailsE] = useState([]);
  const [allDetailsF, setAllDetailsF] = useState([]);
  const [allDetailsG, setAllDetailsG] = useState([]);
  const [allDetailsH, setAllDetailsH] = useState([]);


  useEffect(() => {
    const fetchAllDetailsAFromSubcollection = async () => {
      try {
        const detailsCollectionRefA = collection(db, 'DisabilitySchools', 'A', 'Details');
        const detailsQuerySnapshotA = await getDocs(detailsCollectionRefA);

        const detailsDataA = detailsQuerySnapshotA.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));

        setAllDetailsA(detailsDataA);
      } catch (error) {
        console.error('Error fetching all details from A:', error.message);
      }
    };

   
    const fetchAllDetailsDFromSubcollection = async () => {
      try {
      
        const detailsCollectionRefD = collection(db, 'DisabilitySchools', 'D', 'Details');
        const detailsQuerySnapshotD = await getDocs(detailsCollectionRefD);

        const detailsDataD = detailsQuerySnapshotD.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));

        setAllDetailsD(detailsDataD);
      } catch (error) {
        console.error('Error fetching all details from D:', error.message);
      }
    };

    const fetchAllDetailsEFromSubcollection = async () => {
      try {
     
        const detailsCollectionRefE = collection(db, 'DisabilitySchools', 'E', 'Details');

        
        const detailsQuerySnapshotE = await getDocs(detailsCollectionRefE);
        const detailsDataE = detailsQuerySnapshotE.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));

        setAllDetailsE(detailsDataE);
      } catch (error) {
        console.error('Error fetching all details from E:', error.message);
      }
    };

    const fetchAllDetailsFFromSubcollection = async () => {
      try {
      
        const detailsCollectionRefF = collection(db, 'DisabilitySchools', 'F', 'Details');
        const detailsQuerySnapshotF = await getDocs(detailsCollectionRefF);   
        const detailsDataF = detailsQuerySnapshotF.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));

        setAllDetailsF(detailsDataF);
      } catch (error) {
        console.error('Error fetching all details from F:', error.message);
      }
    };

    const fetchAllDetailsGFromSubcollection = async () => {
      try {
      
        const detailsCollectionRefG = collection(db, 'DisabilitySchools', 'G', 'Details');
        const detailsQuerySnapshotG = await getDocs(detailsCollectionRefG);   
        const detailsDataG = detailsQuerySnapshotG.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));

        setAllDetailsG(detailsDataG);
      } catch (error) {
        console.error('Error fetching all details from G:', error.message);
      }
    };
    const fetchAllDetailsHFromSubcollection = async () => {
      try {
        // Create a reference to the 'Details' subcollection in 'H' document
        const detailsCollectionRefH = collection(db, 'DisabilitySchools', 'H', 'Details');

        // Fetch all documents from the 'Details' subcollection in 'H' document
        const detailsQuerySnapshotH = await getDocs(detailsCollectionRefH);

        // Extract data from all documents
        const detailsDataH = detailsQuerySnapshotH.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));

        setAllDetailsH(detailsDataH);
      } catch (error) {
        console.error('Error fetching all details from H:', error.message);
      }
    };




    fetchAllDetailsAFromSubcollection();
    fetchAllDetailsDFromSubcollection();
    fetchAllDetailsEFromSubcollection();
    fetchAllDetailsFFromSubcollection();
    fetchAllDetailsGFromSubcollection();
    fetchAllDetailsHFromSubcollection();

  }, []);

  // Render all details in a table
  return (
    <div className="entire-table">
    
      <h2>Early Intervention Centers- Age 0-6 Years</h2>
      <table border="1" className="table-container">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Address</th>
            <th>Contact and Email ID</th>
          </tr>
        </thead>
        <tbody>
          {allDetailsA.map((details, index) => {
            const nameParts = details.data.name.split(','); // Split name by comma
            const firstName = nameParts[0];
            const restOfName = nameParts.slice(1).join(',');

            return (
              <tr key={details.id}>
                <td>{index + 1}</td>
                <td>{firstName}</td>
                <td>{restOfName}</td>
                <td>
                  <ul>
                    {details.data.contact &&
                      details.data.contact
                        .filter((_, contactIndex) => contactIndex % 2 === 0)
                        .map((contact, contactIndex) => (
                          <li key={contactIndex}>{contact}</li>
                        ))}
                  </ul>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>


      <hr />
      <h2>Special School  for Intellectual Disability / Autism  and Vocational Training</h2>
      <table border="1" className="table-container">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Address</th>
            <th>Contact and Email ID</th>
          </tr>
        </thead>
        <tbody>
          {allDetailsD.map((details, index) => (
            <tr key={details.id}>
              <td>{index + 1}</td>
              <td>{details.data.name}</td>
              <td>{details.data.address}</td>
              <td>
                <ul>
                  {details.data.contact &&
                    details.data.contact
                      .filter((contact) => contact.trim() !== '')  // Filter out empty values
                      .map((contact, contactIndex) => (
                        <li key={contactIndex}>{contact}</li>
                      ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    
      <h2> Special School / Vocational Training Center For  Persons with Hearing Impairment</h2>
      <table border="1" className="table-container">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Address</th>
            <th>Contact and Email ID</th>
          </tr>
        </thead>
        <tbody>
          {allDetailsE.map((details, index) => (
            <tr key={details.id}>
              <td>{index + 1}</td>
              <td>{details.data.name}</td>
              <td>{details.data.address}</td>
              <td>
                <ul>
                  {details.data.contact &&
                    details.data.contact
                      .filter((contact) => contact.trim() !== '')  // Filter out empty values
                      .map((contact, contactIndex) => (
                        <li key={contactIndex}>{contact}</li>
                      ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <hr />

<h2>Special School for Deaf Blind</h2>
<table border="1" className="table-container">
  <thead>
    <tr>
      <th>S.No</th>
      <th>Name</th>
      <th>Address</th>
      <th>Contact and Email ID</th>
    </tr>
  </thead>
  <tbody>
    {allDetailsF.map((details, index) => (
      <tr key={details.id}>
        <td>{index + 1}</td>
        <td>{details.data.name}</td>
        <td>{details.data.address}</td>
        <td>
          <ul>
            {details.data.contact &&
              details.data.contact
                .filter((contact) => contact.trim() !== '')  // Filter out empty values
                .map((contact, contactIndex) => (
                  <li key={contactIndex}>{contact}</li>
                ))}
          </ul>
        </td>
      </tr>
    ))}
  </tbody>
</table>   

<h2> Special School / Vocational Training Center For Persons with Visual impairment
</h2>
<table border="1" className="table-container">
  <thead>
    <tr>
      <th>S.No</th>
      <th>Name</th>
      <th>Address</th>
      <th>Contact and Email ID</th>
    </tr>
  </thead>
  <tbody>
    {allDetailsG.map((details, index) => (
      <tr key={details.id}>
        <td>{index + 1}</td>
        <td>{details.data.name}</td>
        <td>{details.data.address}</td>
        <td>
          <ul>
            {details.data.contact &&
              details.data.contact
                .filter((contact) => contact.trim() !== '')  // Filter out empty values
                .map((contact, contactIndex) => (
                  <li key={contactIndex}>{contact}</li>
                ))}
          </ul>
        </td>
      </tr>
    ))}
  </tbody>
</table>


<h2>Rehabilitation Council of India Recognized Special Education Training Institution
</h2>
<table border="1" className="table-container">
  <thead>
    <tr>
      <th>S.No</th>
      <th>Name</th>
      <th>Address</th>
      <th>Contact and Email ID</th>
    </tr>
  </thead>
  <tbody>
    {allDetailsH.map((details, index) => (
      <tr key={details.id}>
        <td>{index + 1}</td>
        <td>{details.data.name}</td>
        <td>{details.data.address}</td>
        <td>
          <ul>
            {details.data.contact &&
              details.data.contact
                .filter((contact) => contact.trim() !== '')  // Filter out empty values
                .map((contact, contactIndex) => (
                  <li key={contactIndex}>{contact}</li>
                ))}
          </ul>
        </td>
      </tr>
    ))}
  </tbody>
</table>   














    </div>
  );
};

export default AllDetailsFromSubcollection;