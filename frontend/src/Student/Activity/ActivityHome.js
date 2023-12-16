import StudentNavbar from "../../Components/StudentNavbar";
import React from 'react'
import { Link } from 'react-router-dom';
import './ActivityHome.css';

export default function ActivityHome() {
  return (
    <div>
      <StudentNavbar></StudentNavbar>
      <div className="container">
      <h2>Container Page</h2>
      <div className="button-container">
        <Link to="/student/gamify" className="orange-button">OddOneOut</Link>
        {/* <Link to="/page2" className="orange-button">Page 2</Link>
        <Link to="/page3" className="orange-button">Page 3</Link> */}
      </div>
    </div>
    </div>
  )
}

