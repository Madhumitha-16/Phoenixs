import React, { useState } from 'react';
import { Modal } from 'antd';
import '../Styles/Home.css';
import Link from 'antd/es/typography/Link';

export default function StudentsQueriesList() {
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
        <h2 style={{ marginLeft: '10%' , marginTop:'7%'}}>Students's Queries</h2>
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
              In what ways does technology enhance our learning
          </Link>
          <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <p>Technology enhances learning by providing access to vast information,
            interactive content, personalized learning experiences,and global collaboration.
            It fosters digital skills, inclusivity, and prepares students for the future.</p>
          </Modal>
              </td>
            </tr>
            <tr>
              <td>2</td>
              
              <td>Jane</td>
              <td>Chennai, TamilNadu</td>
              
              <td>
                <Link type="primary" onClick={showModal}>
                Are the  teachers  well trained to support us
          </Link>
          <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <p>Teachers often receive training for supporting students with disabilities through specialized courses and workshops. However, the extent of this training varies, 
              highlighting the importance of ongoing professional development to effectively accommodate diverse learning needs in the classroom.</p>
          </Modal>
              </td>
            </tr>
            <tr>
              <td>3</td>
    
              <td>Doe</td>
              <td>Amaravati, Andhra</td>
              
              <td>
              <Link type="primary" onClick={showModal}>
              Can you help me be more independent
          </Link>
          <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <p>Empower me to navigate my educational journey more independently. Your guidance and understanding of my unique abilities will contribute to fostering self-reliance and achieving academic success</p>
            
          </Modal>
              </td>
            </tr>
            
            
          </tbody>
        </table>
        </div>
        </div>

    )
}
