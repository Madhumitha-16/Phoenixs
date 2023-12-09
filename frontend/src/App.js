import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Register from './Register';
import Forum from './Student/Forum';
import PostDetails from './Teacher/PostDetails';
import Landing from './Landing';
import Temp from './Home';
import Home from './Student/Home';

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
          path="/login"
          element={
              <Login />
          }
        />
        <Route
          path="/landing"
          element={
              <Landing />
          }
        />
        
         <Route 
         path="/register" 
         element={<Register />} />

        <Route 
         path="/forum" 
         element={<Forum />} />

        
        <Route 
         path="/post-details" 
         element={<PostDetails />} />

        </Routes>
  </BrowserRouter>
     
  );
}

export default App;
