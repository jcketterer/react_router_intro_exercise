import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className="Navbar">
      <NavLink exact to="/">
        Main Menu
      </NavLink>
      <NavLink exact to="/candy">
        Candy
      </NavLink>
      <NavLink exact to="/soda">
        Soda
      </NavLink>
      <NavLink exact to="/potato">
        Potato
      </NavLink>
    </nav>
  )
}

export default NavBar
