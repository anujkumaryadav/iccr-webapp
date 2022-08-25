import React from 'react'
import { Link } from 'react-router-dom'
import '../Navbar/Navbar.css'

export default function Navbar() {
  return (
    <div className='nav-container '>

      <div className="nav-items">
          <span> Manage Activity </span>
          <span> Manage RO </span>
          <span> Student Activity </span>  
      </div>

      <div className='nav-login '>
        <span>Logout</span>
      {/* <Link to="/login">Login</Link> */}
      </div>

      </div>
  )
}
