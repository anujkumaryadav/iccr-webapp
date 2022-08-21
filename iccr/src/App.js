import React, { useState } from "react";
import ReactDOM from "react-dom";
import {  BrowserRouter as Router,  Routes,  Route,  Link, BrowserRouter  }   from 'react-router-dom';


import "./App.css";
import Dashboard from "./Pages/ICCR Dashboard/Dashboard";
import Login from "./Pages/Login/Login";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/IccrDashboard' element={<Dashboard/>} />
        </Routes>
      
      </BrowserRouter>
    </>

  );
}

export default App;