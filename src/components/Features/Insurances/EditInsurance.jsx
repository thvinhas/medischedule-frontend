import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { editInsurance } from "./services/InsuranceService";

const EditInsurace = ({ show, handleClose, selectedValue }) => {
  const [formData, setFormData] = useState({ name: "" });

  useEffect(() => {
    if (selectedValue) {
      setFormData({ name: selectedValue.name });
    }
  }, [selectedValue]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      editInsurance(selectedValue.id, formData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Insurancess</Modal.Title>
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
              value={formData.name}
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

export default EditInsurace;
