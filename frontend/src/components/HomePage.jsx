import React, { useEffect, useState } from "react";
import moment from "moment/moment";

import axios from "axios";
import { NavLink } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import DataTable from "datatables.net-dt";

const HomePage = () => {
  const [s, setS] = useState([]);
  const [original, setOriginal] = useState([]);
  const [text,setText] = useState("");

  const url = "https://localhost:7081/api/Employees";
 
  const getData = () => {
    axios.get(url).then((r) => {
      setS(r.data);
      setOriginal(r.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const history = useNavigate();

  const handleButtonClick = () => {
    history("/createuser");
  };
  const updateFilterValue = (event) => {
    setText(event.target.value);

    const filterData = (data) => {
      return data.filter((row) =>
        row.firstName.toLowerCase().includes(text.toLowerCase()) ||
        row.lastName.toLowerCase().includes(text.toLowerCase()) 
      );
    };

    if (event.target.value == "") {
      setS(original);
    } else {
      setS(filterData);
    }
  };

  return (
    <div>
      <nav className="navbar navbar-dark bg-mynav">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            My App
          </a>
        </div>
      </nav>

      <div className="container">
        <div className="d-flex bd-highlight mb-3">
          <div className="me-auto p-2 bd-highlight">
            <h2>Users</h2>
          </div>

          <div className="p-2 bd-highlight">
            <NavLink to="/createuser">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleButtonClick}
              >
                Create
              </button>
            </NavLink>
          </div>
        </div>

        <div className="filter-search">
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              name="text"
              value={text}
              placeholder="Search"
              onChange={updateFilterValue}
            />
          </form>
        </div>

        <table className="table" id="myTable">
          <thead>
            <tr>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Mobile</th>
              <th>DOB</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {s.map((data) => {
              return (
                <tr>
                  <td>{data.employeeId}</td>
                  <td>{data.firstName}</td>
                  <td>{data.lastName}</td>
                  <td>{data.mobile}</td>
                  <td> {moment(data.dob).format("DD-MMM-YYYY")}</td>
                  <td>{data.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HomePage;
