import React, {useState,useEffect} from 'react'
import {NavLink,Link} from 'react-router-dom'
import Home from "../pages/Home"
import axios from 'axios'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
let name;

function Header() {
  const[signed,sign]=useState(false);
  async function getUser() {
    try {
      const response = await axios.get('http://localhost:5000/username');
      console.log(response.data);
      if(response.data < 1){
        sign(false);
      }
      
      if(response.data > 0){
        sign(true);
      }
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getUser();
  },[])
    console.log(signed);
  return (
    <>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="fixed-top pl-2 pr-2">
  <Navbar.Brand className="text-white" href="/">RECIPES</Navbar.Brand>

  <Navbar.Toggle aria-controls="basic-navbar-nav" />

  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link className="text-white" href="/">Home</Nav.Link>
      <Nav.Link className="text-white" href="/about">About</Nav.Link>
      {signed ?
        <Nav.Link className="text-white" href="/login">Bookmarks</Nav.Link>
        :
        <Nav.Link className="text-white" href="/login">Login</Nav.Link>
      }
    </Nav>
  </Navbar.Collapse> 
</Navbar>
    </> 
  )
}

export default Header
