import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Temp from './Home';
import Home from './Student/Home';
import PostDetails from './PostDetails';
import Forum from './Forum';
import Mhome from './Ministry/Mhome';
import THome from './Teacher/THome';
import OHome from './Organization/OHome.js';
import OddOneOut from './Student/Activity/OddOneOut'
import Voice from './voice';
import VoiceForm from './Form';
import UIforconversion from './Braille-Converter/UIforconversion';
import SchemesTable from './Student/WebScrapping/SchemesTable';
import ActivityHome from './Student/Activity/ActivityHome';
import DonorPage from './Student/DonorPage';
import SRegister from './Student/SRegister';
import TRegister from './Teacher/TRegister';
import TestTable from './Student/Assessment/TestTable.js';
import Domain1 from './Student/Assessment/Domain1.js';
import Gradesheet from './Student/Assessment/Gradesheet.js';
import ORegister from './Organization/ORegister.js';
import DisplayingSchools from './Student/DisplayingSchools.js';
import StudentApplication from './Organization/StudentApplication.js';
import StudentQueries from './Ministry/StudentQueries.js';
import OrganizationQueries from './Ministry/OrganizationQueries.js';
import TeacherApplication from './Organization/TeacherApplication.js';


function App() {
 
  return (

  <BrowserRouter>
      <Routes>
      <Route
          path="/"
          element={
              <Temp />
          }
        />
         <Route
          path="/student/home"
          element={
              <Home />
          }
        />
         <Route
          path="/student/gamify"
          element={
              <OddOneOut/>
          }
        />
        <Route
          path="/student/AHome"
          element={
              <ActivityHome/>
          }
        />

        <Route
          path="/login"
          element={
              <Login />
          }
        />
        <Route
          path="/post-details"
          element={
              <PostDetails />
          }
        />
         <Route
          path="/teacher/home"
          element={
              <THome />
          }
        />
        <Route
        path="/Organization/home"
        element={
            <OHome />
        }
      />
      <Route
        path="/Organization/Teacher-Application"
        element={
            <TeacherApplication />
        }
      />
      <Route
      path="/Organization/Student-Application"
      element={
          <StudentApplication />
      }
    />
        <Route
          path="/Ministry/home"
          element={
              <Mhome />
          }
        />
        <Route
          path="/Ministry/Organization-Queries"
          element={
              <OrganizationQueries />
          }
        />
        <Route
          path="/Ministry/Student-Queries"
          element={
              <StudentQueries />
          }
        />
        <Route
          path="/voice"
          element={
              <Voice />
          }
        />

         <Route
          path="/form"
          element={
              <VoiceForm />
          }
        />

        <Route
          path="/forum"
          element={
              <Forum />
          }
        />
  

         <Route 
         path="/convert-to-braille" 
         element={<UIforconversion />} />
         
         <Route 
         path="/Scheme-details" 
         element={<SchemesTable />} />

         <Route 
         path="/Student-register" 
         element={<SRegister />} />

         
         <Route 
         path="/Teacher-register" 
         element={<TRegister/>} />

        <Route 
         path="/Donor-page" 
         element={<DonorPage/>} />

        <Route 
         path="/TestTable" 
         element={<TestTable/>} />

        <Route 
         path="/gradesheet" 
         element={<Gradesheet />} />
         
         <Route 
         path="/domain-test/1" 
         element={<Domain1/>} />

        <Route 
         path="/organisation-register" 
         element={<ORegister/>} />

<Route 
         path="/display-schools" 
         element={<DisplayingSchools/>} />

<Route 
         path="/Organization/Teacher-Application" 
         element={<TeacherApplication/>} />

         <Route 
         path="/Ministry/Organization-Queries" 
         element={<OrganizationQueries/>} />

         <Route 
         path="/Ministry/Student-Queries" 
         element={<StudentQueries/>} />

         <Route 
         path="/Organization/Student-Application" 
         element={<StudentApplication/>} />

        </Routes>
        
        

  </BrowserRouter>
     
  );
}

export default App;
