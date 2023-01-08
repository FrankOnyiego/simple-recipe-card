import { Formik } from 'formik';
import { rules } from '../schema/editRules';
import { Form, Button, Container, Row, Col, Card} from 'react-bootstrap';
import axios from 'axios'
import { useNavigate,NavLink } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import Headertwo from './Header2';

export default function EditRecipe(props) {
  axios.defaults.withCredentials = true;
  const Navigate = useNavigate();

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
  
  return (
    <>
    <Headertwo />
    <Container>
{rep.map((item)=>(
    <Formik key={item.rid}
    validationSchema={rules}
    onSubmit={(values, actions) => {
      //Handle Edit Form
      console.log("submit activity");
      values.rid= id;
      axios.post(`http://localhost:5000/editrecipe`,values)
    }}

    initialValues={{ ingredients: `${item.ingredients}`, preparation: `${item.description}` }}
  >
    {({
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting,
    }) => (
      <Form onSubmit={handleSubmit}>
          <h1>{item.Title}</h1>
        <Form.Group>
          <Form.Label><h4>Ingredients</h4></Form.Label>
          <Form.Control
            className="form-control" as="textarea" rows={5}
            name="ingredients"
            row={5}
            value={values.ingredients}
            onChange={handleChange}
            onBlur={handleBlur}
            isInvalid={touched.ingredients && errors.ingredients}
          />
          <Form.Control.Feedback type="invalid">
            {errors.ingredients}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label><h4>Preparation</h4></Form.Label>
          <Form.Control
            className="form-control" as="textarea" rows={5}
            name="preparation"
            value={values.preparation}
            onChange={handleChange}
            onBlur={handleBlur}
            isInvalid={touched.preparation && errors.preparation}
          />
          <Form.Control.Feedback type="invalid">
            {errors.preparation}
          </Form.Control.Feedback>
        </Form.Group>
        <Button variant="success" className="mt-2" type="submit" disabled={isSubmitting}>
          SAVE CHANGES
        </Button>
      </Form>
    )}
  </Formik>
))}
    </Container>
    <Footer />
    </>
  );
};
