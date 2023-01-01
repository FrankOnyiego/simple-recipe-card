import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card} from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
export default function Login() {
  const Navigate = useNavigate();
  const Formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: function(values){
      axios.post("http://localhost:5000/login",values).then(response=>{
        if(response){
          console.log("details found");
          Navigate("/recipes");
        }else{
          console.log("no records found");
        }
      });
    }
  })

  return (
    <>
        <Header />
    <Container>
      <Row>
        <Col xs={12} md={6} style={{margin: 'auto auto'}}>
            <Card className="p-2 m-4">
                <Card.Title>Login</Card.Title>
                <Card.Body>
                <Form onSubmit={Formik.handleSubmit}>
                <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" value={Formik.values.email} onChange={Formik.handleChange} />
                </Form.Group>
                <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" value={Formik.values.password} onChange={Formik.handleChange} />
                </Form.Group>
                <Button variant="primary" className="mt-2" type="submit">
                    Login
                </Button>
                <br />
                <NavLink to="/register">Dont Have an acoount ?</NavLink><br />
                <NavLink to="/forgot">Forgot password</NavLink>
                </Form>
                </Card.Body>
            </Card>
        </Col>
      </Row>
    </Container>
    <Footer />
    </>
  );
}
