import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
export default function DeleteModal(props) {
    function deleter(){
                  //SEND AND AXIOS REQUEST TO DELETE THE RECIPE
                  try {
                    const response =  axios.get(`http://localhost:5000/delete/${props.rid}`);
                  } catch (error) {
                    console.log(error);
                  } 

                  props.onHide();
    }
    console.log(props);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="text-danger">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Are you sure you want to proceed with deleting this Recipe?
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={deleter    
        } className="btn-danger">Confirm</Button>
      </Modal.Footer>
    </Modal>
  );
}