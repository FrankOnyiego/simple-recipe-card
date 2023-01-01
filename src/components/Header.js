import React from 'react'
import {NavLink,Link} from 'react-router-dom'
import Home from "../pages/Home"
function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink className="navbar-brand" to="/">
    RECIPES
  </NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/register">Register</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/login">Login</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about">About</NavLink>
      </li>
    </ul>
  </div>
</nav>
    </>
  )
}

export default Header
