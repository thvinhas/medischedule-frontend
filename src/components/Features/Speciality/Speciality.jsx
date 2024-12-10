import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { deleteSpecilty, fetchServices } from "./services/SpecialityService";
import { Button } from "react-bootstrap";
import SpecialityForm from "./services/SpecialityForm";

const Specialty = () => {
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
  const [specialites, setSpecialites] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedSpeciality, setSelectedSpeciality] = useState(null);

  useEffect(() => {
    const getSpecialites = async () => {
      try {
        let response = await fetchServices();
        setSpecialites(response);
      } catch (error) {
        console.log(error);
      }
    };
    getSpecialites();
  }, []);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Do you want delete this")) {
      try {
        await deleteSpecilty(id);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handeEdit = (insurance) => {
    setSelectedSpeciality(insurance);
    setShowModal(true);
  };

  return (
    <>
      <div className="page">
        <div className="header">
          <h1>Specialites</h1>
          <Button variant="primary" onClick={() => setShowModal(true)}>
            Create a new Patient
          </Button>
        </div>
        <DataTable columns={columns} data={specialites} />
      </div>
      <SpecialityForm
        show={showModal}
        handleClose={handleClose}
        selectedValue={selectedSpeciality}
      />
    </>
  );
};
export default Specialty;
