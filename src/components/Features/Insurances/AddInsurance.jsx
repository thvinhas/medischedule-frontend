import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { addInsurance } from "./services/InsuranceService";

const AddInsurance = ({ show, handleClose }) => {
  const [formData, setFormData] = useState({ name: "" });

  const handleChange = (e) => {
    let { name, value } = e.target;
    console.log(name);
    setFormData({ [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let response = addInsurance(formData);
      console.log(response);
    } catch (error) {
      nsole.error(error);
    }
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Insurance</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Insurance Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              autoFocus
              name="name"
              onChange={handleChange}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            Save Changes
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default AddInsurance;
