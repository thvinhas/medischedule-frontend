import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import { fetchPatients } from "./services/PatientService";

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
];

const Patient = () => {
  const [patients, setPacients] = useState([]);

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
        <h1>Insurances</h1>
        <DataTable columns={columns} data={patients} />
      </div>
    </>
  );
};
export default Patient;
