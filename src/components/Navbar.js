import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => (
  <nav className="navbar is-primary">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          My Blog
        </Link>
      </div>
    </div>
  </nav>
)

export default Navbar
