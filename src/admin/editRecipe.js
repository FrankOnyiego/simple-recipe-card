import Button from 'react-bootstrap/Button';
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import React, {useState,useEffect} from 'react'
import Form from 'react-bootstrap/Form';
import Headertwo from './Header2';
import Footer from './Footer';

let recipess = [];
let title="";
let ingredients = "";
let preparation = "";
let rid;

function EditRecipe(props) {
const [rep,setRep]=useState([]);
const {id} = useParams();

async function getData() {
  try {
    const response = await axios.get(`http://localhost:5000/recipes/${id}`).then((data)=>{
      setRep(data.data);

      recipess.length = 0;
      recipess.push(data.data[0]);
      //console.log(recipes,"recipes"); 
      title=data.data[0].Title
      ingredients=data.data[0].ingredients
      preparation=data.data[0].description 
      rid=data.data[0].rid
    });
    console.log(response,"success");
  } catch (error) {
    console.log(error);
  }
}

useEffect(()=>{
  getData();
},[])

  const Formik = useFormik({
    initialValues: {
        title: title,
        ingredients: ingredients,
        description: preparation
    },
    onSubmit: function(values){
      values.rid = props.rid;
      console.log(values)
    }
})

console.log(rep);

  return (
    <>
    <Headertwo />
            <Form style={{ 
              width: '90vw',
              marginLeft: '5vw',
              marginTop:'5vh',
              marginBottom: '5vh'
            }}
            onSubmit={Formik.handleSubmit}
            >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Ingredients</Form.Label> 
                    <Form.Control as="textarea" rows={5} name="ingredients" onChange={Formik.handleChange} value={ingredients} placeholder="type ingredients..." />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Preparation</Form.Label>
                    <Form.Control as="textarea" rows={5} name="description" onChange={Formik.handleChange} value={preparation} placeholder="type preparation steps..." />
                </Form.Group>

                <Button variant="primary" type="submit" onSubmit={Formik.handleSubmit}>
                    Submit
                </Button>
            </Form>
      <Footer />
    </>
  )
}

export default EditRecipe
