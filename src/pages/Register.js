import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card} from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { NavLink, useNavigate } from 'react-router-dom';
import { useFormik,Formik } from 'formik'
import axios from 'axios';
import * as yup from 'yup';

export default function Register() {
  const regrules = yup.object().shape({
    name: yup.string().trim().required('*This input field is required'),
    email: yup.string().email('Please enter a valid email address').required('*This input field is required'),
    password: yup.string().min(8, 'Password must be at least 8 characters long').required('*This input field is required'),
  });
  const Navigate = useNavigate();


  return (
    <>
        <Header />
    <Container>
      <Row>
        <Col xs={12} md={6} style={{margin: 'auto auto'}}>
            <Card className="p-2 m-4">
                <Card.Title>Register</Card.Title>
                <Card.Body>
                <Formik
      validationSchema={regrules}
      onSubmit={(values, actions) => {
        // handle form submission
      }}
      initialValues={{ email: '', password: '', name: ''}}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      })=>(
                <Form onSubmit={handleSubmit}>
                <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" 
                              value={values.name}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              isInvalid={touched.name && errors.name}
                />
                <Form.Control.Feedback type="invalid">
              {errors.name}
            </Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" 
                              value={values.email}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              isInvalid={touched.email && errors.email}
                />
                            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" 
                              value={values.password}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              isInvalid={touched.password && errors.password}
                />
                            <Form.Control.Feedback type="invalid">
              {errors.password}
            </Form.Control.Feedback>
                </Form.Group>
                <Button variant="primary" className="mt-2" type="submit">
                    Register
                </Button>
                <br />
                <NavLink to="/login">Have an acoount ?</NavLink><br />
                <NavLink to="/forgot">Forgot password</NavLink>
                </Form>
      )}

      </Formik>
                </Card.Body>
            </Card>
        </Col>
      </Row>
    </Container>
    <Footer />
    </>
  );
}
