import React from "react";
export default function StudentApplicationList() {
    return(
        <div>
        <div className="StudentsApplication">
        <h2 style={{ marginLeft: '10%' }}>Students's Application</h2>
        <table>
          <thead>
            <tr>
              <th>S.no</th>
              <th>Name</th>
              <th>Locality</th>
              <th>Additonal Details</th>
  
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Chokkalingam</td>
              <td>Madurai, TamilNadu</td>
              <td style={{ textAlign: 'center' }} >
              <Button type="primary" onClick={showModal}>
            Document
          </Button>
          <Modal title="Student Details" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <p>Name: C </p>
            <p>Degree:</p>
            <p>Experience:</p>
          </Modal>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Madhumitha</td>
              <td>Jaipur, Rajasthan</td>
              <td style={{ textAlign: 'center' }}>
                <Button type="primary" onClick={showModal}>
            Document
          </Button>
          <Modal title="Student Details" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <p>Name: </p>
          <p>Degree:</p>
          <p>Experience:</p>
          </Modal>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Kamali</td>
              <td>Tiruvallur, TamilNadu</td>
              <td style={{ textAlign: 'center' }}>
              <Button type="primary" onClick={showModal}>
            Document
          </Button>
          <Modal title="Student Details" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <p>Name: </p>
          <p>Degree:</p>
          <p>Experience:</p>
          </Modal>
              </td>
            </tr>
          </tbody>
        </table>
        </div>
        </div>

    )
}
