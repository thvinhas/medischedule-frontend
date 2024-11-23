import { Container, Row } from "react-bootstrap";
import Header from "./Header";
import { useState } from "react";
import Griddle, { plugins } from "griddle-react";
import DataTable from "react-data-table-component";

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
    selector: (row) => row.insurance,
    sortable: true,
  },
];

// TODO add this to be get by the server
const patients = [
  {
    id: 1,
    name: "Thiago",
    insurance: "VHI",
  },
  {
    id: 2,
    name: "Tamires",
    insurance: "VHI",
  },
  {
    id: 3,
    name: "Karine",
    insurance: "VHI",
  },
];

const Patient = () => {
  const [data, useData] = useState(patients);
  return (
    <>
      <div className="page">
        <h1>Insurances</h1>
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
};
export default Patient;
