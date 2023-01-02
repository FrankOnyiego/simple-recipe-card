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
export default function EditModal(props) {
    const Formik = useFormik({
        initialValues: {
            title: "",
            ingredients: "",
            description: ""
        }
    })
      async function getData() {
          try {
            const response = await axios.get(`http://localhost:5000/recipes/${props.rid}`);
            recipes.push(response.data[0]);
            console.log(response.data[0].Title)
            title=response.data[0].Title
            ingredients=response.data[0].ingredients
            preparation=response.data[0].description
          } catch (error) {
            console.log(error);
          }
        }

          getData();

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
                <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Ingredients</Form.Label> 
                    <Form.Control as="textarea" rows={3} value={ingredients} placeholder="type ingredients..." />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Preparation</Form.Label>
                    <Form.Control as="textarea" rows={3} value={preparation} placeholder="type preparation steps..." />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}