import React, {useState} from 'react';
import { Form, Button, Container, Row, Col, Card} from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useFormik } from 'formik';
import axios from 'axios';

export default function ForgotPasswordForm() {
    const[error,seterror]=useState('')
    const Formik = useFormik({
        initialValues: {
            email: ""
        },
        onSubmit: function(values){
            console.log(values);
            axios.post('http://localhost:5000/email',values).then((response)=>{

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
                <Card.Title>Reset password</Card.Title>
                <Card.Body>
                <Form onSubmit={Formik.handleSubmit}>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Enter confirmation email"  onChange={Formik.handleChange} />
                            <Form.Control.Feedback type="invalid">
                                {error}
                            </Form.Control.Feedback>
                        </Form.Group>
                <Button variant="warning" className="mt-2" type="submit">
                    Request Password Reset
                </Button>
                <br />

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
