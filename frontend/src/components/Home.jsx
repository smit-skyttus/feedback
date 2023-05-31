import DataTables from 'datatables.net-dt';
import React from 'react'
import { NavLink } from "react-bootstrap";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const {users} = useSelector(state=>state);
  // console.log(users);

  const history = useNavigate();
  const handleButtonClick = () => {
    history("/createuser");
  };

  let table = new DataTables('#myTable',{
    stateSave:true
  });
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
            {users.usersList.map((data) => {
              return (
                <tr>
                  <td>{data.employeeId}</td>
                  <td>{data.firstName}</td>
                  <td>{data.lastName}</td>
                  <td>{data.mobile}</td>
                  <td>{data.dob}</td>
                  <td>{data.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home