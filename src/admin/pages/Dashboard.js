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
       <NavLink to="/admin"  className="text-left col-md-4 col-sm-12 m-1" style={{
        textDecoration: 'none'
       }}>
       <Card style={{
        backgroundColor: '#cce6ff'
       }}>
          <Card.Body>
            <Card.Title>Recipes <i class="fas fa-utensil-fork"></i></Card.Title>
            <Card.Text>
              {usersCount}
            </Card.Text>
          </Card.Body> 
        </Card>
        </NavLink>

        <NavLink to="/messages" className="text-left col-md-4 col-sm-12 m-1" style={{
        textDecoration: 'none',
       }}>
        <Card style={{
        backgroundColor: '#cce6ff'
       }}>
          <Card.Body> 
            <Card.Title>
              <div  style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between'
              }}>
                <div>Messages</div>
                <div> <i class="fa-solid fa-message"></i></div>
              </div>              
              </Card.Title>
            <Card.Text>
              {ordersCount}
            </Card.Text>
          </Card.Body>
        </Card>
        </NavLink>

        <NavLink to="/admin" className="text-left col-md-4 col-sm-12 m-1" style={{
        textDecoration: 'none'
       }}>
        <Card style={{
        backgroundColor: '#cce6ff'
       }}>
          <Card.Body>
            <Card.Title>
              <div  style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between'
              }}>
                  <div> Bookmarks</div>
                  <div> <i class="fa-solid fa-bookmark"></i></div>
              </div>             
              </Card.Title>
            <Card.Text>
              {ordersCount}
            </Card.Text>
          </Card.Body>
        </Card>
        </NavLink>

        <NavLink to="/settings" className="text-left col-md-4 col-sm-12 m-1" style={{
        textDecoration: 'none'
       }}>
        <Card style={{
        backgroundColor: '#cce6ff'
       }}>
          <Card.Body>
            <Card.Title>
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between'
              }}>
                    <div>Settings </div>
                    <div><i class="fas fa-cogs"></i></div>
              </div>
              </Card.Title>
            <Card.Text>
              {ordersCount}
            </Card.Text>
          </Card.Body>
        </Card>
        </NavLink>
    </div>

    <Footer />
    </>
  )
}

export default Dashboard
