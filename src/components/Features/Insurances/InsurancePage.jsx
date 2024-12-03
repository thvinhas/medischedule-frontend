import { Button, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

import { deleteInsurance, fetchInsurances } from "./services/InsuranceService";
import AddInsurance from "./AddInsurance";
import EditInsurace from "./EditInsurance";

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
  const [insurances, setInsurances] = useState([]);
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [selectedInsurance, setSelectedInsurance] = useState(null);

  const handleClose = () => {
    setShowAdd(false);
    setShowEdit(false);
  };
  const handleShowAdd = () => setShowAdd(true);
  const handleDelete = async (id) => {
    if (window.confirm("Do you want delete this")) {
      try {
        await deleteInsurance(id);
      } catch (error) {
        console.log(error);
      }
    }
  };
  const handeEdit = (insurance) => {
    setSelectedInsurance(insurance);
    setShowEdit(true);
  };

  useEffect(() => {
    const getInsurances = async () => {
      try {
        let response = await fetchInsurances();
        setInsurances(response);
      } catch (error) {
        console.log(error);
      }
    };
    getInsurances();
  }, []);

  return (
    <>
      <div className="page">
        <div className="header">
          <h1>Insurances</h1>
          <Button variant="primary" onClick={handleShowAdd}>
            Create a new Insurance
          </Button>
        </div>
        <DataTable columns={columns} data={insurances} />
      </div>
      <AddInsurance show={showAdd} handleClose={handleClose} />
      {selectedInsurance && showEdit && (
        <EditInsurace
          show={showEdit}
          handleClose={handleClose}
          selectedValue={selectedInsurance}
        />
      )}
    </>
  );
};
export default Insurance;
