import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { addSpecilty, updateSpecilty } from "./SpecialityService";

const SpecialityForm = ({ show, handleClose, selectedValue }) => {
  const [formData, setFormData] = useState({ name: "" });

  useEffect(() => {
    console.log(selectedValue);
    if (selectedValue) {
      setFormData(selectedValue);
    } else {
      setFormData({ name: "" });
    }
  }, [selectedValue]);

  const handleChange = (e) => {
    let { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let response = selectedValue
        ? updateSpecilty(selectedValue.id, formData)
        : addSpecilty(formData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Patient</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Specialty</Form.Label>
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

export default SpecialityForm;
