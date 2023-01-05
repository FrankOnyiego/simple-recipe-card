import Button from 'react-bootstrap/Button';
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import React, {useState,useEffect} from 'react'
import Form from 'react-bootstrap/Form';
import Headertwo from './Header2';
import Footer from './Footer';

function EditRecipe(props) {

const [rep,setRep]=useState([]);
const { id } = useParams();

async function getData() {
    const response = await axios.get(`http://localhost:5000/recipes/${id}`).then((data)=>{
      setRep(data.data);
    });

}

useEffect(()=>{
  getData();
},[])

  const Formik = useFormik({
    initialValues: {
      rid: `14`,
      ingredients: ``,
      description: ``
    },
    onSubmit: function(values){
      console.log(values);
      values.rid= id;
      axios.post(`http://localhost:5000/editrecipe`,values)
    }
})

console.log(rep[0],"state data");

  return (
    <>
    <Headertwo />
    {rep.map((item)=>(
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
                    <Form.Control as="textarea" rows={5} name="ingredients" onChange={Formik.handleChange} value={item.ingredients} placeholder="type ingredients..." />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Preparation</Form.Label>
                    <Form.Control as="textarea" rows={5} name="description" onChange={Formik.handleChange} value={item.description} placeholder="type preparation steps..." />
                </Form.Group>

                <Button variant="warning" type="submit" onSubmit={Formik.handleSubmit}>
                SAVE CHANGES 
                </Button>
            </Form>
    ))}
      <Footer />
    </>
  )
}

export default EditRecipe