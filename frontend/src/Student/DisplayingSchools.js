import React, { useEffect, useState } from 'react';
import { collection, getDocs, query, where,addDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { Modal, Button, Form, Input } from 'antd';
import StudentNavbar from '../Components/StudentNavbar';
import Footer from '../Components/Footer';

const DisplayingSchools = () => {
  const [orgDetails, setOrgDetails] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    const fetchOrgDetails = async () => {
      try {
        const q = query(collection(db, 'Users'), where('Role', '==', 'Org'));
        const querySnapshot = await getDocs(q);

        const orgData = querySnapshot.docs.map((doc) => {
          const facilities = doc.data().Facilities || [];
          return {
            UserID: doc.data().UserID,
            OrganisationName: doc.data().OrganisationName,
            Phno: doc.data().PhoneNumber,
            Email: doc.data().Email,
            Role: doc.data().Role,
            Address: doc.data().Address,
            Facilities: facilities,
          };
        });

        setOrgDetails(orgData);
      } catch (error) {
        console.error('Error fetching org details:', error);
      }
    };

    fetchOrgDetails();
  }, []);

  const handleApplyClick = (orgName) => {
    setModalVisible(true);
  };

  const handleModalCancel = () => {
    setModalVisible(false);
    form.resetFields();
  };

  const handleFormSubmit = async (values) => {
    try {
      const studentAppCollection = collection(db, 'StudentApplication');
      await addDoc(studentAppCollection, {
        Name: values.name,
        ContactNumber: values.contactNumber,
        EmailId: values.emailId,
        Address: values.address,
        UDID: values.udid,
        DisabilityType: values.disabilityType,
        AadharCardNumber: values.aadharCardNumber,
        OrganizationName: values.organizationName,
      });

      setModalVisible(false);
      form.resetFields();

      console.log('Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
        <div>
          <StudentNavbar />
          <h2 style={{ marginLeft: '10%' , marginTop:'3%'}}>Organization Details</h2>
          <table>
            <thead>
              <tr>
                <th>Organisation Name</th>
                <th>Email</th>
                <th>Contact Number</th>
                <th>Address</th>
                <th>Facilities</th>
                <th>Apply for Admission</th>
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
                  <td>
                    <button
                      className="apply-button"
                      onClick={() => handleApplyClick(org.OrganisationName)}
                    >
                      Apply
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
    
          <Modal
            title="Apply for Admission"
            visible={modalVisible}
            onCancel={handleModalCancel}
            footer={[
              <Button key="back" onClick={handleModalCancel}>
                Cancel
              </Button>,
              <Button
                key="submit"
                type="primary"
                onClick={() => form.submit()}
              >
                Submit
              </Button>,
            ]}
          >
            <Form form={form} onFinish={handleFormSubmit}>
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Please enter your name' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Contact Number"
                name="contactNumber"
                rules={[
                  {
                    required: true,
                    message: 'Please enter your contact number',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Email Id"
                name="emailId"
                rules={[
                  { required: true, message: 'Please enter your email id' },
                  { type: 'email', message: 'Please enter a valid email id' },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Address"
                name="address"
                rules={[{ required: true, message: 'Please enter your address' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="UDID"
                name="udid"
                rules={[{ required: true, message: 'Please enter your UDID' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Disability Type"
                name="disabilityType"
                rules={[
                  { required: true, message: 'Please enter your disability type' },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Aadhar Card Number"
                name="aadharCardNumber"
                rules={[
                  {
                    required: true,
                    message: 'Please enter your Aadhar card number',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="organizationName"
                initialValue={orgDetails[0]?.OrganisationName || ''}
                hidden>
              
                <Input />
             
                </Form.Item>
              </Form>
                
          </Modal>
          <Footer />
        </div>
      );
    };

export default DisplayingSchools;
