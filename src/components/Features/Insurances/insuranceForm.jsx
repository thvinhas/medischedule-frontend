import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { addInsurance, updateInsurance } from "./services/InsuranceService";
import { useDispatch } from "react-redux";
import { insuranceAdded } from "./InsuranceSlice";

const AddInsurance = ({ show, handleClose, selectedValue }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  let modalTitle = selectedValue ? "Edit" : "Add";

  useEffect(() => {
    if (selectedValue) {
      setName(selectedValue.name);
    } else {
      setName("");
    }
  }, [selectedValue]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) return; // Prevent empty submissions

    if (selectedValue) {
      // Edit mode
      dispatch(
        insuranceUpdated({
          id: selectedValue.id,
          name: name,
        })
      );
    } else {
      // Add mode
      dispatch(
        insuranceAdded({
          id: Date.now(), // Temporary ID
          name: name,
        })
      );
    }

    setName(""); // Clear input
    handleClose(); // Close modal after adding/editing
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
              value={name || ""}
              onChange={(e) => setName(e.target.value)}
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
