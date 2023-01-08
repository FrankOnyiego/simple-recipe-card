import { Formik } from 'formik';
import { rules } from '../schema/rules';
import { Form, Button, Container, Row, Col, Card} from 'react-bootstrap';
import axios from 'axios'
import { useNavigate,NavLink } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Login() {
  axios.defaults.withCredentials = true;
  const Navigate = useNavigate();

  return (
    <>
    <Header />
    <Container>
      <Row>
        <Col xs={12} md={6} style={{margin: 'auto auto'}}>
            <Card className="p-2 m-4">
                <Card.Title>Login</Card.Title>
                <Card.Body>
    <Formik
      validationSchema={rules}
      onSubmit={(values, actions) => {
        // handle form submission
        const mail = values.email;

        axios.post("http://localhost:5000/login",values).then(response=>{
          if(response){
            console.log("details found");
            Navigate("/recipes");
          }else{
            console.log("no records found");
          }
        });
      }}
      initialValues={{ email: '', password: '' }}
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
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              isInvalid={touched.email && errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              isInvalid={touched.password && errors.password}
            />
            <Form.Control.Feedback type="invalid">
              {errors.password}
            </Form.Control.Feedback>
          </Form.Group>
          <Button variant="primary" className="mt-2" type="submit" disabled={isSubmitting}>
            Login
          </Button>
          <br />
                <NavLink to="/register">Don't Have an acoount ?</NavLink><br />
                <NavLink to="/forgot">Forgot password</NavLink>
        </Form>
      )}
    </Formik>
    </Card.Body>
            </Card>
        </Col>
      </Row>
    </Container>
    <Footer />
    </>
  );
};
