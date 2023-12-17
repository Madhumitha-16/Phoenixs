import React, { useState } from 'react';
import { Modal } from 'antd';
import '../Styles/Home.css';
import Link from 'antd/es/typography/Link';

export default function OrganizationQueriesList() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false); }
    return(
        <div>
        <div className="StudentsApplication">
        <h2 style={{ marginLeft: '10%' , marginTop:'7%'}}>Organization's Queries</h2>
        <table>
      <thead>
        <tr>
          <th>S.no</th>
        
          <th>Name</th>
          <th>Locality</th>
          <th>Problem subject</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
        
          <td>John</td>
          <td>Jaipur, Rajasthan</td>
          
          <td>
          <Link type="primary" onClick={showModal}>
          Are progress meetings held to adjust disabled student
      </Link>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Are regular progress meetings conducted to assess the development and
        challenges of disabled students? During these sessions, we analyze the information
         and adjust support strategies to ensure effective and personalized assistance.</p>
      </Modal>
          </td>
        </tr>
        <tr>
          <td>2</td>
          
          <td>Jane</td>
          <td>Chennai, TamilNadu</td>
          
          <td>
            <Link type="primary" onClick={showModal}>
            Are the learning materials and online resources are well accessible to students
      </Link>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Accessibility of learning materials for disabled students varies; while many platforms offer features like screen readers, 
          ongoing efforts are needed to ensure universal access and address diverse learning needs comprehensively.</p>
      </Modal>
          </td>
        </tr>
        <tr>
          <td>3</td>

          <td>Doe</td>
          <td>Amaravati, Andhra</td>
          
          <td>
          <Link type="primary" onClick={showModal}>
           Are Clear and Accurate Responses for Financial Queries are answering
      </Link>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>The clarity and accuracy of responses to financial queries about budgeting, expenses, and planning vary by institution. Robust financial aid offices generally offer reliable information, 
          but consistency across organizations can impact students' ability to make informed financial decisions.</p>
        
      </Modal>
          </td>
        </tr>
        
        
      </tbody>
    </table>
        </div>
        </div>

    )
}
