import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { deleteHospitals, fetchHospitals } from "./services/HospitalSerive";
import { Button } from "react-bootstrap";
import HospitalForm from "./HospitalForm";

const Hospital = () => {
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
  const [hospitals, sethospitals] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedHospital, setSelectedHospital] = useState(null);

  useEffect(() => {
    const getHospitals = async () => {
      try {
        let response = await fetchHospitals();

        sethospitals(response);
      } catch (error) {
        console.log(error);
      }
    };
    getHospitals();
  }, []);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Do you want delete this")) {
      try {
        await deleteHospitals(id);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handeEdit = (insurance) => {
    setSelectedHospital(insurance);
    setShowModal(true);
  };

  return (
    <>
      <div className="page">
        <div className="header">
          <h1>Hospitals</h1>
          <Button variant="primary" onClick={() => setShowModal(true)}>
            Create a new Hospital
          </Button>
        </div>
        <DataTable columns={columns} data={hospitals} />
      </div>
      <HospitalForm
        show={showModal}
        handleClose={handleClose}
        selectedValue={selectedHospital}
      />
    </>
  );
};
export default Hospital;
