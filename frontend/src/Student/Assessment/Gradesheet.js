import React from 'react';

const Gradesheet = () => {
  const column1Data = [
    'Gross Motor Activities',
    'Fine Motor Activities',
    'Meal Motor Activities',
    'Dressing',
    'Toileting',
    'Expressive Language',
    'Social Interaction',
    'Reading',
    'Writing',
    'Time',
    'Money',
  ];

  const generateTableData = () => {
    const data = [];
    for (let i = 1; i <= 10; i++) {
      data.push({
        sno: i,
      });
    }
    return data;
  };

  const tableData = generateTableData();

  return (
    <div className="table-scroll">
    {/* <TeacherNavbar /> */}
    <h1>Gradesheet </h1>
      <table width={"100%"}>
        <thead>
          <tr>
            <th>Sno</th>
            <th>Domain</th>
            <th>Question 1</th>
            <th>Question 2</th>
            <th>Question 3</th>
            <th>Question 4</th>
            <th>Question 5</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{row.sno}</td>
              <td>{column1Data[index]}</td>
              <td><input type="checkbox" /></td>
              <td><input type="checkbox" /></td>
              <td><input type="checkbox" /></td>
              <td><input type="checkbox" /></td>
              <td><input type="checkbox" /></td>
              
            </tr>
          ))}
        </tbody>
       
      </table>
      <div style={{marginLeft:"50%",marginTop:"20px"}} >
      <button className="btn btn-primary rounded-pill py-sm-2 px-sm-3 me-2 animated slideInLeft"
  type='submit'> Submit </button>
      </div>
    </div>
  );
};

export default Gradesheet;
