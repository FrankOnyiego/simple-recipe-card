import Button from 'react-bootstrap/Button';
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import { Form } from 'formik';
import React, {useState,useEffect} from 'react'
import Headertwo from './Header2';
import Footer from './Footer';

let recipess = [];
let title="";
let ingredients = "";
let preparation = "";
let rid;

function DeleteRecipe(props) {
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
        rid: ""
    }
})

  return (
    <>
    <Headertwo />
    <div className="alert alert-warning m-4">
        <strong>Warning!</strong> Proceeding with this action will delete the recipe!
    </div>
    {rep.map((item)=>(
        <div className="panel panel-warning m-4" key={item.rid}>
            <div className="panel-heading"><h2>{title}</h2></div>
            <div className="panel-body">
                <h5>Ingredients</h5>
                <p>{item.ingredients}</p>
                <br />
                <h5>Preparation</h5> 
                <p>{item.description}</p>
            </div>

            <Form
            onSubmit={Formik.handleSubmit}
            >
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Preparation</Form.Label>
                    <Form.Control as="number" name="rid" onChange={Formik.handleChange} value={preparation} placeholder="type preparation steps..." />
                </Form.Group>

                <Button variant="primary" type="submit" onSubmit={Formik.handleSubmit}>
                    Submit
                </Button>
            </Form>
        </div>
    ))}
      <Footer />
    </>
  )
}

export default DeleteRecipe
