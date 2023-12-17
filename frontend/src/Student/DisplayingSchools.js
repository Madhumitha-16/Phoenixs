import React, { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const DisplayingSchools = () => {
  const [orgDetails, setOrgDetails] = useState([]);

  useEffect(() => {
    const fetchOrgDetails = async () => {
      try {
        const q = query(collection(db, 'Users'), where('Role', '==', 'Org'));
        const querySnapshot = await getDocs(q);

        const orgData = querySnapshot.docs.map((doc) => {
          const facilities = doc.data().Facilities || []; // Default to an empty array if Facilities is undefined
          return {
            UserID: doc.data().UserID,
            OrganisationName: doc.data().OrganisationName,
            Phno: doc.data().PhoneNumber,
            Email: doc.data().Email,
            Role: doc.data().Role,
            Address: doc.data().Address,
            Facilities: facilities, // Keep the array as it is
          };
        });

        setOrgDetails(orgData);
      } catch (error) {
        console.error('Error fetching org details:', error);
      }
    };

    fetchOrgDetails();
  }, []);

  return (
    <div>
      <h2>Organization Details</h2>
      <table>
        <thead>
          <tr>
            <th>Organisation Name</th>
            <th>Email</th>
            <th>Contact Number</th>
            <th>Address</th>
            <th>Facilities</th>
          </tr>
        </thead>
        <tbody>
          {orgDetails.map((org) => (
            <tr key={org.UserID}>
              <td>{org.OrganisationName}</td>
              <td>{org.Email}</td>
              <td>{org.Phno}</td>
              <td>{org.Address}</td>
              <td>
                <ul>
                  {org.Facilities.map((facility, index) => (
                    <li key={index}>{facility}</li>
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

export default DisplayingSchools;
