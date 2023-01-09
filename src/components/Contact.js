import React from 'react'
import * as yup from 'yup';
import { Formik, Form, Field } from 'formik';

function Contact() {
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
   <Formik
    initialValues={{ name: '', email: '', message: '' }}
    validationSchema={validationSchema}
    onSubmit={(values, actions) => {
      // handle form submission here
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
          <Field component="textarea" className="form-control" id="message" name="message" rows="3" />
          {errors.message && touched.message ? <div>{errors.message}</div> : null}
        </div>
        <div className="form-group col-md-6">
          <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
            Submit
          </button>
        </div>
      </Form>
    )}
  </Formik>
  </>
  )
}

export default Contact
