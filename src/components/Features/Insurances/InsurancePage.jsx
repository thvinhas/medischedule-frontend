import { Button, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

import AddInsurance from "./insuranceForm";
import { useDispatch, useSelector } from "react-redux";
import { fetchInsurances, deleteInsurance } from "./InsuranceSlice";

const Insurance = () => {
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
  const dispatch = useDispatch();
  const insurances = useSelector((state) => state.insurances.insurances);

  const [showModal, setShowModal] = useState(false);
  const [selectedInsurance, setSelectedInsurance] = useState(null);

  const handleClose = () => {
    setSelectedInsurance(null);
    setShowModal(false);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Do you want to delete this?")) {
      dispatch(deleteInsurance(id))
        .unwrap()
        .then(() => alert("Insurance deleted successfully!"))
        .catch((error) => console.error("Error deleting insurance:", error));
    }
  };

  const handeEdit = (insurance) => {
    setSelectedInsurance(insurance);
    setShowModal(true);
  };

  useEffect(() => {
    dispatch(fetchInsurances());
  }, [dispatch]);

  return (
    <>
      <div className="page">
        <div className="header">
          <h1>Insurances</h1>
          <Button variant="primary" onClick={() => setShowModal(true)}>
            Create a new Insurance
          </Button>
        </div>
        <DataTable columns={columns} data={insurances} />
      </div>
      <AddInsurance
        show={showModal}
        handleClose={handleClose}
        selectedValue={selectedInsurance}
      />
    </>
  );
};
export default Insurance;
