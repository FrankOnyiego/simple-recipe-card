import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import React, {useState,useEffect} from 'react'
import Form from 'react-bootstrap/Form';

let recipes = [];
let title="";
let ingredients = "";
let preparation = "";
let rid;
export default function EditModal(props) {
  async function getData() {
    try {
      const response = await axios.get(`http://localhost:5000/recipes/${props.rid}`);
      recipes.push(response.data[0]);
      console.log(response.data[0].Title)
      title=response.data[0].Title
      ingredients=response.data[0].ingredients
      preparation=response.data[0].description
      rid=response.data[0].rid
    } catch (error) {
      console.log(error);
    }
  }
    getData();

    const Formik = useFormik({
        initialValues: {
            rid: props.rid,
            title: title,
            ingredients: ingredients,
            description: preparation
        },
        onSubmit: function(values){
          values.rid = props.rid;
          console.log(values)
        }
    })

  return (
 recipes &&
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter" 
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
                <Form onSubmit={Formik.handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Ingredients</Form.Label> 
                    <Form.Control as="textarea" rows={3} name="ingredients" onChange={Formik.handleChange} value={ingredients} placeholder="type ingredients..." />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Preparation</Form.Label>
                    <Form.Control as="textarea" rows={3} name="description" onChange={Formik.handleChange} value={preparation} placeholder="type preparation steps..." />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={props.onHide}>
                    Submit
                </Button>
                </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button >Close</Button>
      </Modal.Footer>
    </Modal>
  );
}