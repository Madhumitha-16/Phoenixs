import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Register from './Register';
/*import Forum from './Forum';
import PostDetails from './PostDetails'; */
import Temp from './Home';
import Home from './Student/Home';
import PostDetails from './Student/PostDetails';
import Forum from './Student/Forum';
import THome from './Teacher/THome';
import Mhome from './Ministry/Mhome';

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
          path="/post-details"
          element={
              <PostDetails />
          }
        />

        < Route
          path="/Ministry/home"
          element={
              <Mhome />
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

        {/*<Route 
         path="/forum" 
         element={<Forum />} />
        
        <Route 
         path="/post-details" 
        element={<PostDetails />} /> */ }
          
        <Route 
         path="/teacher/home" 
         element={<THome />} 
         />

        </Routes>
  </BrowserRouter>
     
  );
}

export default App;
