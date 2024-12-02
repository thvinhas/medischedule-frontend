import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import { fetchServices } from "./services/SpecialityService";

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
  const [specialites, setSpecialites] = useState([]);
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
  return (
    <>
      <div className="page">
        <h1>Specialites</h1>
        <DataTable columns={columns} data={specialites} />
      </div>
    </>
  );
};
export default Specialty;
