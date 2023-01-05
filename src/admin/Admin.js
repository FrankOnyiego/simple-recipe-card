import React from 'react'
import RecipeTable from './Table'
import Footer from './Footer'
import Headertwo from './Header2'
import { NavLink } from 'react-router-dom'

function Admin() {
  return (
   <>
   <Headertwo />
   {/*START OF DRAWER*/}
    <div style={{
          display: 'flex',
        }}>      
                <div
                    style={{
                      backgroundColor: '#99c2f2',
                      width: '40vw'
                    }}
                    className="collapse navbar-collapse"
                    id="navbarNav"
                >

                      <ul className="navbar-nav d-flex justify-content-center text-center" >
                        <li className="nav-item">
                          <NavLink className="nav-link active" to="/admin">RECIPES</NavLink>
                        </li>
                      </ul>
                </div>

          <RecipeTable />
   </div>
   {/*END OF DRAWER*/}
    <Footer />
   </>
  )
}

export default Admin 
 