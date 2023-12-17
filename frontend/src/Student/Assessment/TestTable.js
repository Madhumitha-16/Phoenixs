import React from 'react';
import { Link } from 'react-router-dom';

const TestTable = () => {
  const testData = [
    { sno: 1, domain: 'Gross Motor Activities ' },
    { sno: 2, domain: 'Fine Motor Activities'},
    { sno: 3, domain: 'Meal Motor Activities'},
    { sno: 4, domain: 'Dressing' },
    { sno: 5, domain: 'Grooming' },
    { sno: 6, domain: 'Toileting' },
    { sno: 7, domain: 'Receptive Language' },
    { sno: 8, domain: 'Expressive Language' },
    { sno: 9, domain: 'Social Interaction ' },
    { sno: 10, domain: 'Reading  ' },
    { sno: 11, domain: 'Writing ' },
    { sno: 12, domain: 'Numbers ' },
    { sno: 13, domain: 'Time ' },
    { sno: 14, domain: 'Money  ' },
    { sno: 15, domain: 'Domestic Activities' },
    { sno: 16, domain: 'Community Orientation' },
    { sno: 17, domain: 'Recreation – Leisure Time Activities' },
    { sno: 18, domain: 'Vocational Activities' },

    // Add more data as needed...
  ];

  return (
    <div>
      <h2>Test Questions</h2>
      <table>
        <thead>
          <tr>
            <th>Sno</th>
            <th>Domain</th>
            
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {testData.map((data, index) => (
            <tr key={index}>
              <td>{data.sno}</td>
              <td>{data.domain}</td>
              
              <td>
                <Link to={`/domain-test/${data.sno}`}>
                  <button className="btn btn-primary rounded-pill px-3 my-2 d-none d-lg-block">Take Test</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <button className="btn btn-primary rounded-pill px-3 my-2 d-none d-lg-block">Get IEP</button>
    </div>
    </div>
  );
};

export default TestTable;
