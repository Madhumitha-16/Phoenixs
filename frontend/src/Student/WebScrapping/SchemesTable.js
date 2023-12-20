import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import StudentNavbar from '../../Components/StudentNavbar';
import '../../Styles/Home.css';
import Footer from '../../Components/Footer';

export default function SchemesTable() {
    const[allDetails,setAllDetails]=useState([]);
    useEffect(() => { 
        const fetchAllDetails = async () => {
          try {
            const detailsCollectionRef = collection(db, 'DisabilitySchools2');
            const detailsQuerySnapshot = await getDocs(detailsCollectionRef);
            const detailsData = detailsQuerySnapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }));
    
            setAllDetails(detailsData);
          } catch (error) {
            console.error('Error fetching all details from Dis2:', error.message);
          }
        };
    
        fetchAllDetails();
    
      }, []);
  return (
    <>
    <StudentNavbar />
    <hr></hr>
    <div  className="entire-table">
    
        <h2 style={{ marginLeft: '10%' , marginTop:'3%'}}> Disability Schemes
</h2>
<table border="1" className="table-container">
  <thead>
    <tr>
    <th>S.No</th>
      <th>State/Name</th>
      <th>Disability Type</th>
      <th>Scheme Name</th>
      <th>Disability Benefits Criteria</th>
      <th>Types of Benefits</th>
      <th>Document</th>
    </tr>
  </thead>
  <tbody>
    {allDetails.map((details, index) => (
      <tr key={details.id}>
        <td>{index+1}</td>
        <td>{details.data.state}</td>
        <td>{details.data.disabilityType}</td>
        <td>{details.data.schemeName}</td>
        <td>{details.data.disabilityBenefitsCriteria}</td>
        <td>{details.data.TypesOfBenefits}</td>
        <td>
                <a href={details.data.documentLink} target="_blank" rel="noopener noreferrer">
                  {details.data.documentLink}
                </a>
              </td>
      </tr>
    ))}
  </tbody>
</table>   

<Footer />
    </div>
    </>
  )
}
