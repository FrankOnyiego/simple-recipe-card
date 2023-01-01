import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card} from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { NavLink, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik'
import axios from 'axios';

export default function Register() {
  const Navigate = useNavigate();
  // Declare state variables
  const Formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: ""
    },
    onSubmit: function(values){
      axios.post('http://localhost:5000/register',values).then(response=>{
      Navigate("/recipes");
      })
    }
  })

  return (
    <>
        <Header />
    <Container>
      <Row>
        <Col xs={12} md={6} style={{margin: 'auto auto'}}>
            <Card className="p-2 m-4">
                <Card.Title>Register</Card.Title>
                <Card.Body>
                <Form onSubmit={Formik.handleSubmit}>
                <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" value={Formik.values.name} onChange={Formik.handleChange} />
                </Form.Group>
                <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" value={Formik.values.email} onChange={Formik.handleChange} />
                </Form.Group>
                <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" value={Formik.values.password} onChange={Formik.handleChange} />
                </Form.Group>
                <Button variant="primary" className="mt-2" type="submit">
                    Register
                </Button>
                <br />
                <NavLink to="/login">Have an acoount ?</NavLink><br />
                <a href="#">Forgot password</a>
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
