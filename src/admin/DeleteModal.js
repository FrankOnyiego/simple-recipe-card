import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function DeleteModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="text-danger">
          Confirm Action
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Are you sure you want to proceed with deleting this Recipe?
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="btn-danger">Confirm</Button>
      </Modal.Footer>
    </Modal>
  );
}