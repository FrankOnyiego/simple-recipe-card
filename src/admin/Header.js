import React from 'react'
import { NavLink } from 'react-router-dom'
function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex flex-wrap border-bottom bg-dark pr-2 pl-2">
            <button className="navbar-toggler btn-light navbar-brand d-flex align-items-center mb-md-0 me-md-auto text-dark text-decoration-none bg-danger" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link active pl-2 text-white" to="/admin">HOME</NavLink>
                </li>
            </ul>
    </nav>
  )
}

export default Header

