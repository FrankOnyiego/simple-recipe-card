import React from 'react'
import {NavLink,Link} from 'react-router-dom'
function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="./index.php">
    RECIPES
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="index.php">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="index.php#learn">Featured</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="about.php">About</a>
      </li>
    </ul>
  </div>
</nav>
    </>
  )
}

export default Header
