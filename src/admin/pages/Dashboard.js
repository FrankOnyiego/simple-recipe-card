import React, { useState, useEffect } from 'react';
import { Card,Container } from 'react-bootstrap'
import Headertwo from '../Header2';
import Footer from '../../components/Footer';
import { NavLink } from 'react-router-dom';

function Dashboard() {
  const [usersCount, setUsersCount] = useState(0);
  const [ordersCount, setOrdersCount] = useState(0);
  const [productsCount, setProductsCount] = useState(0);

  useEffect(() => {
    async function fetchCounts() {
      //const response = await fetch('/api/counts');
      //const data = await response.json();
      setUsersCount(1);
      setOrdersCount(2);
      setProductsCount(3);
    }
    fetchCounts();
  }, []);
  return (
    <>
    <Headertwo />
    <div className="container-fluid d-flex flex-wrap justify-content-between bg-light mt-4 p-3">
       <NavLink to="/admin"  className="text-left col-md-4 col-sm-12 bg-info m-1">
       <Card>
          <Card.Body>
            <Card.Title>Recipes</Card.Title>
            <Card.Text>
              {usersCount}
            </Card.Text>
          </Card.Body>
        </Card>
        </NavLink>

        <NavLink to="/messages" className="text-left col-md-4 col-sm-12 bg-info m-1">
        <Card>
          <Card.Body>
            <Card.Title>Messages</Card.Title>
            <Card.Text>
              {ordersCount}
            </Card.Text>
          </Card.Body>
        </Card>
        </NavLink>

        <Card className="text-left col-md-4 col-sm-12 bg-info m-1">
          <Card.Body>
            <Card.Title>Bookmarks</Card.Title>
            <Card.Text>
              {productsCount} 
            </Card.Text>
          </Card.Body>
        </Card>
    </div>

    <Footer />
    </>
  )
}

export default Dashboard
