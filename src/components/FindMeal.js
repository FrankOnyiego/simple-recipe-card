import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FormGroup } from "reactstrap";
import "../styles/findmealform.css";
import { useNavigate, useParams } from 'react-router-dom';

function FindMeal() {
  const Navigate = useNavigate();
  return (
    <>
   <Formik
  initialValues={{ min: '', max: '', meal: '' }}
  onSubmit={(values, { setSubmitting }) => {
    // handle form submission here
    setTimeout(() => {
      setSubmitting(false);
    }, 400);
 
    Navigate(`/recipes/${values.min ? values.min : null}/${values.max ? values.max: null}/${values.meal ? values.meal: null}`);
  }}
>
  {({ isSubmitting }) => (
    <Form className="form">
      <div className="d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <Field type="number" name="min" min="0" placeholder="Min budget" />
          <ErrorMessage name="min" component="div" />
        </FormGroup>

        <FormGroup className="form__group">
          <Field type="number" name="max" min="0" placeholder="Max budget" />
          <ErrorMessage name="max" component="div" />
        </FormGroup>

        <FormGroup className="form__group">
          <Field type="text" name="meal" placeholder="Meal e.g Corns" />
          <ErrorMessage name="meal" component="div" />
        </FormGroup>

        <FormGroup className="form__group">
          <button type="submit" className="btn find__car-btn" disabled={isSubmitting}>
            Find Meal
          </button>
        </FormGroup>
      </div>
    </Form>
  )}
</Formik>
   </>
  )
}

export default FindMeal
