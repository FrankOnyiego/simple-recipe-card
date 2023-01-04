import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useFormik } from 'formik';
import React, {useState,useEffect} from 'react'

export default function DeleteModal(props) {
  const[rid,setRid]=useState(1);

  const Formik = useFormik({
    initialValues: {

    },onSubmit: function(values){
      console.log("submit");
    }
  })

  async function setter(){
    setRid(props.rid);
    console.log(rid);
  }
  useEffect(()=>{
    setRid(props.rid);
      setter();
  },[])
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="text-danger">
          {rid}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Are you sure you want to proceed with deleting this Recipe?
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} onSubmit={Formik.handleSubmit} className="btn-danger">Confirm</Button>
      </Modal.Footer>
    </Modal>
  );
}