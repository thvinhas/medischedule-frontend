import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addInsurance, updateInsurance } from "./InsuranceSlice";

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
      e.preventDefault();
      dispatch(updateInsurance({ id: selectedValue.id, name }))
        .unwrap()
        .then(() => {
          alert("Insurance updated successfully!");
          handleClose();
        })
        .catch((error) => console.error("Error updating insurance:", error));
    } else {
      // Add mode
      dispatch(addInsurance({ name }))
        .unwrap()
        .then(() => {
          alert("Insurance updated successfully!");
          handleClose();
        })
        .catch((error) => console.error("Error updating insurance:", error));
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
