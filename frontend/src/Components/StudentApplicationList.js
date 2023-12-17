import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { Modal, Button } from 'antd';

const DisplayStudentApplications = () => {
  const [studentApplications, setStudentApplications] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  useEffect(() => {
    const fetchStudentApplications = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'StudentApplication'));

        const studentData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          Name: doc.data().Name || '',
          DisabilityType: doc.data().DisabilityType || '',
          UDID: doc.data().UDID || '',
          // Add other fields as needed
          AadharCardNumber: doc.data().AadharCardNumber || '',
          Address: doc.data().Address || '',
          ContactNumber: doc.data().ContactNumber || '',
          EmailID: doc.data().EmailId || '',
          OrganizationName: doc.data().OrganizationName || '',
        }));

        setStudentApplications(studentData);
      } catch (error) {
        console.error('Error fetching student applications:', error);
      }
    };

    fetchStudentApplications();
  }, []);

  const handleViewClick = (student) => {
    setSelectedStudent(student);
    setModalVisible(true);
  };

  const handleModalCancel = () => {
    setModalVisible(false);
    setSelectedStudent(null);
  };

  return (
    <div>
      <h2>Student Applications</h2>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Disability Type</th>
            <th>UDID</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {studentApplications.map((student, index) => (
            <tr key={student.id}>
              <td>{index + 1}</td>
              <td>{student.Name}</td>
              <td>{student.DisabilityType}</td>
              <td>{student.UDID}</td>
              <td>
                <button
                  className="view-button"
                  onClick={() => handleViewClick(student)}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal
        title="Student Application Details"
        visible={modalVisible}
        onCancel={handleModalCancel}
        footer={null}
      >
        {selectedStudent && (
          <div>
            <p><strong>Name:</strong> {selectedStudent.Name}</p>
            <p><strong>Disability Type:</strong> {selectedStudent.DisabilityType}</p>
            <p><strong>UDID:</strong> {selectedStudent.UDID}</p>
            {/* Add other fields as needed */}
            <p><strong>Aadhar Card Number:</strong> {selectedStudent.AadharCardNumber}</p>
            <p><strong>Address:</strong> {selectedStudent.Address}</p>
            <p><strong>Contact Number:</strong> {selectedStudent.ContactNumber}</p>
            <p><strong>Email ID:</strong> {selectedStudent.EmailID}</p>
            <p><strong>Organization Name:</strong> {selectedStudent.OrganizationName}</p>

            {/* Add "Accept" and "Decline" buttons */}
            <Button type="primary">Accept</Button>
            <Button type="danger">Decline</Button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default DisplayStudentApplications;
