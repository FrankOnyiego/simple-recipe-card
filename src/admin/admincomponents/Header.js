import React from 'react'
import {NavLink,Link} from 'react-router-dom'

function Header() {
    /* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  return (
    <>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <button type="button" className="btn btn-primary" data-toggle="drawer" data-target="#drawer-3" onclick="openNav()">
        Launch demo drawer
    </button>
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
        </ul>
    </div>
</nav>

<div id="mySidenav" className="sidenav">
  <NavLink to="#" className="closebtn" onclick="closeNav()">&times;</NavLink>
  <NavLink to="#">About</NavLink>
  <NavLink to="#">Services</NavLink>
  <NavLink to="#">Clients</NavLink>
  <NavLink to="#">Contact</NavLink>
</div>
    </>
  )
}

export default Header
