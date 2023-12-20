import React, { useEffect, useState } from 'react';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { Modal, Button, Form, Input, DatePicker, TimePicker } from 'antd';

const DisplayStudentApplications = () => {
  const [studentApplications, setStudentApplications] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [form] = Form.useForm();

  useEffect(() => {
    const fetchStudentApplications = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'StudentApplication'));

        const studentData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          Name: doc.data().Name || '',
          DisabilityType: doc.data().DisabilityType || '',
          UDID: doc.data().UDID || '',
          AadharCardNumber: doc.data().AadharCardNumber || '',
          Address: doc.data().Address || '',
          ContactNumber: doc.data().ContactNumber || '',
          EmailID: doc.data().EmailId || '',
          OrganizationName: doc.data().OrganizationName || '',
          status: doc.data().status || '',
          acceptanceDateTime: doc.data().acceptanceDateTime || '',
          acceptanceMessage: doc.data().acceptanceMessage || '',
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

  const handleAcceptClick = () => {
    form.resetFields(); // Reset the form fields
    setModalVisible(true);
  };

  const handleFormSubmit = async (values) => {
    try {
      if (selectedStudent) {
        const studentDocRef = doc(db, 'StudentApplication', selectedStudent.id);
        await updateDoc(studentDocRef, {
          status: 'accepted',
          acceptanceDateTime: values.dateTime.format('YYYY-MM-DD HH:mm:ss'), // Format the date and time
          acceptanceMessage: values.message,
        });

        const updatedStudentApplications = await getDocs(collection(db, 'StudentApplication'));
        const updatedStudentData = updatedStudentApplications.docs.map((doc) => ({
          id: doc.id,
          Name: doc.data().Name || '',
          DisabilityType: doc.data().DisabilityType || '',
          UDID: doc.data().UDID || '',
          AadharCardNumber: doc.data().AadharCardNumber || '',
          Address: doc.data().Address || '',
          ContactNumber: doc.data().ContactNumber || '',
          EmailID: doc.data().EmailId || '',
          OrganizationName: doc.data().OrganizationName || '',
          status: doc.data().status || '',
          acceptanceDateTime: doc.data().acceptanceDateTime || '',
          acceptanceMessage: doc.data().acceptanceMessage || '',
        }));

        setStudentApplications(updatedStudentData);
        setModalVisible(false);
        setSelectedStudent(null);

        console.log('Application accepted successfully!');
      }
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const handleDeclineClick = async () => {
    // Similar to handleAcceptClick, but for declining the application
  };

  const handleModalCancel = () => {
    form.resetFields(); // Reset the form fields
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
                {/* <button
                  className="accept-button"
                  onClick={() => handleAcceptClick(student)}
                >
                  Accept
                </button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal
        title="Student Application Details"
        visible={modalVisible}
        onCancel={handleModalCancel}
        footer={[
          <Button key="decline" type="danger" onClick={handleDeclineClick}>
            Decline
          </Button>,
          <Button key="accept" type="primary" onClick={() => form.submit()}>
            Accept
          </Button>,
        ]}
      >
        {selectedStudent && (
          <Form form={form} onFinish={handleFormSubmit}>
            <p><strong>Name:</strong> {selectedStudent.Name}</p>
            <p><strong>Disability Type:</strong> {selectedStudent.DisabilityType}</p>
            <p><strong>UDID:</strong> {selectedStudent.UDID}</p>
            <p><strong>Aadhar Card Number:</strong> {selectedStudent.AadharCardNumber}</p>
            <p><strong>Address:</strong> {selectedStudent.Address}</p>
            <p><strong>Contact Number:</strong> {selectedStudent.ContactNumber}</p>
            {/* <p><strong>Email ID:</strong> {selectedStudent.EmailID}</p> */}
            <p><strong>Organization Name:</strong> {selectedStudent.OrganizationName}</p>
            
            <Form.Item
              label="Date and Time"
              name="dateTime"
              style={{marginRight:"20px"}}
              rules={[{ required: true, message: 'Please select date and time' }]}
            >
              <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
            </Form.Item>

            <Form.Item
              label="Message"
              name="message"
              rules={[{ required: true, message: 'Please enter a message' }]}
            >
              <Input.TextArea />
            </Form.Item>
          </Form>
        )}
      </Modal>
    </div>
  );
};

export default DisplayStudentApplications;
