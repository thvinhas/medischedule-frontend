import { Container, Row } from "react-bootstrap";
import Header from "../../Header";
import { useEffect, useState } from "react";
import Griddle, { plugins } from "griddle-react";
import DataTable from "react-data-table-component";
import axios from "axios";
import { fetchInsurances } from "./services/InsuranceService";

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

const Insurance = () => {
  const [insurances, setInsurances] = useState([]);

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
        </div>
        <DataTable columns={columns} data={insurances} />
      </div>
    </>
  );
};
export default Insurance;
