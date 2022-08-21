import React, { useState } from "react";
import ReactDOM from "react-dom";
import {  BrowserRouter as Router,  Routes,  Route,  Link, BrowserRouter  }   from 'react-router-dom';


import "./App.css";
import Login from "./Pages/Login/Login";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      
      </BrowserRouter>
    </>

  );
}

export default App;