import React from 'react'
import { NavLink } from 'react-router-dom'
function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light d-flex flex-wrap border-bottom bg-dark">

  <NavLink className="navbar-brand d-flex align-items-center mb-md-0 me-md-auto text-dark text-decoration-none text-white" to="/admin">RECIPES</NavLink>
  
    <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link active" to="/admin">RECIPES</NavLink>
          </li>
    </ul>

</nav>

  )
}

export default Header

