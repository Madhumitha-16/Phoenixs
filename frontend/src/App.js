import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Register from './Register';
import Temp from './Home';
import Home from './Student/Home';
import PostDetails from './PostDetails';
import Forum from './Forum';
import Mhome from './Ministry/Mhome';
import THome from './Teacher/THome';
import OddOneOut from './Student/Activity/OddOneOut'
import Voice from './voice';
import VoiceForm from './Form';
import UIforconversion from './Braille-Converter/UIforconversion';
import DetailsTable from './Student/WebScrapping/DetailsTable';


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
          path="/Ministry/home"
          element={
              <Mhome />
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
         path="/register" 
         element={<Register />} />

         <Route 
         path="/convert-to-braille" 
         element={<UIforconversion />} />

        <Route 
         path="/School-details" 
         element={<DetailsTable />} />

        </Routes>
        

  </BrowserRouter>
     
  );
}

export default App;
