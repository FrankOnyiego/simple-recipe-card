import React,{useState,useEffect} from 'react'
import Headertwo from '../Header2'
import Footer from '../../components/Footer'
import { Formik, Form, Field } from 'formik';
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
                    initialValues={{ message: '' }}

                    onSubmit={(values, { setSubmitting, resetForm }) => {
                      // Send the message here
                       values.to = item.email;
                        axios.post('http://localhost:5000/email',values);

                      console.log(values.message);
                      setSubmitting(false);
                      resetForm();
                    }}
                  >
                    {({ errors, touched, isSubmitting }) => (
        
                      <Form>
                        <FormGroup>
                          <Label for="message"> <span className="font-weight-bold">To: {item.email}</span> </Label>
                          <Input type="textarea" 
                          name="message" 
                          id="message" 
                          placeholder="Enter your reply"  
                        rows={5}/>

                        </FormGroup>
                        <Button color="primary" type="submit" disabled={isSubmitting}>
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
