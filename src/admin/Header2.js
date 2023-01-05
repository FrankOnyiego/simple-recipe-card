import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
 export default function Headertwo() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="pl-2 pr-2">
      <Navbar.Brand><Link to="/admin" style={{
              color: 'white',
              textDecoration: 'none'
            }}>RECIPE</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>

      <Navbar.Collapse id="responsive-navbar-nav" style={{
        marginRight: "0px",
      }}>
        <Nav className="ml-auto">
            <Nav.Link><Link to="/admin" style={{
              color: 'white',
              textDecoration: 'none'
            }}>Home</Link></Nav.Link>
           <Nav.Link> <Link to="/admin"
           style={{
            color:'white',
            textDecoration: 'none'
           }}
           >About</Link> </Nav.Link>
        </Nav> 
      </Navbar.Collapse>
    </Navbar>
  );
}
