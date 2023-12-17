import react from 'react';

export default function TeacherApplicationList() {
    return(
        <div>
        <div className="TeacherApplication">
        <h2 style={{ marginLeft: '10%', marginTop:'7%'}}>Teacher's Application</h2>
        <table>
          <thead>
            <tr>
              <th>S.no</th>
              <th>Name</th>
              <th>Locality</th>
              <th>Resume</th>
  
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>KamalaVasanthi</td>
              <td>Chennai, TamilNadu</td>
              <td style={{ textAlign: 'center' }}>
              <Button type="primary" onClick={showModal}>
            Resume
          </Button>
          <Modal title="Teacher Details" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <p>Name: </p>
            <p>Degree:</p>
            <p>Experience:</p>
          </Modal>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>ManojKumar</td>
              <td>Ranchi, Jharkhand</td>
              <td style={{ textAlign: 'center' }}>
                <Button type="primary" onClick={showModal}>
                  Resume
                </Button>
                <Modal title="Teacher Details" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                  <p>Name: </p>
                  <p>Degree:</p>
                  <p>Experience:</p>
                </Modal>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Rahul</td>
              <td>Coimbatore, TamilNadu</td>
              <td style={{ textAlign: 'center' }}>
              <Button type="primary" onClick={showModal}>
            Resume
          </Button>
          <Modal title="Teacher Details" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
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