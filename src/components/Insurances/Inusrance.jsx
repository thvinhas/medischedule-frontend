import { Container, Row } from "react-bootstrap";
import Header from "../Header";
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
const insurances = [
  {
    id: 1,
    name: "VHI",
  },
  {
    id: 2,
    name: "Irish Life",
  },
  {
    id: 3,
    name: "AIB",
  },
];

const Insurance = () => {
  const [data, useData] = useState(insurances);
  return (
    <>
      <div className="page">
        <div className="header">
          <h1>Insurances</h1>
        </div>
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
};
export default Insurance;
