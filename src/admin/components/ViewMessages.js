import React, {useState,useEffect} from 'react'
import Headertwo from '../Header2';
import Footer from '../../components/Footer';
import { Card, Button, ListGroup,ButtonGroup,Row,Col,Container,Form,FormGroup,InputGroup,Input,Label } from 'react-bootstrap';
import { Formik } from 'formik';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ReadMessage() {
    const {msid}= useParams();
    const [rep,setRep]=useState([]);

    async function getData() {
        const response = await axios.get(`http://localhost:5000/messages/${msid}`).then((data)=>{
          setRep(data.data);
        });    
        console.log(response,"we have a response");
    }
    useEffect(()=>{
        getData();
    },[])

    
  return (
   <>
   <Headertwo />
   {rep.map((item)=>(
                   <Container className="m-3">
                    <p className="text-left alert alert-info">
                       <span className="font-weight-bold">From: {item.email}</span> <br />        <br />
                       {item.message}
                    </p>
                   </Container>
   )) 
   }
    <Footer /> 
   </>
  )
} 

export default ReadMessage
