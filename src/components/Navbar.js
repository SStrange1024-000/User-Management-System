import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss';
import './UserListStyle.scss';

function Navbar() {
  return (
    <div className='mainNav'>
      <div className="logo">
        <Link to="/"  className='link'>User Management</Link>
      </div>

      <div className="links">
        <Link to="/" className='link'>User List</Link>
        <Link to="/adduser" className='link'>Create User</Link>
      </div>
    </div>
  )
}

export default Navbar
