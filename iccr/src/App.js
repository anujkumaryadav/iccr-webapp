import React, { useState } from "react";
import ReactDOM from "react-dom";
import {  BrowserRouter as Router,  Routes,  Route,  Link, BrowserRouter  }   from 'react-router-dom';


import "./App.css";
import Dashboard from "./Pages/ICCR/Dashboard/Dashboard";
import InstituteLogIn from './Pages/InstituteLogIn/Login/InstituteLogIn';
import StudentLogin from './Pages/Login/StudentLogin'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<StudentLogin/>} />
          <Route path='/student-login' element={<StudentLogin/>} />
          <Route path='/institute-login' element={<InstituteLogIn/>} />
          <Route path='/IccrDashboard' element={<Dashboard/>} />
        </Routes>
      
      </BrowserRouter>
    </>

  );
}

export default App;