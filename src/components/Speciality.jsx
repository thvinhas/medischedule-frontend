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
];

// TODO add this to be get by the server
const specialites = [
  {
    id: 1,
    name: "Cardiology",
  },
  {
    id: 2,
    name: "Neurology",
  },
  {
    id: 3,
    name: "Orthopedics",
  },
];

const Specialty = () => {
  const [data, useData] = useState(specialites);
  return (
    <>
      <div className="page">
        <h1>Specialites</h1>
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
};
export default Specialty;
