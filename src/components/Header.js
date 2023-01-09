import React, {useState,useEffect} from 'react'
import {NavLink,Link} from 'react-router-dom'
import Home from "../pages/Home"
import axios from 'axios'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
let name;

function Header() {
  let signed;
  async function getUser() {
    try {
      const response = await axios.get('http://localhost:5000/username');
      if(response.data === 0){
        signed = false;
      }else if(response.data === 1){
        signed = true;
      }else{
        signed = false;
      }
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }
    getUser();

  return (
    <>
<Navbar bg="dark" expand="lg">
  <Navbar.Brand className="text-white" href="/">RECIPES</Navbar.Brand>
  <Navbar.Toggle className="bg-light" aria-controls="basic-navbar-nav" />
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
