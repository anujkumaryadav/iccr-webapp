import React, { useState } from "react";
import ReactDOM from "react-dom";
import {  BrowserRouter as Router,  Routes,  Route,  Link, BrowserRouter  }   from 'react-router-dom';


import "./App.css";
import Dashboard from "./Pages/ICCR/Dashboard/Dashboard";
import InstituteLogIn from './Pages/Institute/Login/InstituteLogIn';
import StudentLogin from './Pages/Student/Login/StudentLogin'
import ICCRDashboard from './Pages/ICCR/Dashboard/Dashboard'
import StudentDashboard from "./Pages/Student/Dashboard/StudentDashboard";
import ROLogin from "./Pages/RO/Login/ROLogin";
import RODashboard from "./Pages/RO/Dashboard/Dashboard";
import ICCRManageRO from "./Pages/ICCR/Dashboard/ManageRO";
import ROrequestEvent from "./Pages/RO/Dashboard/ROrequestEvent";
import ICCRManageEvent from "./Pages/ICCR/Dashboard/ManageEvent";
import Home from "./Pages/Home/Home";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/student-login' element={<StudentLogin/>} />
          <Route path='/institute-login' element={<InstituteLogIn/>} />
          <Route path='/ROLogin' element={<ROLogin/>} />

          <Route path='/studentDashboard' element={<StudentDashboard/>} />
          <Route path='/IccrDashboard' element={<ICCRDashboard/>} />
          <Route path='/RODashboard' element={<RODashboard/>} />

          <Route path='/manageRO' element={<ICCRManageRO/>} />
          <Route path='/manageEvent' element={<ICCRManageEvent/>} />
          <Route path='/requestEvent' element={<ROrequestEvent/>} />
        </Routes>
      
      </BrowserRouter>
    </>

  );
}

export default App;