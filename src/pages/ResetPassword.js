import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Form, Button, Container, Row, Col, Card} from 'react-bootstrap';
import { Formik } from 'formik'
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required')
})

function ResetPassword() {
    const Navigate = useNavigate();
    const {email} = useParams();


  return (
    <>
        <Header />
        <Container>
      <Row>
        <Col  style={{margin: 'auto auto'}}>
            <Card className="p-2 m-4">
                <Card.Title>Reset password</Card.Title>
                <Card.Body>
                <Formik
      initialValues={{
        password: '',
        confirmpassword: ''
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {

        values.email = "franknyaboga8@gmail.com";
        axios.post("http://localhost:5000/passwordchange",values).then(response=>{
          if(response){
            console.log("details found");
            Navigate("/recipes");
          }else{
            console.log("no records found");
          }
        });

        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          setSubmitting(false)
        }, 400)
        
      }}
    >
      {({    
       values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting, }) => (
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                          <Form.Label>New password</Form.Label>
                          <Form.Control type="password" name="password"
                                    value={values.password} onChange={handleChange}
                                    onBlur={handleBlur}
                                    isInvalid={touched.password && errors.password}/>
                          <Form.Control.Feedback type="invalid">
                            {errors.password}
                          </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="confirmpassword"
              value={values.confirmpassword}
              onChange={handleChange}
              onBlur={handleBlur}
              isInvalid={touched.confirmpassword && errors.confirmpassword}
            />
            <Form.Control.Feedback type="invalid">
              {errors.confirmpassword}
            </Form.Control.Feedback>
          </Form.Group>

                    <Button variant="primary" className="mt-2" type="submit">
                        Save
                    </Button>
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
  )
}

export default ResetPassword
