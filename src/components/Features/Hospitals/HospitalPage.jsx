import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { fetchHospitals } from "./services/HospitalSerive";

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
const Hospital = () => {
  const [hospitals, sethospitals] = useState([]);

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

  return (
    <>
      <div className="page">
        <h1>Hospitals</h1>
        <DataTable columns={columns} data={hospitals} />
      </div>
    </>
  );
};
export default Hospital;
