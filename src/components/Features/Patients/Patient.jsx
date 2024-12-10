import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { deletePatient, fetchPatients } from "./services/PatientService";
import PatientForm from "./PatientForm";
import { Button } from "react-bootstrap";

const Patient = () => {
  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Insurance",
      selector: (row) => row.insurance.name,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div>
          <Button variant="primary" onClick={() => handeEdit(row)}>
            Edit
          </Button>
          <Button variant="danger" onClick={() => handleDelete(row.id)}>
            Delete
          </Button>
        </div>
      ),
    },
  ];
  const [patients, setPacients] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Do you want delete this")) {
      try {
        await deletePatient(id);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handeEdit = (insurance) => {
    setSelectedPatient(insurance);
    setShowModal(true);
  };

  useEffect(() => {
    const getPatients = async () => {
      try {
        let response = await fetchPatients();
        setPacients(response);
      } catch (error) {
        console.log(error);
      }
    };
    getPatients();
  }, []);

  return (
    <>
      <div className="page">
        <div>
          <h1>Insurances</h1>
          <Button variant="primary" onClick={() => setShowModal(true)}>
            Create a new Patient
          </Button>
        </div>
        <DataTable columns={columns} data={patients} />
      </div>
      <PatientForm
        show={showModal}
        handleClose={handleClose}
        selectedValue={selectedPatient}
      />
    </>
  );
};
export default Patient;
