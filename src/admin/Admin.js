import React from 'react'

import RecipeTable from './Table'
import Footer from './Footer'
import Header from './Header'
import { NavLink } from 'react-router-dom'

function Admin() {
  return (
   <>
   <Header />
   <div style={{
    display: 'flex',
   }}>
          <div
          style={{
            backgroundColor: '#99c2f2',
            width: '40vw'
          }}
          >
               <ul className="navbar-nav d-flex justify-content-center text-center">
          <li className="nav-item">
            <NavLink className="nav-link active" to="/admin">RECIPES</NavLink>
          </li>
        </ul>
          </div>
          <RecipeTable />
   </div>
    <Footer />
   </>
  )
}

export default Admin 
 