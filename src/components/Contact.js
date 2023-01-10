import React, {useState,useEffect} from 'react'
import * as yup from 'yup';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';

function Contact() {
  const [successMessage, setSuccessMessage] = useState('');
    const validationSchema = yup.object().shape({
        name: yup.string().required('Name is required'),
        email: yup
          .string()
          .email('Invalid email')
          .required('Email is required'),
        message: yup.string().required('Message is required'),
      });

  return (
  <>
  <div>
   <Formik
    initialValues={{ name: '', email: '', message: '' }}
    validationSchema={validationSchema}
    onSubmit={(values, actions) => {
      // handle form submission here
      axios.post('http://localhost:5000/addmessage',values).then((response)=>{
        setSuccessMessage('Message sent successfully!');
        actions.resetForm();
      })

      console.log(values);
      actions.setSubmitting(false);
    }}
  >
    {({ isSubmitting, errors, touched }) => (
      <Form>
        <div className="form-group col-md-6">
          <label htmlFor="name">Name</label>
          <Field type="text" className="form-control" id="name" name="name" placeholder="Enter your name" />
          {errors.name && touched.name ? <div className="text-red">{errors.name}</div> : null}
        </div>
        <div className="form-group col-md-6"> 
          <label htmlFor="email">Email</label>
          <Field type="email" className="form-control" id="email" name="email" placeholder="Enter your email" />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="message">Message</label>
          <Field component="textarea" className="form-control" id="message" name="message" rows="7" />
          {errors.message && touched.message ? <div>{errors.message}</div> : null}
        </div>
        <div className="form-group col-md-6">
          <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
            Send Message
          </button>

          {successMessage && <div className="alert alert-success mt-4" role="alert">{successMessage}</div>}
        </div>
      </Form>
    )}
  </Formik>
  </div>
  </>
  )
}

export default Contact
