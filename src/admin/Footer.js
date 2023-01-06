import React from 'react'
import { NavLink } from 'react-router-dom'
function Footer() {
  return (
    <footer className="bg-dark text-left text-lg-start">
    <div className="text-center p-3">
      <NavLink to="/recipes" style={{
        textDecoration: 'none'
      }}>Recipes.com Home</NavLink>
    </div>
  </footer>
  )
} 

export default Footer
