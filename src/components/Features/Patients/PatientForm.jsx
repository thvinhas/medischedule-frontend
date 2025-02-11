import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
// import { fetchInsurances } from "../Insurances/services/InsuranceService";
import { addPatient, updatePatient } from "./services/PatientService";

const PatientForm = ({ show, handleClose, selectedValue }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    insurance: {
      id: "",
      name: "",
    },
  });
  const [insurances, setInsurances] = useState([]);

  useEffect(() => {
    const getInsurances = async () => {
      try {
        let response = await fetchInsurances();
        console.log(response);
        setInsurances(response);
      } catch (error) {
        console.error(error);
      }
    };
    getInsurances();
  }, []);

  useEffect(() => {
    console.log(selectedValue);
    if (selectedValue) {
      selectedValue.insurance_id = selectedValue.insurance.id;
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
        ? updatePatient(selectedValue.id, formData)
        : addPatient(formData);
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
            <Form.Label>Patient Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              autoFocus
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Patient phone</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Phone"
              autoFocus
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Insurance</Form.Label>
            <Form.Select
              name="insurance_id"
              value={formData.insurance_id || ""}
              onChange={handleChange}
            >
              <option value="">Select Insurance</option>
              {insurances.map((insurance) => (
                <option key={insurance.id} value={insurance.id}>
                  {insurance.name}
                </option>
              ))}
            </Form.Select>
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

export default PatientForm;
