import { useState } from "react";
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
const hospitals = [
  {
    id: 1,
    name: "St. Vincent's University Hospital",
  },
  {
    id: 2,
    name: "Mater Misericordiae University Hospital",
  },
  {
    id: 3,
    name: "Beaumont Hospital",
  },
];

const Hospital = () => {
  const [data, useData] = useState(hospitals);
  return (
    <>
      <div className="page">
        <h1>Hospitals</h1>
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
};
export default Hospital;
