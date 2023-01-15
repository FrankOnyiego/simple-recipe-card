import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import React, {useState,useEffect} from 'react'
import Form from 'react-bootstrap/Form';

export default function AddModal(props) {

    const Formik = useFormik({
        initialValues: {
            recipe: "",
            ingredients: "",
            description: "",
            file:""
        },
        onSubmit: function(values){
            axios.post('http://localhost:5000/addrecipe',values);
            console.log(values);
            Formik.resetForm({
                recipe: "",
                ingredients: "",
                description: ""
            })
        }
    })
    const handleFileChange = (e) => {
      Formik.setFieldValue('file', e.currentTarget.files[0]);
    };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter" 
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          ADD RECIPE
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
                <Form onSubmit={Formik.handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Recipe Name</Form.Label>
                    <Form.Control type="text" name="recipe" onChange={Formik.handleChange} value={Formik.values.title} placeholder="recipe name..." />
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Default file input example</Form.Label>
        <Form.Control
          type="file"
          name="file"
          onChange={handleFileChange}
        />
      </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Ingredients</Form.Label> 
                    <Form.Control as="textarea" rows={3} name="ingredients" onChange={Formik.handleChange} value={Formik.values.ingredients} placeholder="type ingredients..." />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Preparation</Form.Label>
                    <Form.Control as="textarea" rows={3} name="description" onChange={Formik.handleChange} value={Formik.values.description} placeholder="type preparation steps..." />
                </Form.Group>

                <Button variant="primary" className="mr-auto" type="submit" onClick={props.onHide}>
                    Submit
                </Button>
                </Form>
      </Modal.Body>
    </Modal>
  );
}