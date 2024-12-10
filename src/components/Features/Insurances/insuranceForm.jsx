import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { addInsurance, updateInsurance } from "./services/InsuranceService";
import Insurance from "./InsurancePage";

const AddInsurance = ({ show, handleClose, selectedValue }) => {
  const [formData, setFormData] = useState({ name: "" });
  let modalTitle = selectedValue ? "Edit" : "Add";

  useEffect(() => {
    if (selectedValue) {
      setFormData(selectedValue);
    } else {
      setFormData({ name: "" });
    }
  }, [selectedValue]);

  const handleChange = (e) => {
    let { name, value } = e.target;

    setFormData(...formdata, { [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      let response = selectedValue
        ? updateInsurance(selectedValue.id, formData)
        : addInsurance(formData);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle} Insurance</Modal.Title>
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

export default AddInsurance;
