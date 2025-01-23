import React from 'react'
import './styles.css'
import {Link, useLocation} from 'react-router-dom'

function Header() {
  const location = useLocation()
  const currentPath = location.pathname
  return (
    <div className="navbar">
      <div className="gradient"></div>
      <div className="links">
        <Link to="/" className={currentPath === '/' ? 'active' : ''}>
          Login
        </Link>
        <Link
          to="/customer-list"
          className={currentPath === '/customer-list' ? 'active' : ''}
        >
          Customer List
        </Link>
        <Link
          to="/customer-details"
          className={currentPath === '/customer-details' ? 'active' : ''}
        >
          Customer Details
        </Link>
      </div>
    </div>
  )
}

export default Header
