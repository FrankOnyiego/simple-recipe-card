import React,{useState,useEffect} from 'react'
import Headertwo from '../Header2'
import Footer from '../../components/Footer'
import { Formik } from 'formik';
import { Form } from 'react-bootstrap';
import { Container, Row, Col, FormGroup, Label, Input, Button } from 'reactstrap';
import * as Yup from 'yup';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Reply() {
    const { msid } = useParams();

    const[recipes, setRecipes]=useState([]);
  
      async function getData() {
          try {
            const response = await axios.get(`http://localhost:5000/reply/${msid}`);
            console.log(response.data);
            setRecipes(response.data);
          } catch (error) {
            console.log(error);
          }
        }
        
        useEffect(()=>{
          getData();
        },[])

  return (
   <>
   <Headertwo />
   {recipes.map((item)=>(
            <Container className="m-3">
            <p className="text-left">
                <span className="font-weight-bold">From: {item.email}</span> <br />        <br />
                {item.message}
        </p>
              <Row>
                <Col md={{ size: 8, offset: 2 }}>
                <Formik
      onSubmit={(values, actions) => {
        // handle form submission
        values.to = item.email;
        values.email = item.email;
        values.msg = item.message;

        axios.post(`http://localhost:5000/email`,values).then(response=>{
          if(response){
            console.log("reply sent.");
          }else{
            console.log("Failed to send reply.");
          }
        });
      }}
      initialValues={{ message: ''}}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Type reply</Form.Label>
            <Form.Control
              as="textarea"
              name="message"
              rows={7}
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              isInvalid={touched.email && errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>

          <Button variant="primary" className="mt-2" type="submit" disabled={isSubmitting}>
            Send Reply
          </Button>
        </Form>
      )}
    </Formik>
                </Col>
              </Row>
            </Container>
   ))
    }
   <Footer />
   </>
  )
}

export default Reply
