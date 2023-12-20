import React, { useEffect, useState } from 'react';
import { collection, getDocs, query, where, addDoc } from 'firebase/firestore';
import { db, auth } from '../firebaseConfig'; 
import { Modal, Button, Form, Input } from 'antd';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'; 
import VoiceForm from '../Form';
import StudentNavbar from '../Components/StudentNavbar';
import '../Styles/application.css';
import Footer from '../Components/Footer';


const DisplayingSchools = () => {
  const { transcript, resetTranscript } = useSpeechRecognition();

  const [formData, setFormData] = useState({
    name: "",
    address:"",
    udid:"",
    disabilityType:"",
    contactNo:""    
  });
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
    SpeechRecognition.stopListening(); 
    resetTranscript();
  };

  useEffect(() => {
    SpeechRecognition.startListening({ continuous: true });
  }, []);

  const handleFormSubmit = async (values) => {
    try {
     
      const currentUser = auth.currentUser;
      const currentUserID = currentUser ? currentUser.uid : '123'; 
console.log(values);
      const studentAppCollection = collection(db, 'StudentApplication');
      await addDoc(studentAppCollection, {
        UserID: currentUserID,
        Name: values.firstName + values.lastName,
        ContactNumber: values.contactNo,
        Address: values.address,
        UDID: values.udid,
        DisabilityType: values.disabilityType,
        status: 'Pending', // Set initial status as Pending
      });

      setModalVisible(false);
      form.resetFields();
      // speak({
      //   text: "submitted",
      // });
      console.log('Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  useEffect(() => {
    const delay = 1500; 
    const timeoutId = setTimeout(() => {
      handleVoiceInput();
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  },[transcript]);

  const speak = (text) => {
    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
  };

  const handleVoiceInput = () => {
    if (transcript) {
  
      const commands = [
        {
          command: "set first name *",
          
          callback: (name) => setFormData({ ...formData, firstName: name }) ,
        },
        {
          command: "set last name *",
          callback: (name) => setFormData({ ...formData, lastName: name }),
        },
        {
          command: "set u d i d number *",
          callback: (udid) => setFormData({ ...formData, udid }),
        },
        {
          command: "set address *",
          callback: (address) => setFormData({ ...formData, address }),
        },
        {
          command: "set disability type *",
          callback: (disabilityType) => setFormData({ ...formData, disabilityType }),
        },
        {
          command: "set message *",
          callback: (message) => setFormData({ ...formData, message }),
        },
        {
          command: "set contact number *",
          callback: (contactNo) => setFormData({ ...formData, contactNo }),
        },
        {
          command: "submit form",
          callback: ()=>handleFormSubmit(formData)
        },
      ];
  
      commands.forEach(({ command, callback }) => {
        const regex = new RegExp(`^${command.replace(/\*/g, "(.+)")}$`, "i");
        console.log("regex",regex)
        const match = transcript.toLowerCase().match(regex);
        if (match) {
          callback(match[1]);
          resetTranscript();
        }else{
          // speak({ text: `Sorry, please try again` });
          resetTranscript();
        }
      });
    }
  };


  return (
    <div>
    <StudentNavbar />
    <hr></hr>
      <h2 style={{marginLeft:"10%",marginBottom:"30px",marginTop:"50px"}}>List of Schools</h2>
      <table>
        <thead>
          <tr>
            <th>Organisation</th>
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
        <form  onSubmit={handleFormSubmit}>
        <label className="input-group">
          First Name:
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
          />
        </label>
        <br />
        <label className="input-group">
          Last Name:
          <input
            type="text"
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
          />
        </label>
        <br />
        <label className="input-group">
          Address:
          <input
          type="text"
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          />
        </label>
        <br />
        <label className="input-group">
          UDID No.:
          <input
          type="text"
            value={formData.udid}
            onChange={(e) => setFormData({ ...formData, udid: e.target.value })}
          />
        </label>
        <label className="input-group">
          Disability Type:
          <input
          type="text"
            value={formData.disabilityType}
            onChange={(e) => setFormData({ ...formData, disabilityType: e.target.value })}
          />
        </label>
        <label className="input-group">
          Contact No.:
          <input
          type="text"
            value={formData.contactNo}
            onChange={(e) => setFormData({ ...formData, contactNo: e.target.value })}
          />
        </label>
        <br />
      </form> 
      <p>Transcript: {transcript}</p>
      </Modal>
      <Footer />
    </div>
  );
};

export default DisplayingSchools;
