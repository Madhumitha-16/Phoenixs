import StudentNavbar from "../../Components/StudentNavbar";
import React from 'react'
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import './ActivityHome.css';
import Footer from "../../Components/Footer";

export default function ActivityHome() {
  return (
    <div>
    <StudentNavbar />
  {/* Header Section */}
  

    <div>
      {/* <StudentNavbar></StudentNavbar> */}
      <div className="container">
      <h2>It's Time to Some Activities!</h2>
      </div>
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'repeat(3, 1fr)', gap: '20px' }}>
  <Card
    title="Card title"
    bordered={false}
    style={{
      width: '100%', // Adjust the width as needed
    }}
  >
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
    <div className="button-container">
      <Link to="/student/gamify" className="orange-button">
        OddOneOut
      </Link>
    </div>
  </Card>

  <Card
    title="Card title"
    bordered={false}
    style={{
      width: '100%', // Adjust the width as needed
    }}
  >
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
    <div className="button-container">
      <Link to="/student/gamify" className="orange-button">
        OddOneOut
      </Link>
    </div>
  </Card>
  <Card
    title="Card title"
    bordered={false}
    style={{
      width: '100%', // Adjust the width as needed
    }}
  >
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
    <div className="button-container">
      <Link to="/student/gamify" className="orange-button">
        OddOneOut
      </Link>
    </div>
  </Card>
  <Card
    title="Card title"
    bordered={false}
    style={{
      width: '100%', // Adjust the width as needed
    }}
  >
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
    <div className="button-container">
      <Link to="/student/gamify" className="orange-button">
        OddOneOut
      </Link>
    </div>
  </Card>
  <Card
    title="Card title"
    bordered={false}
    style={{
      width: '100%', // Adjust the width as needed
    }}
  >
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
    <div className="button-container">
      <Link to="/student/gamify" className="orange-button">
        OddOneOut
      </Link>
    </div>
  </Card>

  <Card
    title="Card title"
    bordered={false}
    style={{
      width: '100%', // Adjust the width as needed
    }}
  >
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
    <div className="button-container">
      <Link to="/student/gamify" className="orange-button">
        OddOneOut
      </Link>
    </div>
  </Card>
  </div>
  </div>
  <Footer />
  </div>

)
    }